import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Button text={"Continue"} />
      <h1 className={styles.title}>Welcome back!!</h1>
    </div>
  );
}*/
