import "./App.css";
import Main from "./components/Main";
import Destinations from "./components/Destinations";
import Tours from "./components/Tours";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Pages from "./components/Pages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/destinations">
            <Destinations />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/tours">
            <Tours />
          </Route>
          <Route path="/pages">
            <Pages />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
