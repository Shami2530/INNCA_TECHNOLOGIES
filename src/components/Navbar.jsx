import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

import logo from "../assets/logo/innca-logo.png";

import "./Navbar.css";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Career", path: "/career" },
  { name: "Innovative Solutions", path: "/innovative-solutions" },
  { name: "Future", path: "/future" },
  { name: "Founder", path: "/founder" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">

        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="INNCA Technologies Home"
        >
          <span className="navbar-logo-box">
            <img src={logo} alt="INNCA Technologies" />
          </span>

          <span className="navbar-brand-name">
            INNCA
            <small>TECHNOLOGIES</small>
          </span>
        </NavLink>

        <nav className={`navbar-links ${mobileOpen ? "mobile-open" : ""}`}>
          <div className="mobile-nav-heading">
            <span>Navigate</span>
            <span>01 — 06</span>
          </div>

          {navigation.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{item.name}</span>

              <ArrowUpRight className="nav-arrow" size={15} />
            </NavLink>
          ))}

          <div className="mobile-nav-footer">
            <span>AI Powered.</span>
            <span>Human Centred.</span>
          </div>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen((previous) => !previous)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;