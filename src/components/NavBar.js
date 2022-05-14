import hjalpLogo from "../images/hjalp-logo.png";

function Navbar() {
  return (
    <header>
      <div className="App-Header">
        <div className="Navbar-Buttons">
          <button type="button" className="btn btn-primary">
            Login
          </button>
          <button type="button" className="btn btn-dark">
            Sign up
          </button>
        </div>
        <div className="Logo-Block">
          <img className="logo" src={hjalpLogo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
