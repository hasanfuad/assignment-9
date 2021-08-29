import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    name: "",
    email: ""
  });
  return (
    <div className="app">
      <p>Email: {loggedInUser.email}</p>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/destination">
              <Destination />
            </PrivateRoute>
            
            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
