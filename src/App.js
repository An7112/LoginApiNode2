import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import signin from "./components/signin";
import signup from "./components/signup";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={signin} />
          <Route exact path="/signup" component={signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
