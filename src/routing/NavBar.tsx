import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{background: '#f0f0f0', marginBottom: '1rem'}}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({isActive}) => isActive ? "active nav-link" : "nav-link"}>
                Home
              </NavLink>
              {/*<Link className="nav-link" to="/">Home</Link>*/}
              {/*<a className="nav-link active" href="#">Home</a>*/}
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link">Users</NavLink>
              {/*<Link className="nav-link" to="/users">Users</Link>*/}
              {/*<a className="nav-link" href="/users">Users</a>*/}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
