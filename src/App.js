import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import useViewport from "../src/Hooks/useViewport";
import "./global.css";
import Footer from "./components/Footer";
import Button from "@mui/material/Button";

function App() {
  const { width } = useViewport();
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
