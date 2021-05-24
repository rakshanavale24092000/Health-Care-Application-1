import "./App.css";
import About from "./pages/About";
import Login from "./pages/Login";
import Boarding from "./pages/OnBoardingPage";
import BoardingTwo from "./pages/OnBoardingPageTwo";
import Dashboard from "./pages/Dashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/boarding" component={Boarding} exact />
        <Route path="/boardingTwo" component={BoardingTwo} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
     
    </div>
  );
}

export default App;