import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Orbit,
  Zap,
} from "lucide-react";

import Footer from "../../components/Footer";

import universe from "../../assets/products/universe.png";
import wishes from "../../assets/products/wishes.png";
import nivora from "../../assets/products/nivora.png";
import omnigram from "../../assets/products/omnigram.png";
import auraAI from "../../assets/products/aura-ai.png";
import caleroix from "../../assets/products/caleroix.png";
import glowAI from "../../assets/products/glow-ai.png";

import "./InnovativeSolutions.css";

const products = [
  {
    id: "universe",
    name: "UNIVERSE",
    category: "Education · Talent",
    status: "Launching Soon",
    launch: "August / September 2026",
    image: universe,
    accent: "cyan",
    short:
      "An educational ecosystem connecting learners, opportunities and companies.",
    description:
      "UNIVERSE is being designed as an educational and talent ecosystem where people can learn, grow and discover opportunities while companies can connect with emerging talent. Our goal is to bring learning and opportunity closer together in one intelligent experience.",
    features: [
      "Learning & education ecosystem",
      "Talent discovery",
      "Company connections",
      "Opportunity-focused experience",
    ],
  },
  {
    id: "wishes",
    name: "WISHES",
    category: "Social · Connection",
    status: "Launching Soon",
    launch: "August / September 2026",
    image: wishes,
    accent: "violet",
    short:
      "A global platform created around meetings, moments and meaningful wishes.",
    description:
      "WISHES is being built around a simple human idea: making moments of connection more meaningful. The platform aims to create a global environment where people can meet, connect and share wishes across distances.",
    features: [
      "Global connections",
      "Meaningful meetings",
      "Wishing experience",
      "Human-centered interaction",
    ],
  },
  {
    id: "nivora",
    name: "NIVORA",
    category: "Psychology · Human Insight",
    status: "In Development",
    launch: "Currently in development",
    image: nivora,
    accent: "rose",
    short:
      "Exploring psychology, behavior and the differences that shape human interaction.",
    description:
      "NIVORA explores the psychology of men and women through a modern digital experience. The product is being developed around curiosity, understanding and deeper perspectives on human behavior and interaction.",
    features: [
      "Psychology-focused experience",
      "Human behavior",
      "Personal insight",
      "Modern educational content",
    ],
  },
  {
    id: "omnigram",
    name: "OMNIGRAM",
    category: "Creators · Builders",
    status: "In Development",
    launch: "Currently in development",
    image: omnigram,
    accent: "orange",
    short:
      "A global connection space for creators and people building something meaningful.",
    description:
      "OMNIGRAM is envisioned as a global network for creators, founders, makers and people building something of their own. It is about discovering people, ideas and projects that deserve to be connected.",
    features: [
      "Creator connections",
      "Builder community",
      "Project discovery",
      "Global networking",
    ],
  },
  {
    id: "aura-ai",
    name: "AURA AI",
    category: "AI · Fashion",
    status: "In Development",
    launch: "Currently in development",
    image: auraAI,
    accent: "gold",
    short:
      "An AI-powered fashion experience designed for both men and women.",
    description:
      "AURA AI combines fashion and artificial intelligence to create a more personalized experience for discovering and understanding style. The product is being designed for both men and women.",
    features: [
      "AI-powered fashion",
      "Personalized style",
      "Men & women",
      "Intelligent recommendations",
    ],
  },
  {
    id: "caleroix",
    name: "CALEROIX",
    category: "Health · Nutrition",
    status: "In Development",
    launch: "Currently in development",
    image: caleroix,
    accent: "green",
    short:
      "A nutrition companion for understanding calories, food and nutrients.",
    description:
      "CALEROIX is being developed to make nutrition tracking simpler and more understandable. The platform focuses on food calories and nutritional information while creating an approachable everyday experience.",
    features: [
      "Calorie tracking",
      "Nutrition information",
      "Food awareness",
      "Everyday tracking",
    ],
  },
  {
    id: "glow-ai",
    name: "GLOW AI",
    category: "AI · Beauty",
    status: "In Development",
    launch: "Currently in development",
    image: glowAI,
    accent: "pink",
    short:
      "An AI-powered face scanning experience exploring a smarter approach to visual insight.",
    description:
      "GLOW AI is an experimental AI product focused on face scanning and visual analysis. The experience is being developed with the goal of turning complex technology into something simple and approachable.",
    features: [
      "AI face scanning",
      "Visual analysis",
      "Intelligent experience",
      "Technology made approachable",
    ],
  },
];

const orbitPositions = [
  "orbit-top",
  "orbit-upper-right",
  "orbit-lower-right",
  "orbit-bottom",
  "orbit-lower-left",
  "orbit-upper-left",
];

function InnovativeSolutions() {
  const [selectedId, setSelectedId] = useState("universe");

  const selectedProduct = useMemo(
    () =>
      products.find((product) => product.id === selectedId) ||
      products[0],
    [selectedId]
  );

  const selectedIndex = products.findIndex(
    (product) => product.id === selectedProduct.id
  );

  const surroundingProducts = products.filter(
    (product) => product.id !== selectedProduct.id
  );

  const handleProductSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <main className="solutions-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="solutions-hero">
        <div className="solutions-hero-grid" />

        <div className="solutions-hero-orb solutions-orb-one" />
        <div className="solutions-hero-orb solutions-orb-two" />

        <div className="solutions-hero-content">
          <div className="solutions-eyebrow">
            <span className="eyebrow-dot" />
            INNCA / INNOVATIVE SOLUTIONS
          </div>

          <h1>
            Ideas becoming
            <span> products.</span>
            <br />
            Products shaping
            <span> what&apos;s next.</span>
          </h1>

          <p>
            We are building a growing ecosystem of intelligent products across
            education, connection, artificial intelligence, lifestyle,
            nutrition and the creator economy.
          </p>

          <a href="#products" className="solutions-hero-button">
            Explore our products
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="solutions-hero-bottom">
          <span>07 PRODUCTS</span>
          <span>ONE DIRECTION</span>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="solutions-intro">
        <div className="solutions-section-label">
          <span>01</span>
          WHAT WE ARE BUILDING
        </div>

        <div className="solutions-intro-content">
          <h2>
            Technology should feel
            <em> human.</em>
          </h2>

          <p>
            At INNCA Technologies, we do not build products simply because
            technology makes them possible. We build them because people need
            them, enjoy them and can find something meaningful inside them.
          </p>

          <p>
            Every product has its own purpose, but all seven are connected by
            one philosophy: intelligent technology, thoughtful design and
            experiences built around people.
          </p>
        </div>
      </section>

      {/* =====================================================
          PRODUCT CONSTELLATION
      ===================================================== */}

      <section className="products-section" id="products">

        <div className="products-heading">
          <div>
            <div className="solutions-section-label">
              <span>02</span>
              THE INNCA CONSTELLATION
            </div>

            <h2>
              Seven ideas.
              <br />
              <span>One growing world.</span>
            </h2>
          </div>

          <p>
            Every product is a different point in our universe of ideas.
            Select one and watch it move into focus.
          </p>
        </div>

        <div className="constellation-stage">

          {/* Background atmosphere */}
          <div className="constellation-glow constellation-glow-one" />
          <div className="constellation-glow constellation-glow-two" />

          <div className="constellation-stars">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>

          {/* Orbit rings */}
          <div className="constellation-orbit constellation-orbit-one" />
          <div className="constellation-orbit constellation-orbit-two" />
          <div className="constellation-orbit constellation-orbit-three" />

          {/* Moving light */}
          <div className="orbit-light orbit-light-one" />
          <div className="orbit-light orbit-light-two" />
          <div className="orbit-light orbit-light-three" />

          {/* Central active product */}
          <div className={`constellation-center accent-${selectedProduct.accent}`}>

            <div className="center-energy" />

            <div className="center-card">

              <div className="center-card-top">
                <span>
                  {String(selectedIndex + 1).padStart(2, "0")} / 07
                </span>

                <span className="center-status">
                  <i />
                  {selectedProduct.status}
                </span>
              </div>

              <div className="center-logo-shell">
                <div className="center-logo-glow" />

                <img
                  key={selectedProduct.id}
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />
              </div>

              <div className="center-information">
                <span>{selectedProduct.category}</span>

                <h3 key={`center-title-${selectedProduct.id}`}>
                  {selectedProduct.name}
                </h3>

                <p key={`center-description-${selectedProduct.id}`}>
                  {selectedProduct.short}
                </p>

                <div className="center-launch">
                  <span>PROJECT STATUS</span>
                  <strong>{selectedProduct.launch}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Six equal orbit cards */}
          <div className="orbiting-products">
            {surroundingProducts.map((product, index) => (
              <button
                key={product.id}
                className={`orbit-product-card ${orbitPositions[index]} accent-${product.accent}`}
                onClick={() => handleProductSelect(product.id)}
                aria-label={`Explore ${product.name}`}
              >
                <span className="orbit-card-line" />

                <div className="orbit-card-logo">
                  <img src={product.image} alt="" />
                </div>

                <div className="orbit-card-content">
                  <span>{product.category}</span>
                  <strong>{product.name}</strong>
                </div>

                <ChevronRight className="orbit-card-arrow" size={16} />
              </button>
            ))}
          </div>

          {/* Product selector */}
          <div className="product-selector">
            {products.map((product, index) => (
              <button
                key={product.id}
                className={
                  selectedProduct.id === product.id ? "selected" : ""
                }
                onClick={() => handleProductSelect(product.id)}
                aria-label={`View ${product.name}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>

          <div className="constellation-caption">
            <Orbit size={14} />
            <span>SELECT A PRODUCT TO CHANGE THE ORBIT</span>
          </div>
        </div>

        {/* =================================================
            ACTIVE PRODUCT DESCRIPTION
        ================================================= */}

        <div className="selected-product-description">

          <div className="description-label">
            <Sparkles size={16} />
            CURRENTLY EXPLORING
          </div>

          <div className="description-grid">

            <div className="description-title">
              <span>PRODUCT {String(selectedIndex + 1).padStart(2, "0")}</span>

              <h3>
                Building
                <br />
                <strong>{selectedProduct.name}</strong>
              </h3>
            </div>

            <div className="description-copy">
              <p key={`long-${selectedProduct.id}`}>
                {selectedProduct.description}
              </p>

              <div className="feature-list">
                {selectedProduct.features.map((feature) => (
                  <div key={feature}>
                    <span />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT DOMAINS
      ===================================================== */}

      <section className="category-section">

        <div className="solutions-section-label">
          <span>03</span>
          WHERE WE BUILD
        </div>

        <div className="category-heading">
          <h2>
            Different problems.
            <br />
            <span>Different possibilities.</span>
          </h2>

          <p>
            The future will not exist inside one category. Our products move
            across different parts of everyday life while remaining connected
            through technology and human-centered thinking.
          </p>
        </div>

        <div className="category-grid">

          <article>
            <span>01</span>
            <h3>Artificial Intelligence</h3>
            <p>
              Turning complex intelligence into experiences people can
              actually understand and use.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Human Connection</h3>
            <p>
              Creating digital spaces that help people discover, meet,
              communicate and build relationships.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Education & Talent</h3>
            <p>
              Connecting knowledge, growth and opportunity with people and
              organizations.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Lifestyle & Wellness</h3>
            <p>
              Building intelligent everyday experiences around fashion,
              nutrition, beauty and personal discovery.
            </p>
          </article>

        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="philosophy-section">

        <div className="philosophy-background-text">
          BUILD
        </div>

        <div className="solutions-section-label">
          <span>04</span>
          OUR APPROACH
        </div>

        <div className="philosophy-content">
          <div>
            <span className="philosophy-kicker">
              FROM POSSIBILITY TO PRODUCT
            </span>

            <h2>
              We don&apos;t build apps
              <br />
              to fill a <em>screen.</em>
            </h2>
          </div>

          <p>
            We build experiences people return to. Every product begins with
            curiosity, becomes an idea, and then goes through design,
            engineering, experimentation and constant evolution.
          </p>
        </div>

        <div className="approach-grid">

          <article>
            <span>01</span>
            <Zap size={18} />
            <h3>Understand</h3>
            <p>
              Find the real problem before trying to build the solution.
            </p>
          </article>

          <article>
            <span>02</span>
            <Sparkles size={18} />
            <h3>Imagine</h3>
            <p>
              Explore possibilities beyond what already exists.
            </p>
          </article>

          <article>
            <span>03</span>
            <Orbit size={18} />
            <h3>Build</h3>
            <p>
              Turn ideas into real products through design and engineering.
            </p>
          </article>

          <article>
            <span>04</span>
            <ArrowUpRight size={18} />
            <h3>Evolve</h3>
            <p>
              Learn from reality and keep making the experience better.
            </p>
          </article>

        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT
      ===================================================== */}

      <section className="development-section">

        <div className="solutions-section-label">
          <span>05</span>
          THE ROAD AHEAD
        </div>

        <div className="development-heading">
          <h2>
            Not everything is
            <br />
            <span>ready yet.</span>
          </h2>

          <p>
            Some of our products are approaching their first public chapter.
            Others are still being researched, designed and engineered behind
            the scenes.
          </p>
        </div>

        <div className="development-track">

          <div className="development-line" />

          <div className="development-item">
            <span>01</span>
            <div>
              <small>LAUNCHING SOON</small>
              <h3>UNIVERSE</h3>
              <p>Education, talent and opportunity.</p>
            </div>
          </div>

          <div className="development-item">
            <span>02</span>
            <div>
              <small>LAUNCHING SOON</small>
              <h3>WISHES</h3>
              <p>Global meetings and meaningful wishes.</p>
            </div>
          </div>

          <div className="development-item">
            <span>03</span>
            <div>
              <small>IN DEVELOPMENT</small>
              <h3>NIVORA · OMNIGRAM</h3>
              <p>Human understanding and creator connections.</p>
            </div>
          </div>

          <div className="development-item">
            <span>04</span>
            <div>
              <small>IN DEVELOPMENT</small>
              <h3>AURA AI · CALEROIX · GLOW AI</h3>
              <p>Intelligence across lifestyle, nutrition and visual insight.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          VISION
      ===================================================== */}

      <section className="solutions-vision">

        <div className="vision-grid" />

        <div className="vision-content">

          <div className="solutions-section-label">
            <span>06</span>
            THE BIGGER PICTURE
          </div>

          <h2>
            Seven products.
            <br />
            <span>One much bigger future.</span>
          </h2>

          <p>
            UNIVERSE. WISHES. NIVORA. OMNIGRAM. AURA AI. CALEROIX. GLOW AI.
          </p>

          <div className="vision-quote">
            <span>&ldquo;</span>

            <blockquote>
              The future is not something we wait for.
              <br />
              It is something we build.
            </blockquote>
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="solutions-final-cta">

        <div className="cta-glow" />

        <div className="solutions-section-label">
          <span>07</span>
          WHAT&apos;S NEXT
        </div>

        <h2>
          Have an idea
          <br />
          worth <span>building?</span>
        </h2>

        <p>
          We are always exploring the next meaningful possibility. If you
          want to build something ambitious, let&apos;s start a conversation.
        </p>

        <div className="final-cta-buttons">

          <a href="/contact">
            Talk to INNCA
            <ArrowUpRight size={18} />
          </a>

          <a href="/future" className="secondary">
            Meet the Future
            <ArrowUpRight size={18} />
          </a>

        </div>
      </section>

      <Footer />
    </main>
  );
}

export default InnovativeSolutions;