import { Link } from "react-router-dom";
function Header() {
  return <h2>Bienvenido a Marcadores</h2>;
}

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link
              className="btn btn-outline-info navbar-brand mx-auto text-white"
              to="/"
              aria-label="Bootstrap"
            >
              Inicio
            </Link>
            
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right"></ul>
          </div>
          <div className="nav-item dropdown my-2 my-sm-0">
            <Link className="btn btn-outline-warning" to="/login">Login</Link>
  
            <Link className="btn btn-outline-warning mx-2" to="/create">Create</Link>
      
          </div>
        </div>
       
      </nav>
    </>
  );
}

export default Header;
