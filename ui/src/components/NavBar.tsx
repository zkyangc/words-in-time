import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavbarBrand />
          <NavbarToggler toggle={toggle} isOpen={isOpen} />
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <NavLinks />
            <DonateButton />
          </div>
        </div>
      </nav>
    </>
  );
};

const NavbarBrand = () => (
  <a className="navbar-brand" href="#">
    Word in Time
  </a>
);

const NavbarToggler = ({ toggle, isOpen }) => (
  <button
    className="navbar-toggler"
    type="button"
    onClick={toggle}
    aria-controls="navbarNav"
    aria-expanded={isOpen ? "true" : "false"}
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
);

const NavLinks = () => (
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link" href="#">
        Login
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Sign up
      </a>
    </li>
  </ul>
);

const DonateButton = () => (
  <form className="d-flex">
    <button className="btn btn-outline-success" type="submit">
      Donate
    </button>
  </form>
);

export default Navbar;
