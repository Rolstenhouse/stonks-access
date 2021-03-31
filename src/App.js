import "./App.css";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { AccessForm } from "./AccessForm.js";
import { HashRouter, Route, Switch } from "react-router-dom";
import Admin from "./admin/Admin";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Inter",
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    b: { fontWeight: 800 },
  },
  palette: {
    secondary: {
      main: "#ffffff",
    },
  },
  overrides: {
    MuiTextField: {
      marginTop: 4
    }
  }
});

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <div className="App">
//         <AccessForm/>
//       </div>
//     </ThemeProvider>
//   );
// }

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={AccessForm} />
          <Route exact path="/admin" component={Admin} />
          <Route component={() => <div>404 Not found</div>} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}
