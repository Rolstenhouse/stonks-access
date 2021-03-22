import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { usePlaidLink } from "react-plaid-link";

import { Lock } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { EnterTradesTable } from "./EnterTradesTable";
import ManTradesTable from "./ManTradesTable";
import { ArrowBackIosRounded } from "@material-ui/icons";
/*********
 * 3 Steps:ti
 * 1) Check Access Code
 * 2) Add email (and other information), phone, (not displayed), url to show, subdomain, title, byline
 * 3) Connect plaid
 * 4) Wait a day for the page to be created
 */

import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
  LinearProgress,
  Link,
  IconButton,
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";

let BASE_DOMAIN = `https://api.withlaguna.com`;
if (process.env.NODE_ENV === "development") BASE_DOMAIN = "http://0.0.0.0:5000";

const AccessCode = ({ advanceStep }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const theme = useTheme();

  const handleFailure = () => {
    setError(true);
  };

  const handleSubmit = (e) => {
    setError(false);
    axios
      .get(`${BASE_DOMAIN}/stonks/access/code/${input}`)
      .then((res) => {
        if (res.data.allow) {
          advanceStep();
        } else {
          handleFailure();
        }
      })
      .catch(() => {
        handleFailure();
      });
  };

  return (
    <>
      <Lock />
      <Typography variant="h4">Enter your early access code</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Early Access Code"
          error={error}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="OPEN SESAME"
          helperText={error && "Invalid access code. Please try again :)"}
        />
        <Button
          style={{
            backgroundImage: "linear-gradient(to top right, #A01A7D, #EC4067)",
            color: "white",
            marginLeft: theme.spacing(4),
          }}
          onClick={handleSubmit}
        >
          Enter
        </Button>
      </form>
    </>
  );
};

export const UserInfo = ({
  advanceStep,
  setUserId,
  editId,
  editDetails,
  setEditDetails,
  refresh,
}) => {
  const theme = useTheme();
  const [error, setError] = useState(false);

  const handleFailure = () => {
    setError(true);
  };

  const [title, setTitle] = useState(editDetails.title);
  const [description, setDescription] = useState(editDetails.description);
  const [link, setLink] = useState(editDetails.link);
  const [subdomain, setSubdomain] = useState(editDetails.subdomain);
  const [name, setName] = useState(editDetails.name);
  const [email, setEmail] = useState(editDetails.email);
  const [phone, setPhone] = useState(editDetails.phone);
  const [showAmounts, setShowAmounts] = useState(editDetails.show_amounts);
  const [userId, setDangerousUserId] = useState("");

  useEffect(() => {
    setTitle(editDetails.title);
    setDescription(editDetails.description);
    setLink(editDetails.link);
    setSubdomain(editDetails.subdomain);
    setName(editDetails.name);
    setEmail(editDetails.email);
    setPhone(editDetails.phone);
    setShowAmounts(editDetails.show_amounts);

    //
    if (!!editId) {
      axios
        .post(`${BASE_DOMAIN}/stonks/access/exchange`, { edit_id: editId })
        .then((res) => {
          setDangerousUserId(res.data.user);
        });
    }
  }, [editDetails]);

  const add_plaid = editDetails.plaid_connected != !!editDetails.subdomain;

  // TODO: avoid resubmitting every time here, and just get the user associated
  const handleSubmit = (e) => {
    setError(false);
    axios
      .post(`${BASE_DOMAIN}/stonks/access/form`, {
        title: title,
        description: description,
        link: link,
        subdomain: subdomain,
        name: name,
        email: email,
        phone: phone,
        show_amounts: showAmounts === "yes",
        edit_id: editId,
      })
      .then((res) => {
        if (res.data.allow) {
          setUserId(res.data.id);
          // Update details via callback?
          setEditDetails({
            title: title,
            description: description,
            link: link,
            subdomain: subdomain,
            show_amounts: showAmounts ? "yes" : "no",
            name: name,
            email: email,
            phone: phone,
            plaid_connected: editDetails.plaid_connected,
            editUrl: res.data.editUrl,
          });
          advanceStep();
        } else {
          handleFailure();
        }
      })
      .catch(() => {
        handleFailure();
      });
  };

  const [subdomainError, setSubdomainError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const checkUnique = (body) => {
    if (!!editId) {
      if (body.subdomain && body.subdomain == editDetails.subdomain) return;
      else if (body.email && body.email === editDetails.email) return;
      else if (body.phone && body.phone === editDetails.phone) return;
    }
    axios
      .get(`${BASE_DOMAIN}/stonks/access/check_unique`, {
        params: body,
      })
      .then((res) => {})
      .catch(() => {
        if (body.subdomain)
          setSubdomainError("Subdomain has already been claimed");
        else if (body.email) setEmailError("Email has already been claimed");
        else if (body.phone) setPhoneError("Phone has already been claimed");
      });
  };

  const subdomain_link = `https://${editDetails.subdomain}.withlaguna.com`;

  return (
    <>
      <Typography variant="h4">Account creation and configuration</Typography>
      {!editId && (
        <>
          <Typography variant="h6">
            <Link href="/#/signin">Sign in</Link>
          </Typography>
        </>
      )}
      {add_plaid && (
        <div
          style={{
            padding: theme.spacing(4),
          }}
        >
          <Alert severity="error">
            Your page is live, but your brokerage hasn't been connected yet
          </Alert>
          <Button
            style={{
              backgroundImage:
                "linear-gradient(to top right, #A01A7D, #EC4067)",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Import your trades
          </Button>
        </div>
      )}
      {refresh && (
        <div
          style={{
            padding: theme.spacing(4),
          }}
        >
          <Alert severity="warning">
            Your brokerage credentials have expired. Please re-log them
          </Alert>
          <Button
            style={{
              backgroundImage:
                "linear-gradient(to top right, #A01A7D, #EC4067)",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Reconnect
          </Button>
        </div>
      )}
      <form>
        <Paper
          style={{ padding: theme.spacing(6), marginBottom: theme.spacing(2) }}
        >
          <Typography variant="h6">Your page information</Typography>
          <Typography variant="caption">
            Used to customize your page :){" "}
            <Link href="https://rob.withlaguna.com">Sample Site</Link>
          </Typography>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            helperText="Ex) Rob's Stonks"
            fullWidth
          ></TextField>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            helperText="Ex) Trading on long-term horizons"
            fullWidth
          ></TextField>
          <TextField
            value={link}
            onChange={(e) => setLink(e.target.value)}
            label="Personal Bio Link (optional)"
            helperText="Twitter handle, website, Linkedin, etc. Write as https://withterra.com"
            fullWidth
          ></TextField>
          <TextField
            value={subdomain}
            onChange={(e) => {
              let temp = e.target.value;
              temp = temp.replace(/\W/g, "");
              setSubdomain(temp);
              setSubdomainError("");
            }}
            onBlur={(e) => checkUnique({ subdomain: subdomain })}
            label="Desired subdomain"
            helperText={
              !!subdomainError
                ? subdomainError
                : "i.e enter 'rob' if you want, rob.withlaguna.com"
            }
            error={!!subdomainError}
            fullWidth
          ></TextField>
          <FormControl
            component="fieldset"
            margin="none"
            fullWidth
            size="small"
            style={{ textAlign: "left", marginTop: theme.spacing(1) }}
          >
            <FormLabel component="legend">Portfolio privacy setting</FormLabel>
            <RadioGroup
              aria-label="show amounts"
              name="Show portfolio amounts"
              value={showAmounts}
              onChange={(e) => setShowAmounts(e.target.value)}
            >
              <FormControlLabel
                value="no"
                control={<Radio color="primary" size="small" />}
                label="Show portfolio percentage only"
              />
              <FormControlLabel
                value="yes"
                control={<Radio color="primary" size="small" />}
                label="Show portfolio amounts in USD"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
        <Paper
          style={{ padding: theme.spacing(6), marginBottom: theme.spacing(2) }}
        >
          <Typography variant="h6">Confidential information</Typography>
          <Typography variant="caption">
            Information entered in this section will NEVER be revealed on your
            site
          </Typography>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Full name"
            fullWidth
          ></TextField>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            onBlur={() => {
              checkUnique({ email: email });
            }}
            helperText={!!emailError ? emailError : ""}
            error={!!emailError}
            label="Email"
            fullWidth
          ></TextField>
          <TextField
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setPhoneError("");
            }}
            onBlur={(e) => checkUnique({ phone: phone })}
            helperText={!!phoneError ? phoneError : ""}
            error={!!phoneError}
            label="Phone"
            fullWidth
          ></TextField>
        </Paper>
        {error && (
          <Typography color="red">
            Something went wrong :(. Please double check your information
          </Typography>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {!!editDetails.subdomain && (
            <div>
              <Typography>Check out your page: </Typography>
              <Link href={subdomain_link}>{subdomain_link}</Link>
            </div>
          )}
          <Button
            style={{
              backgroundImage:
                "linear-gradient(to top right, #A01A7D, #EC4067)",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            {!!editId ? "Update" : "Submit"} Information
          </Button>
        </div>
      </form>
      {!!userId && (
        <>
          <Typography variant="h4">Manual trades</Typography>
          <ManTradesTable userId={userId} />
        </>
      )}
    </>
  );
};

const CSVUpload = ({ userId, advanceStep }) => {
  const [showUpload, setShowUpload] = useState(false);
  const [presignedPost, setPresignedPost] = useState({});
  const [uploading, setUploading] = useState(false);
  const [uploadFile, setUploadFile] = useState({
    preview: "",
    raw: "",
    name: "",
  });
  const handleChange = (e) => {
    if (e.target.files.length) {
      let name = e.target.value.split("\\").pop();
      setUploadFile({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
        name: name,
      });
      getSignedUrl(name);
    }
  };

  const getSignedUrl = (name) => {
    let fileName = name.replace(/[^\w\d_\-.]+/gi, "");
    axios
      .get(`${BASE_DOMAIN}/stonks/access/sign/${userId}`, {
        params: { file_name: fileName },
      })
      .then((res) => {
        setPresignedPost(res.data);
      });
  };

  const onUploadProgress = (e) => {
    console.log(e);
  };

  const handleUpload = (e) => {
    setUploading(true);
    e.preventDefault();

    console.log(presignedPost);
    console.log(uploadFile);

    const formData = new FormData();
    Object.keys(presignedPost.fields).forEach((k) => {
      const v = presignedPost.fields[k];
      formData.append(k, v);
    });
    formData.append("file", uploadFile.raw);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const progress = parseInt(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        );
        // Update state here
        onUploadProgress(progress);
      },
    };

    axios
      .post(`${presignedPost.url}`, formData, config)
      .then((res) => {
        advanceStep(3);
        axios
          .get(`${BASE_DOMAIN}/stonks/access/uploaded/${userId}`)
          .then((res) => {
            console.log(res);
          })
          .catch(console.error("Did not set manual trade issue"));
      })
      .catch(console.error("Uploading problemo"))
      .finally(setUploading(false));
  };

  return (
    <>
      {!uploadFile.preview ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button
            component="label"
            style={{
              backgroundImage:
                "linear-gradient(to top right, #A01A7D, #EC4067)",
              color: "white",
            }}
          >
            Upload a screenshot of your positions
            <input type="file" hidden onChange={handleChange} />
          </Button>
          <Typography variant="caption">
            We'll automatically process the data for you
          </Typography>
        </div>
      ) : uploading ? (
        <CircularProgress />
      ) : (
        <Button
          style={{
            backgroundImage: "linear-gradient(to top right, #669bbc, #ecd1e5)",
            color: "white",
            fontWeight: 800,
          }}
          onClick={handleUpload}
        >
          Upload {uploadFile.name}
        </Button>
      )}
    </>
  );
};

const PlaidInfo = ({ advanceStep, userId, refresh, title }) => {
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const theme = useTheme();

  const [plaidStatus, setPlaidStatus] = useState([]);

  const getPlaidStatus = () => {
    // ALWAYS GET PLAID STATUS FROM THE API
    axios
      .get(`https://api.withlaguna.com/stonks/access/plaid_status`)
      .then((res) => {
        setPlaidStatus(res.data?.brokers || []);
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_DOMAIN}/stonks/access/plaid_token/${userId}`, {
        params: {
          refresh: refresh,
        },
      })
      .then((res) => {
        if (res.data.link_token) {
          setToken(res.data.link_token);
        } else {
          handleFailure();
        }
      })
      .catch(() => {
        handleFailure();
      });

    getPlaidStatus();
  }, []);

  const handleFailure = () => {
    setError(true);
  };

  const onSuccess = useCallback((token, metadata) => {
    // when refreshing no need to post any new data
    if (refresh) {
      advanceStep(3);
      return;
    }
    axios
      .post(`${BASE_DOMAIN}/stonks/access/plaid/${userId}`, {
        token: token,
        metadata: metadata,
      })
      .then((res) => {
        if (res.data.allow) {
          advanceStep(3);
        } else {
          handleFailure();
        }
      });
  });

  const config = {
    token: token,
    onSuccess,
  };

  const { open, ready, plaidError } = usePlaidLink(config);

  const handleManualEntry = () => {
    advanceStep(7);
  };

  const handleFileUpload = () => {
    advanceStep(5);
  };

  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h4">Connect your investment brokerage</Typography>
      <Typography>
        Your portfolio is automatically monitored, and trades are immediately
        updated using Plaid, the standard in brokerage connections.
      </Typography>
      <Typography variant="caption">Only read access is allowed</Typography>
      {(error || plaidError || !title) && (
        <Typography> Something went wrong :( </Typography>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: theme.spacing(2),
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
          }}
        >
          <Button
            onClick={() => {
              open();
            }}
            style={{
              backgroundImage:
                "linear-gradient(to top right, #A01A7D, #EC4067)",
              color: "white",
            }}
          >
            <b style={{ marginRight: "4px" }}>Auto</b> Connect brokerage
          </Button>
          {plaidStatus.map((status) => (
            <Alert style={{ marginTop: theme.spacing(2) }} severity="warning">
              {status}
            </Alert>
          ))}
        </div>
        <div
          style={{
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
          }}
        >
          or
        </div>
        <Button
          component="label"
          style={{
            backgroundImage: "linear-gradient(to top right, #bd5fa4, #f27995)",
            color: "white",
          }}
          onClick={handleFileUpload}
        >
          <b style={{ marginRight: "4px" }}>EASIEST</b> Upload a screenshot of
          your positions
        </Button>
        <Typography variant="caption">
          We'll automatically process the data for you
        </Typography>
        {/* <CSVUpload userId={userId} advanceStep={advanceStep} /> */}
        <div
          style={{
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
          }}
        >
          or
        </div>
        <Button
          component="label"
          style={{
            backgroundImage: "linear-gradient(to top right, #bd5fa4, #f27995)",
            color: "white",
          }}
          onClick={handleManualEntry}
        >
          <b style={{ marginRight: "4px" }}>Manual</b> Enter trades
        </Button>
      </div>

      <>
        {showTable && (
          <>
            <ManTradesTable userId={userId} />
            <Button
              onClick={() => {
                advanceStep();
              }}
              style={{
                backgroundImage:
                  "linear-gradient(to top right, #729FBF, #E0CDE1)",
                color: "white",
              }}
            >
              CONTINUE
            </Button>
          </>
        )}
      </>
    </>
  );
};

const Wait = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} />
      <Typography variant="h4">
        Your page is building! We'll send you an email when it's ready
      </Typography>
      <Typography variant="p1">
        We've gotten reports that our emails are ending in your spam box. Please
        double-check there as well after ~5 min
      </Typography>
      <Typography variant="caption">
        Feedback? Email team@withlaguna.com
      </Typography>
    </>
  );
};

const Finished = ({ displayDetail }) => {
  const { width, height } = useWindowSize();
  console.log("in finish with display", displayDetail);
  let REDIRECT_BASE =
    process.env.NODE_ENV === "development" ? "http://" : "https://";
  let REDIRECT_DOMAIN =
    process.env.NODE_ENV === "development"
      ? ".localhost:4200/"
      : ".withlaguna.com/";

  const pageUrl = `${REDIRECT_BASE}${displayDetail.subdomain}${REDIRECT_DOMAIN}`;

  return (
    <>
      <Confetti width={width} height={height} />
      <Typography variant="h4">Congrats {displayDetail.name}!</Typography>
      <Typography variant="h5">Your page is ready at</Typography>
      <Typography>
        <Link href={pageUrl}>{displayDetail.subdomain}.withLaguna.com</Link>
      </Typography>

      <Typography style={{ marginTop: 30 }}>
        You can edit your profile at <br />
        <Link href={displayDetail.editUrl}>{displayDetail.editUrl}</Link>
      </Typography>

      <Button
        href={pageUrl}
        style={{
          backgroundImage: "linear-gradient(to top right, #A01A7D, #EC4067)",
          color: "white",
          marginTop: 50,
        }}
      >
        View Page
      </Button>
    </>
  );
};

const Update = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <Typography variant="h4">Thanks for updating your page :)</Typography>
      <br />
      <Typography variant="caption">
        Feedback? Email team@withlaguna.com
      </Typography>
    </>
  );
};

const InstructiveFileUpload = ({ userId, advanceStep }) => {
  return (
    <>
      <img width="800px" src="/upload_robinhood.png" />
      <CSVUpload userId={userId} advanceStep={advanceStep} />
    </>
  );
};

// const UploadTrades = ({ advanceStep, setShowUpload, userId }) => {

// };

const SignIn = ({}) => {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const theme = useTheme();

  const handleSubmit = () => {
    setSubmitting(true);
    axios
      .get(`${BASE_DOMAIN}/stonks/access/send`, { params: { email: email } })
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.err);
        } else {
          setError("Please email support@withlaguna.com");
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div
      style={{ marginLeft: theme.spacing(12), marginRight: theme.spacing(12) }}
    >
      <Typography variant="h5">
        Enter your email address to get your sign-in link
      </Typography>
      <br />
      <br />
      {!success && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            error={!!error}
            helperText={error}
          />
          <br />
          {submitting && <LinearProgress />}
          <Button
            component="label"
            style={{
              backgroundImage:
                "linear-gradient(to top right, #A01A7D, #EC4067)",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      )}
      {!!success && (
        <Typography varian="body">
          You've been sent an email. Click it to access your admin page
        </Typography>
      )}
      <br />
      <br />
      <Typography variant="caption">
        Having an issue? <a href="mailto:team@withlaguna.com">Contact us</a>
      </Typography>
    </div>
  );
};

export const AccessForm = () => {
  // Ignore Access Code
  const [step, setStep] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [userId, setUserId] = useState();
  const [editId, setEditId] = useState();
  const [err, setErr] = useState(false);
  const [editDetails, setEditDetails] = useState({
    title: "",
    description: "",
    link: "",
    subdomain: "",
    show_amounts: "no",
    name: "",
    email: "",
    phone: "",
    plaid_connected: false,
  });
  const theme = useTheme();

  // IF in refresh mode
  useEffect(() => {
    let hash = window.location.hash;
    if (hash == "#/signin") {
      setStep(6);
    }
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let plaid_refresh_id = params.get("plaid_refresh");
    if (!!plaid_refresh_id) {
      setRefresh(true);
      // setUserId(plaid_refresh_id);
    }
    let plaid_login = params.get("plaid_login");
    let edit_id = params.get("edit");
    if (!!edit_id) {
      setStep(1);
      setEditId(edit_id);

      if (!!plaid_login) {
        axios
          .post(`${BASE_DOMAIN}/stonks/access/exchange`, { edit_id: edit_id })
          .then((res) => {
            setUserId(res.data.user);
          });
        setStep(2);
      }

      // fetch initial props
      axios
        .get(`${BASE_DOMAIN}/stonks/access/edit_info`, {
          params: {
            edit_id: edit_id,
          },
        })
        .then((res) => {
          let editable = Object.assign({}, res.data);
          editable.show_amounts = !!editable.show_amounts ? "yes" : "no";
          setEditDetails(editable);
        })
        .catch((err) => {
          console.log(err);
          setErr(true);
        });
    }
  }, []);

  function renderStep() {
    if (err) {
      return <div>Something went wrong with laguna</div>;
    } else {
      if (step === 0) return <AccessCode advanceStep={() => setStep(1)} />;
      else if (step === 1)
        return (
          <UserInfo
            advanceStep={() =>
              editDetails.plaid_connected && !refresh ? "" : setStep(2)
            }
            setUserId={setUserId}
            refresh={refresh}
            editId={editId}
            editDetails={editDetails}
            setEditDetails={setEditDetails}
          />
        );
      else if (step === 2)
        return (
          <PlaidInfo
            userId={userId}
            advanceStep={setStep}
            refresh={refresh}
            title={editDetails.title}
          />
        );
      else if (step === 3) return <Wait />;
      else if (step === 4) return <Update />;
      else if (step === 5)
        return <InstructiveFileUpload userId={userId} advanceStep={setStep} />;
      else if (step == 6) return <SignIn />;
      else if (step == 7)
        return <ManTradesTable userId={userId} advanceStep={setStep} />;
      else if (step == 8) return <Finished displayDetail={editDetails} />;
      else return <></>;
    }
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to top right, #669bbc, #ecd1e5)",
      }}
      className="App"
    >
      <Grid item xs={11} sm={8} md={6}>
        {(step == 7 || step == 5) && (
          <IconButton
            size="small"
            style={{ float: "left", marginTop: theme.spacing(3) }}
            onClick={() => setStep(2)}
          >
            <ArrowBackIosRounded />
            Back
          </IconButton>
        )}
        <Paper
          style={{
            paddingTop: theme.spacing(12),
            paddingBottom: theme.spacing(12),
          }}
        >
          {step >= 0 && renderStep()}
        </Paper>
      </Grid>
    </Grid>
  );
};
