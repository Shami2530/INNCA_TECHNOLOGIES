import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./Placeholder.css";

function Placeholder({ title, subtitle }) {
  return (
    <div className="placeholder-page">
      <Navbar />

      <main className="placeholder-content">
        <div className="placeholder-glow placeholder-glow-one" />
        <div className="placeholder-glow placeholder-glow-two" />

        <span className="section-eyebrow">INNCA TECHNOLOGIES</span>

        <h1>{title}</h1>

        <p>{subtitle}</p>

        <Link to="/" className="placeholder-button">
          <ArrowLeft size={17} />
          Back Home
        </Link>

        <div className="placeholder-label">
          This page is currently under development.
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Placeholder;