import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      {/* FINAL CTA */}
      <section className="footer-cta">
        <div className="footer-cta-glow" />

        <div className="footer-cta-inner">
          <span className="footer-eyebrow">
            HAVE AN IDEA?
          </span>

          <h2>
            Let's build
            <span> what comes next.</span>
          </h2>

          <p>
            Intelligent products, meaningful experiences,
            and technology designed for a better future.
          </p>

          <Link to="/contact" className="footer-main-button">
            Start a conversation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        <div className="footer-top">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">
                I
              </span>

              <span>
                INNCA
                <small>TECHNOLOGIES</small>
              </span>
            </Link>

            <p>
              An AI and social product company
              building intelligent experiences
              for the world ahead.
            </p>

            <div className="footer-status">
              <span className="status-dot" />
              Building the future
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">
              Explore
            </span>

            <Link to="/">Home</Link>
            <Link to="/career">Career</Link>
            <Link to="/innovative-solutions">
              Innovative Solutions
            </Link>
            <Link to="/future">Future</Link>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">
              Company
            </span>

            <Link to="/founder">Founder</Link>
            <Link to="/contact">Contact</Link>
            <a href="#story">Our Story</a>
            <a href="#purpose">Our Purpose</a>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">
              Connect
            </span>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={13} />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <ArrowUpRight size={13} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={13} />
            </a>

            <a href="mailto:hello@innca.tech">
              Email
              <Mail size={13} />
            </a>
          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">

          <span>
            © {year} INNCA Technologies.
            All rights reserved.
          </span>

          <div className="footer-bottom-right">
            <span>AI Powered.</span>
            <span>Human Centred.</span>
            <span>Future Driven.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;