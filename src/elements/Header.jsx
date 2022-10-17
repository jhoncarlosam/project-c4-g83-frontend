import { Link } from "react-router-dom";
function Header() {
  return <h2>Bienvenido a Marcadores</h2>;
}

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link
              className="btn btn-outline-info navbar-brand mr-0 mr-md-2"
              to="/"
              aria-label="Bootstrap"
            >
              M
            </Link>
            <a className="navbar-brand" href="/">
              Inicio
            </a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right"></ul>
          </div>
          <div className="nav-item dropdown my-2 my-sm-0">
            <button className="btn btn-outline-warning">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
