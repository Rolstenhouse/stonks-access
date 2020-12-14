import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { usePlaidLink } from "react-plaid-link";

import { Lock } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

/*********
 * 3 Steps:
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
  Link
} from "@material-ui/core";

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
      .get(`https://api.withlaguna.com/stonks/access/code/${input}`)
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

const UserInfo = ({ advanceStep, setUserId }) => {
  const theme = useTheme();
  const [error, setError] = useState(false);

  const handleFailure = () => {
    setError(true);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showAmounts, setShowAmounts] = useState("no");

  const handleSubmit = (e) => {
    setError(false);
    axios
      .post(`https://api.withlaguna.com/stonks/access/form`, {
        title: title,
        description: description,
        link: link,
        subdomain: subdomain,
        name: name,
        email: email,
        phone: phone,
        show_amounts: showAmounts === "yes",
      })
      .then((res) => {
        if (res.data.allow) {
          setUserId(res.data.id);
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
    axios
      .get(`https://api.withlaguna.com/stonks/access/check_unique`, {
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

  return (
    <>
      <Typography variant="h4">Account creation and configuration</Typography>
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
              setSubdomain(e.target.value);
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
        <Button
          style={{
            backgroundImage: "linear-gradient(to top right, #A01A7D, #EC4067)",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          Submit Information
        </Button>
      </form>
    </>
  );
};

const PlaidInfo = ({ advanceStep, userId, refresh }) => {
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    axios
      .get(`https://api.withlaguna.com/stonks/access/plaid_token/${userId}`, {
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
  }, []);

  const handleFailure = () => {
    setError(true);
  };

  const onSuccess = useCallback((token, metadata) => {
    // when refreshing no need to post any new data
    if (refresh) {
      advanceStep();
      return;
    }
    axios
      .post(`https://api.withlaguna.com/stonks/access/plaid/${userId}`, {
        token: token,
        metadata: metadata,
      })
      .then((res) => {
        if (res.data.allow) {
          advanceStep();
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

  return (
    <>
      <Typography variant="h4">Connect your investment brokerage</Typography>
      <Typography>
        Your portfolio is automatically monitored, and trades are immediately
        updated using Plaid, the standard in banking connections.
      </Typography>
      <Typography variant="caption">Only read access is allowed</Typography>
      {(error || plaidError) && (
        <Typography> Something went wrong :( </Typography>
      )}
      <Button
        onClick={() => {
          open();
        }}
        style={{
          backgroundImage: "linear-gradient(to top right, #A01A7D, #EC4067)",
          color: "white",
          display: "flex",
          margin: "auto",
          marginTop: theme.spacing(2),
        }}
      >
        Connect bank account
      </Button>
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
      <Typography variant="caption">
        Feedback? Email team@withlaguna.com
      </Typography>
    </>
  );
};

export const AccessForm = () => {
  // Ignore Access Code
  const [step, setStep] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [userId, setUserId] = useState();
  const theme = useTheme();

  // IF in refresh mode
  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let plaid_refresh_id = params.get("plaid_refresh");
    if (!!plaid_refresh_id) {
      setStep(2);
      setRefresh(true);
      setUserId(plaid_refresh_id);
    }
  }, []);

  function renderStep() {
    if (step === 0) return <AccessCode advanceStep={() => setStep(1)} />;
    else if (step === 1)
      return <UserInfo advanceStep={() => setStep(2)} setUserId={setUserId} />;
    else if (step === 2)
      return (
        <PlaidInfo
          userId={userId}
          advanceStep={() => setStep(3)}
          refresh={refresh}
        />
      );
    else if (step === 3) return <Wait />;
    else return <></>;
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
    >
      <Grid item xs={11} sm={8} md={6}>
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
