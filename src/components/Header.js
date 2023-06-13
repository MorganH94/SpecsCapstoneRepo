import { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../store/authContext";

const Header = () => {
  const authCtx = useContext(AuthContext);

  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#f57145" : "",
    };
  };

  return (
    <header className="header flex-row">
      <div className="flex-row">
        <h1>Nirvana</h1> 
        <h4>Thoughts, Feelings, Connectivity.</h4>
      </div>
      <nav>
        <ul className="main-nav">
          <li>
            <NavLink style={styleActiveLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={styleActiveLink} to="profile">
              My Entries
            </NavLink>
          </li>
          <li>
            <NavLink style={styleActiveLink} to="form">
              Add Entry
            </NavLink>
          </li>
          <li>
            <button className="logout-btn" onClick={() => authCtx.logout()}>
              Sign Out
            </button>
          </li>
          <li>
            <NavLink style={styleActiveLink} to="auth">
              Login or Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;