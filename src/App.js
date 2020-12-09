import "./App.css";

import { createMuiTheme } from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/core"
import {AccessForm} from "./AccessForm.js"

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AccessForm/>
      </div>
    </ThemeProvider>
  );
}

export default App;
