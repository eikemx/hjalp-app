import hjalpLogo from "../images/hjalp-logo.png";

function Navbar({handleLogoClick}) {

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
        <div className="Logo-Block" onClick={handleLogoClick}>
          <a className="image-link" href="/" >
            <img className="logo" href="/" src={hjalpLogo} alt="logo" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
