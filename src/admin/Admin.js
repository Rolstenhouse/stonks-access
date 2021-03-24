import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Grid,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TextField,
  Snackbar,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { UserInfo, fetchEditDetails } from "../AccessForm";
import { Person, TrendingUp, People, Menu } from "@material-ui/icons";
import ManTradesTable from "../ManTradesTable";
import axios from "axios";
import NumberFormat from "react-number-format";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const drawerWidth = 200;
let BASE_DOMAIN = `https://api.withlaguna.com`;
// if (process.env.NODE_ENV === "development") BASE_DOMAIN = "http://0.0.0.0:5000";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Profile = ({ editId, editDetails, setEditDetails }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setSuccess(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccess(false);
  };
  return (
    <>
      <UserInfo
        editId={editId}
        editDetails={editDetails}
        setEditDetails={setEditDetails}
        onFormSubmit={handleSubmit}
      />
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Updated succesfully!
        </Alert>
      </Snackbar>
    </>
  );
};

const HoldingsTableRow = ({ h }) => {
  const [addingMemo, setAddingMemo] = useState(false);
  const [editorState, setEditorState] = useState();

  const onEditorStateChange = (e) => {
    setEditorState(e);
  };
  return (
    <>
      <TableRow>
        <TableCell>{h.ticker_symbol}</TableCell>
        <TableCell>{h.memo}</TableCell>
        <TableCell>
          <Button onClick={() => setAddingMemo(!addingMemo)}>Edit memo</Button>
        </TableCell>
      </TableRow>
      {addingMemo && (
        <TableRow>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </TableRow>
      )}
    </>
  );
};

const HoldingsTable = ({ editId, subdomain }) => {
  useEffect(() => {
    fetchPortfolio();
  }, [subdomain]);

  const [holdings, setHoldings] = useState([]);
  const fetchPortfolio = () => {
    axios.get(`${BASE_DOMAIN}/stonks/holdings/${subdomain}`).then((res) => {
      setHoldings(res.data.holdings);
    });
  };
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {["Ticker", "Memo"].map((o) => {
              <TableCell>{o}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {holdings.map((h) => {
            return <HoldingsTableRow h={h} editId={editId} />;
          })}
        </TableBody>
      </Table>
    </>
  );
};

const Portfolios = ({ editId, subdomain }) => {
  return (
    <>
      {subdomain && <HoldingsTable editId={editId} subdomain={subdomain} />}
      <ManTradesTable editId={editId} />
    </>
  );
};

const Subscribers = ({ editId }) => {
  const [subs, setSubs] = useState([]);
  const [newSub, setNewSub] = useState({ name: "", phone: "" });
  const [err, setErr] = useState("");
  useEffect(() => {
    axios
      .get(`${BASE_DOMAIN}/stonks/access/subscribers`, {
        params: { edit_id: editId },
      })
      .then((res) => {
        setSubs(res.data.subscribers);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .post(`${BASE_DOMAIN}/stonks/submit`, {
        ...newSub,
        edit_id: editId,
      })
      .then(() => {
        setSubs([...subs, newSub]);
        setNewSub({ name: "", phone: "" });
      })
      .catch((error) => {
        if (error.response) {
          setErr(error.response.data.err);
        } else {
          setErr("Please email support@withlaguna.com");
        }
      });
  };
  return (
    <>
      <Typography variant="h5">
        {!!subs.length ? subs.length : 0} subscribers
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {["Name", "Phone", "Date added"].map((o) => (
              <TableCell>{o}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField
                label="name"
                value={newSub.name}
                onChange={(e) =>
                  setNewSub(Object.assign({}, newSub, { name: e.target.value }))
                }
              />
            </TableCell>
            <TableCell>
              <NumberFormat
                value={newSub.phone}
                format="(###) ###-####"
                customInput={TextField}
                onValueChange={(values) => {
                  const { value } = values;
                  setNewSub(Object.assign({}, newSub, { phone: value }));
                }}
                placeholder="(555)-123-4567"
                label="phone"
                helperText={!!err ? err : ""}
                err={!!err}
              />
            </TableCell>
            <TableCell>
              <Button
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #A01A7D, #EC4067)",
                  color: "white",
                }}
                onClick={handleSubmit}
              >
                Add new sub
              </Button>
            </TableCell>
          </TableRow>
          {subs.map((sub) => {
            return (
              <TableRow>
                <TableCell>{sub.name}</TableCell>
                <TableCell>
                  <NumberFormat
                    displayType="text"
                    value={sub.phone}
                    format="(###) ###-####"
                  ></NumberFormat>
                </TableCell>
                <TableCell>{sub.created_date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

function Admin(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [activeView, setActiveView] = useState(0);
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
    links: [],
  });

  let params = new URLSearchParams(props.location.search);
  let edit_id = params.get("edit");

  useEffect(() => {
    fetchEditDetails(edit_id, (e) => {
      console.log(e);
      setEditDetails(e);
    });
  }, []);

  if (!edit_id) {
    return "Access not allowed. If you believe this was in error please contact support";
  }

  const Views = [
    {
      title: "My profile",
      component: (
        <Profile
          editId={edit_id}
          editDetails={editDetails}
          setEditDetails={setEditDetails}
        />
      ),
      icon: <Person />,
    },
    {
      title: "Portfolios",
      component: (
        <Portfolios editId={edit_id} subdomain={editDetails.subdomain} />
      ),
      icon: <TrendingUp />,
    },
    {
      title: "Subscribers",
      component: <Subscribers editId={edit_id} />,
      icon: <People />,
    },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {Views.map((view, index) => (
          <ListItem
            button
            key={view.title}
            onClick={() => setActiveView(index)}
            selected={activeView == index}
          >
            <ListItemIcon>{view.icon}</ListItemIcon>
            <ListItemText primary={view.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container>
      <Grid item>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            color="transparent"
            elevation={0}
            position="fixed"
            className={classes.appBar}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <Menu />
              </IconButton>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {Views[activeView].component}
          </main>
        </div>
      </Grid>
    </Grid>
  );
}

export default Admin;
