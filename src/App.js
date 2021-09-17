import './App.css';
import Header from './components/Header/Header'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#42B649",
        light: "#E65025",
      },
      secondary: {
        main: "#283593",
      },
    },
  });
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/dashboard"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
