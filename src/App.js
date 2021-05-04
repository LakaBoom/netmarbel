import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Main from "./pages/Main";
import "./static/index.scss";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
