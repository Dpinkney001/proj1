import React from "react";
import "C:/Users/Thees/OneDrive/Desktop/proj1/src/Profile.js";
import "C:/Users/Thees/OneDrive/Desktop/proj1/src/HobbyPage.js";
import "C:/Users/Thees/OneDrive/Desktop/proj1/src/PastJobsPage.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Profile">Home</Link>
            </li>
            <li>
              <Link to="/HobbyPage">Hobby Page</Link>
            </li>
            <li>
              <Link to="/PastJobsPage">Past Jobs Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/HobbyPage">
            <HobbyPage />
          </Route>
          <Route path="/PastJobsPage">
            <PastJobsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

  function HobbyPage() {
    return <h2>HobbyPage</h2>;
  }
  
  function Profile() {
    return <h2>Profile</h2>;
  }
  
  function PastJobsPage() {
    return <h2>PastJobsPage</h2>;
  }