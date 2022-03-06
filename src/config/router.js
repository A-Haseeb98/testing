import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/exterior/index"
import Team from "../components/interior/index";
import ScrollToTop from "./ScrollToTop";

function AppRouter() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path={'/'} component={App} />
                <Route exact path={'/home'} component={Team} />
            </Switch>
        </Router>
    )
}

export default AppRouter;