import {
  ArrowDownRight,
  ArrowRight,
  Brain,
  Globe2,
  Layers3,
  Network,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import "./Future.css";

const directions = [
  {
    number: "01",
    icon: Brain,
    title: "Intelligent Products",
    text:
      "We imagine products that do more than respond. They understand context, learn from interaction, and become more useful as people use them.",
    accent: "cyan",
  },
  {
    number: "02",
    icon: Users,
    title: "Human-Centred AI",
    text:
      "Technology should amplify human ability, not replace human purpose. We want intelligence to feel natural, accessible and genuinely useful.",
    accent: "blue",
  },
  {
    number: "03",
    icon: Network,
    title: "A Stronger Team",
    text:
      "Great products are built by people who think differently, challenge assumptions and care deeply about the details.",
    accent: "silver",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Global Expansion",
    text:
      "INNCA begins with a vision rooted in Pakistan and aims toward a world where our products can serve people everywhere.",
    accent: "cyan",
  },
];

const principles = [
  {
    number: "01",
    title: "Curiosity",
    text:
      "We question what exists and remain interested in what could exist.",
  },
  {
    number: "02",
    title: "Useful Intelligence",
    text:
      "We believe intelligence matters most when it solves something real.",
  },
  {
    number: "03",
    title: "Human Connection",
    text:
      "Technology becomes meaningful when people can understand and trust it.",
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    text:
      "We are building for years ahead, not merely for the next release.",
  },
];

const Future = () => {
  return (
    <main className="future-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="future-hero">

        <div className="future-hero-grid" />

        <div className="future-noise" />

        <div className="future-glow future-glow-one" />
        <div className="future-glow future-glow-two" />

        <div className="future-hero-inner">

          <div className="future-hero-label">
            <span className="future-status-dot" />
            LOOKING AHEAD
          </div>

          <h1>
            The future
            <br />
            <span>is something</span>
            <br />
            <em>we build.</em>
          </h1>

          <p className="future-hero-description">
            We don't see the future as a distant destination.
            We see it as a collection of decisions, ideas and
            products being created today.
          </p>

          <div className="future-hero-bottom">

            <span>
              INNCA TECHNOLOGIES
            </span>

            <div className="future-scroll-indicator">
              <ArrowDownRight size={16} />
              <span>EXPLORE OUR VISION</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MANIFESTO
      ===================================================== */}

      <section className="future-manifesto">

        <div className="future-container">

          <div className="future-manifesto-grid">

            <div className="future-section-index">
              01 / 06
            </div>

            <div className="future-manifesto-content">

              <div className="future-eyebrow">
                OUR WAY OF THINKING
              </div>

              <h2>
                We are not trying to
                <span> predict tomorrow.</span>
              </h2>

              <p className="future-large-copy">
                We are trying to create the tools that help
                people shape it.
              </p>

              <p className="future-body-copy">
                The world is moving through a period of enormous
                technological change. Artificial intelligence,
                software and connected experiences are redefining
                how people work, communicate, create and solve
                problems.
              </p>

              <p className="future-body-copy">
                At INNCA, we want to participate in that change
                with intention. Our goal is not to add technology
                simply because technology exists. We want to build
                products that have a reason to exist.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FUTURE DIRECTIONS
      ===================================================== */}

      <section className="future-directions">

        <div className="future-container">

          <div className="future-heading-row">

            <div>

              <div className="future-eyebrow">
                WHERE WE ARE GOING
              </div>

              <h2>
                Four directions.
                <br />
                <span>One vision.</span>
              </h2>

            </div>

            <p>
              The future of INNCA is not one product or one
              technology. It is an ecosystem of ideas that
              continuously evolves.
            </p>

          </div>


          <div className="future-direction-grid">

            {directions.map((item) => {

              const Icon = item.icon;

              return (
                <article
                  className={`future-direction-card ${item.accent}`}
                  key={item.number}
                >

                  <div className="future-card-top">

                    <span>{item.number}</span>

                    <div className="future-card-icon">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                  </div>

                  <div className="future-card-line" />

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <div className="future-card-arrow">
                    <ArrowRight size={17} />
                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section className="future-quote">

        <div className="future-quote-orbit orbit-a" />
        <div className="future-quote-orbit orbit-b" />

        <div className="future-container">

          <div className="future-quote-inner">

            <Sparkles
              className="future-quote-icon"
              size={25}
              strokeWidth={1.2}
            />

            <blockquote>
              “The most meaningful technology
              <span> doesn't make us less human.</span>
              It gives us more room to be human.”
            </blockquote>

            <div className="future-quote-line">
              <span />
              INNCA PHILOSOPHY
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROADMAP
      ===================================================== */}

      <section className="future-roadmap">

        <div className="future-container">

          <div className="future-roadmap-heading">

            <div className="future-eyebrow">
              THE ROAD AHEAD
            </div>

            <h2>
              From an idea
              <br />
              <span>to an ecosystem.</span>
            </h2>

            <p>
              Every ambitious company begins with a small
              decision to start. What happens next is shaped
              by consistency.
            </p>

          </div>


          <div className="future-timeline">

            <div className="future-timeline-line" />

            <div className="future-timeline-item">

              <div className="future-timeline-marker">
                <span>01</span>
              </div>

              <div className="future-timeline-content">

                <span>THE BEGINNING</span>

                <h3>Build the Foundation</h3>

                <p>
                  Establish the technology, culture and product
                  thinking that will become the foundation of
                  everything that follows.
                </p>

              </div>

            </div>


            <div className="future-timeline-item">

              <div className="future-timeline-marker">
                <span>02</span>
              </div>

              <div className="future-timeline-content">

                <span>THE NEXT CHAPTER</span>

                <h3>Build Intelligent Products</h3>

                <p>
                  Turn ideas into useful experiences powered by
                  thoughtful engineering, artificial intelligence
                  and human-centred design.
                </p>

              </div>

            </div>


            <div className="future-timeline-item">

              <div className="future-timeline-marker">
                <span>03</span>
              </div>

              <div className="future-timeline-content">

                <span>THE EXPANSION</span>

                <h3>Build the Team</h3>

                <p>
                  Bring together builders, designers, thinkers,
                  engineers and creators who want to work on
                  meaningful problems.
                </p>

              </div>

            </div>


            <div className="future-timeline-item future-timeline-final">

              <div className="future-timeline-marker">
                <span>∞</span>
              </div>

              <div className="future-timeline-content">

                <span>BEYOND</span>

                <h3>Build Without Borders</h3>

                <p>
                  Take the products, ideas and culture of INNCA
                  beyond boundaries and into a truly global
                  ecosystem.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ECOSYSTEM
      ===================================================== */}

      <section className="future-ecosystem">

        <div className="future-container">

          <div className="future-ecosystem-layout">

            <div className="future-ecosystem-copy">

              <div className="future-eyebrow">
                BEYOND A SINGLE PRODUCT
              </div>

              <h2>
                An ecosystem
                <br />
                <span>of possibilities.</span>
              </h2>

              <p>
                We imagine INNCA growing into a collection of
                products and technologies that can work together,
                communicate with one another and create value
                beyond their individual boundaries.
              </p>

              <div className="future-ecosystem-points">

                <div>
                  <Zap size={17} />
                  <span>Intelligent experiences</span>
                </div>

                <div>
                  <Layers3 size={17} />
                  <span>Connected products</span>
                </div>

                <div>
                  <Network size={17} />
                  <span>Shared technology</span>
                </div>

                <div>
                  <Globe2 size={17} />
                  <span>Global reach</span>
                </div>

              </div>

            </div>


            <div className="future-ecosystem-visual">

              <div className="ecosystem-ring ring-one" />
              <div className="ecosystem-ring ring-two" />
              <div className="ecosystem-ring ring-three" />

              <div className="ecosystem-center">

                <Sparkles size={26} />

                <strong>
                  INNCA
                </strong>

                <span>
                  INTELLIGENCE
                </span>

              </div>

              <div className="ecosystem-node node-one">
                AI
              </div>

              <div className="ecosystem-node node-two">
                APP
              </div>

              <div className="ecosystem-node node-three">
                DATA
              </div>

              <div className="ecosystem-node node-four">
                PEOPLE
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="future-principles">

        <div className="future-container">

          <div className="future-heading-row">

            <div>

              <div className="future-eyebrow">
                WHAT WE WILL PROTECT
              </div>

              <h2>
                Growth without
                <br />
                <span>losing ourselves.</span>
              </h2>

            </div>

            <p>
              Progress means very little if we lose the
              principles that made the journey worth taking.
            </p>

          </div>


          <div className="future-principles-grid">

            {principles.map((item) => (

              <div
                className="future-principle"
                key={item.number}
              >

                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FUTURE STATEMENT
      ===================================================== */}

      <section className="future-statement">

        <div className="future-statement-glow" />

        <div className="future-container">

          <div className="future-statement-inner">

            <div className="future-eyebrow">
              THE NEXT CHAPTER
            </div>

            <h2>
              We have only
              <br />
              <span>just started.</span>
            </h2>

            <p>
              There is much more to imagine.
              Much more to build.
              And much more to learn.
            </p>

            <div className="future-statement-motto">
              BUILD · LEARN · EVOLVE · REPEAT
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="future-footer">

        <div className="future-container">

          <div className="future-footer-main">

            <div className="future-footer-brand">

              <span>
                INNCA TECHNOLOGIES
              </span>

              <h3>
                Building intelligent
                <br />
                <em>solutions</em> for a
                <br />
                better future.
              </h3>

              <p>
                AI Powered. Human Centred.
              </p>

            </div>


            <div className="future-footer-columns">

              <div>

                <span>EXPLORE</span>

                <a href="/">
                  Home
                </a>

                <a href="/career">
                  Career
                </a>

                <a href="/innovative-solutions">
                  Innovative Solutions
                </a>

                <a href="/future">
                  Future
                </a>

              </div>


              <div>

                <span>COMPANY</span>

                <a href="/founder">
                  Founder
                </a>

                <a href="/contact">
                  Contact
                </a>

                <a href="/future">
                  Our Vision
                </a>

              </div>


              <div>

                <span>CONNECT</span>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>

                <a href="mailto:support@inncatechnologies.com">
                  Email
                </a>

              </div>

            </div>

          </div>


          <div className="future-footer-bottom">

            <span>
              © {new Date().getFullYear()} INNCA Technologies.
              All rights reserved.
            </span>

            <span>
              MADE FOR WHAT COMES NEXT.
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
};

export default Future;