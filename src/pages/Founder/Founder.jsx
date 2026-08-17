import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Cpu,
  Lightbulb,
  PenLine,
  Target,
  Workflow,
  BrainCircuit,
  Rocket,
} from "lucide-react";

import founderImage from "../../assets/founder/me.png";

import "./Founder.css";

const skills = [
  {
    number: "01",
    title: "Flutter",
    description:
      "Building modern, responsive and meaningful cross-platform applications with a strong focus on experience and performance.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Designing the systems, APIs and foundations that allow products to remain reliable, scalable and ready for growth.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Business Strategy",
    description:
      "Connecting technology with opportunity by thinking about markets, users, positioning, execution and sustainable growth.",
    icon: Target,
  },
  {
    number: "04",
    title: "Product Thinking",
    description:
      "Turning ideas into products by understanding the problem, the people and the experience behind the technology.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Writing",
    description:
      "Exploring ideas through writing, communication and storytelling while keeping complex thoughts clear and human.",
    icon: PenLine,
  },
  {
    number: "06",
    title: "AI & Technology",
    description:
      "Exploring emerging technologies and discovering how intelligent systems can create useful experiences for people.",
    icon: BrainCircuit,
  },
];

const roles = [
  {
    year: "2024",
    title: "The Beginning",
    text:
      "The foundation of the journey — learning, experimenting and developing the ideas that would eventually become something larger.",
  },
  {
    year: "2025",
    title: "Building & Exploring",
    text:
      "Moving deeper into product development, technology, business strategy and the process of turning concepts into working experiences.",
  },
  {
    year: "Present",
    title: "Building INNCA",
    text:
      "Working toward a technology company focused on intelligent products, meaningful experiences and a future shaped by people and technology.",
  },
  {
    year: "Future",
    title: "Beyond What Exists",
    text:
      "Continuing to build, experiment and explore possibilities that may not yet have a name.",
  },
];

const principles = [
  {
    number: "01",
    title: "Curiosity",
    text: "Question what exists. Explore what could exist.",
  },
  {
    number: "02",
    title: "Creation",
    text: "Ideas become meaningful when they become real.",
  },
  {
    number: "03",
    title: "Persistence",
    text: "Complex problems deserve patience, iteration and another attempt.",
  },
  {
    number: "04",
    title: "Impact",
    text: "Technology should ultimately create something valuable for people.",
  },
];

function Founder() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const revealElements = page.querySelectorAll(".founder-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="founder-page" ref={pageRef}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="founder-hero">
        <div className="founder-hero-grid" />

        <div className="founder-orb founder-orb-one" />
        <div className="founder-orb founder-orb-two" />

        <div className="founder-hero-content">
          <div className="founder-photo-area founder-reveal">
            <div className="founder-photo-glow" />

            <div className="founder-photo-ring founder-photo-ring-one" />
            <div className="founder-photo-ring founder-photo-ring-two" />

            <div className="founder-photo-card">
              <img
                src={founderImage}
                alt="M Shehram Mehmood"
                className="founder-photo"
              />

              <div className="founder-photo-label">
                <span>FOUNDER</span>
                <span>INNCA TECHNOLOGIES</span>
              </div>
            </div>

            <span className="founder-node founder-node-one" />
            <span className="founder-node founder-node-two" />
            <span className="founder-node founder-node-three" />
          </div>

          <div className="founder-intro founder-reveal">
            <span className="section-eyebrow">
              Founder / Builder / Entrepreneur
            </span>

            <h1>
              M Shehram
              <br />
              <span>Mehmood.</span>
            </h1>

            <p className="founder-intro-lead">
              Building ideas into something real.
            </p>

            <div className="founder-intro-line" />

            <p className="founder-intro-text">
              I am M Shehram Mehmood, a young entrepreneur and technology
              builder from Pakistan, driven by curiosity, creativity and the
              desire to build products that can make a meaningful difference.
            </p>

            <p className="founder-intro-text">
              My journey revolves around technology, product development,
              business strategy and continuous learning. I enjoy taking an
              idea from its earliest form, understanding the problem behind
              it, and gradually transforming it into something people can
              actually experience and use.
            </p>

            <a href="#introduction" className="founder-scroll-link">
              <span>Discover the journey</span>
              <ArrowDown size={17} />
            </a>
          </div>
        </div>

        <div className="founder-hero-bottom">
          <span>Pakistan</span>
          <span>Technology</span>
          <span>Products</span>
          <span>Ideas</span>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="founder-section founder-introduction" id="introduction">
        <div className="founder-container">
          <div className="section-heading founder-reveal">
            <span className="section-eyebrow">01 / Introduction</span>

            <h2>
              Technology is only
              <br />
              <span>powerful with purpose.</span>
            </h2>
          </div>

          <div className="introduction-grid">
            <div className="introduction-label founder-reveal">
              <span>ABOUT THE FOUNDER</span>

              <div className="small-line" />
            </div>

            <div className="introduction-content founder-reveal">
              <p className="large-paragraph">
                I am a young entrepreneur from Pakistan with a deep interest
                in technology, digital products and the possibilities created
                when ambitious ideas meet thoughtful execution.
              </p>

              <p>
                My work spans Flutter development, backend engineering,
                business strategy, writing, product thinking and exploration
                of emerging technologies. I don't see these disciplines as
                separate worlds. For me, they are different parts of the same
                process — understanding an idea, finding the right problem,
                building a solution and continuously improving it.
              </p>

              <p>
                I believe that building a product is more than writing code.
                It requires understanding people, questioning assumptions,
                thinking about the business behind the idea and caring about
                every interaction a user has with the final experience.
              </p>

              <p>
                Through INNCA Technologies, I want to explore that intersection
                further — creating intelligent digital products that combine
                technology with human-centred thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section className="founder-section skills-section">
        <div className="founder-container">
          <div className="section-heading section-heading-split founder-reveal">
            <div>
              <span className="section-eyebrow">02 / Capabilities</span>

              <h2>
                Skills that turn
                <br />
                <span>ideas into reality.</span>
              </h2>
            </div>

            <p>
              A combination of technical, creative and strategic capabilities
              built through experimentation, learning and execution.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article
                  className="skill-card founder-reveal"
                  key={skill.number}
                >
                  <div className="skill-card-top">
                    <span>{skill.number}</span>

                    <div className="skill-icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="skill-card-content">
                    <h3>{skill.title}</h3>

                    <p>{skill.description}</p>
                  </div>

                  <div className="skill-card-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section className="founder-philosophy">
        <div className="philosophy-grid" />

        <div className="founder-container">
          <div className="philosophy-content founder-reveal">
            <span className="section-eyebrow">03 / Philosophy</span>

            <h2>
              Technology should
              <br />
              <span>serve people.</span>
            </h2>

            <p>
              The most interesting technology is not necessarily the most
              complicated technology. It is the technology that solves a real
              problem, creates a better experience or opens a door that was
              previously difficult to reach.
            </p>

            <p>
              That belief influences how I approach products, engineering and
              business. Build with intelligence, but never lose the human
              reason behind the product.
            </p>
          </div>

          <div className="philosophy-flow founder-reveal">
            <div>
              <span>01</span>
              <strong>Technology</strong>
            </div>

            <div className="flow-line" />

            <div>
              <span>02</span>
              <strong>Intelligence</strong>
            </div>

            <div className="flow-line" />

            <div>
              <span>03</span>
              <strong>People</strong>
            </div>

            <div className="flow-line" />

            <div>
              <span>04</span>
              <strong>Impact</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROLES
      ========================================================= */}

      <section className="founder-section roles-section">
        <div className="founder-container">
          <div className="section-heading founder-reveal">
            <span className="section-eyebrow">04 / Roles & Responsibilities</span>

            <h2>
              More than a title.
              <br />
              <span>A responsibility.</span>
            </h2>
          </div>

          <div className="roles-timeline">
            {roles.map((role, index) => (
              <article
                className="role-item founder-reveal"
                key={role.year}
              >
                <div className="role-year">{role.year}</div>

                <div className="role-marker">
                  <span />
                </div>

                <div className="role-content">
                  <span>0{index + 1}</span>

                  <h3>{role.title}</h3>

                  <p>{role.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BUILDING INNCA
      ========================================================= */}

      <section className="building-section">
        <div className="building-noise" />

        <div className="founder-container">
          <div className="building-content founder-reveal">
            <span className="section-eyebrow">05 / INNCA Technologies</span>

            <h2>
              Turning curiosity
              <br />
              <span>into creation.</span>
            </h2>

            <p>
              INNCA Technologies represents a direction — a place to explore
              ideas, build intelligent products and experiment with what the
              future of technology can become.
            </p>

            <p>
              The ambition is not to simply create another collection of
              applications. It is to develop products with character, purpose
              and a reason to exist.
            </p>

            <NavLink to="/innovative-solutions" className="founder-cta">
              <span>Explore INNCA</span>
              <ArrowUpRight size={18} />
            </NavLink>
          </div>

          <div className="building-visual founder-reveal">
            <div className="building-core">
              <Cpu size={42} strokeWidth={1} />
            </div>

            <div className="building-orbit building-orbit-one" />
            <div className="building-orbit building-orbit-two" />
            <div className="building-orbit building-orbit-three" />

            <span className="building-dot building-dot-one" />
            <span className="building-dot building-dot-two" />
            <span className="building-dot building-dot-three" />
          </div>
        </div>
      </section>

      {/* =========================================================
          BEYOND THE CODE
      ========================================================= */}

      <section className="founder-section beyond-section">
        <div className="founder-container">
          <div className="section-heading founder-reveal">
            <span className="section-eyebrow">06 / Beyond the Code</span>

            <h2>
              Building is not only
              <br />
              <span>about technology.</span>
            </h2>
          </div>

          <div className="beyond-grid">
            <article className="beyond-card founder-reveal">
              <span>01</span>
              <h3>Writing</h3>
              <p>
                Ideas become clearer when they are expressed. Writing is a way
                of thinking, communicating and exploring perspectives.
              </p>
            </article>

            <article className="beyond-card founder-reveal">
              <span>02</span>
              <h3>Business</h3>
              <p>
                Great products need more than technology. They need a reason,
                a market, a strategy and the ability to create sustainable
                value.
              </p>
            </article>

            <article className="beyond-card founder-reveal">
              <span>03</span>
              <h3>Learning</h3>
              <p>
                Technology changes constantly. Staying curious and continuing
                to learn is part of the process.
              </p>
            </article>

            <article className="beyond-card founder-reveal">
              <span>04</span>
              <h3>Experimentation</h3>
              <p>
                Not every experiment becomes a product. Some simply teach us
                what should be built next.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}

      <section className="founder-section principles-section">
        <div className="founder-container">
          <div className="section-heading founder-reveal">
            <span className="section-eyebrow">07 / Principles</span>

            <h2>
              Four things I try
              <br />
              <span>to build by.</span>
            </h2>
          </div>

          <div className="principles-list">
            {principles.map((principle) => (
              <article
                className="principle-row founder-reveal"
                key={principle.number}
              >
                <span className="principle-number">{principle.number}</span>

                <h3>{principle.title}</h3>

                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUOTE
      ========================================================= */}

      <section className="founder-quote-section">
        <div className="quote-glow" />

        <div className="founder-container">
          <div className="quote-content founder-reveal">
            <span className="section-eyebrow">08 / Final Thought</span>

            <blockquote>
              <span>“Not everything is possible,</span>
              <span>but nothing is impossible.”</span>
            </blockquote>

            <div className="quote-author">
              <div />
              <span>M Shehram Mehmood</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PAGE FOOTER
      ========================================================= */}

      <footer className="founder-page-footer">
        <div className="founder-container">
          <div className="founder-footer-main">
            <div className="founder-footer-brand">
              <span>INNCA TECHNOLOGIES</span>

              <h2>
                Building intelligent
                <br />
                <span>solutions for a better future.</span>
              </h2>
            </div>

            <div className="founder-footer-links">
              <div>
                <span>EXPLORE</span>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/innovative-solutions">
                  Innovative Solutions
                </NavLink>
                <NavLink to="/future">Future</NavLink>
                <NavLink to="/founder">Founder</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>

              <div>
                <span>COMPANY</span>

                <NavLink to="/innovative-solutions">Technology</NavLink>
                <NavLink to="/future">Our Vision</NavLink>
                <NavLink to="/contact">Let's Talk</NavLink>
              </div>

              <div>
                <span>CONNECT</span>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a href="mailto:hello@innca.tech">Email</a>
              </div>
            </div>
          </div>

          <div className="founder-footer-bottom">
            <span>
              © {new Date().getFullYear()} INNCA Technologies. All rights
              reserved.
            </span>

            <span>AI Powered. Human Centred.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Founder;