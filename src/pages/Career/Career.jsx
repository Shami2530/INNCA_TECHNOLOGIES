import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, ChevronRight } from "lucide-react";

import Footer from "../../components/Footer";
import "./Career.css";

const principles = [
  {
    number: "01",
    title: "THINK DEEPLY",
    description:
      "We don't rush toward the first solution. We ask better questions, challenge assumptions and understand the problem before we start building.",
  },
  {
    number: "02",
    title: "BUILD BOLDLY",
    description:
      "Ideas become meaningful when they are tested. We believe in experimentation, iteration and having the courage to try something different.",
  },
  {
    number: "03",
    title: "STAY CURIOUS",
    description:
      "Technology never stands still. Neither should we. We learn constantly, explore new possibilities and remain open to being surprised.",
  },
  {
    number: "04",
    title: "KEEP IT HUMAN",
    description:
      "Behind every product is a person. We care about experiences that are useful, thoughtful and genuinely make someone's life better.",
  },
  {
    number: "05",
    title: "OWN THE OUTCOME",
    description:
      "We don't just complete tasks. We take responsibility for what we build, how it performs and the value it creates.",
  },
];

const opportunities = [
  {
    category: "ENGINEERING",
    title: "Flutter Developer",
    description:
      "Build polished, scalable mobile experiences that bring our products to life across platforms.",
    type: "Potential Opportunity",
  },
  {
    category: "ENGINEERING",
    title: "Backend Developer",
    description:
      "Design reliable systems, APIs and infrastructure that power the products behind the interface.",
    type: "Potential Opportunity",
  },
  {
    category: "PRODUCT",
    title: "Product & Strategy",
    description:
      "Help transform ambiguous ideas into products, strategies and experiences people actually want to use.",
    type: "Potential Opportunity",
  },
  {
    category: "CREATIVE",
    title: "Design & Experience",
    description:
      "Shape the visual language, interaction and experience of products being built for the next generation.",
    type: "Potential Opportunity",
  },
];

const values = [
  {
    title: "CURIOSITY",
    text: "We ask why before we decide how.",
  },
  {
    title: "OWNERSHIP",
    text: "We take responsibility for what we put into the world.",
  },
  {
    title: "CRAFT",
    text: "Small details can change the entire experience.",
  },
  {
    title: "COURAGE",
    text: "The best ideas are sometimes the ones that haven't been tried.",
  },
  {
    title: "EMPATHY",
    text: "Technology matters most when it matters to people.",
  },
  {
    title: "GROWTH",
    text: "Every project should leave us knowing something we didn't know before.",
  },
];

const timeline = [
  {
    time: "01",
    title: "IDEAS",
    text: "Start with a question worth exploring.",
  },
  {
    time: "02",
    title: "BUILD",
    text: "Turn the idea into something people can experience.",
  },
  {
    time: "03",
    title: "QUESTION",
    text: "Challenge what we've built and look for a better way.",
  },
  {
    time: "04",
    title: "SHIP",
    text: "Put the work into the world and learn from reality.",
  },
  {
    time: "05",
    title: "TOMORROW",
    text: "Take what we learned and build what's next.",
  },
];

function Career() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((section) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((previous) => ({
              ...previous,
              [entry.target.dataset.section]: true,
            }));
          }
        },
        {
          threshold: 0.12,
        }
      );

      observer.observe(section);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const registerSection = (element) => {
    if (!element || sectionRefs.current.includes(element)) return;

    sectionRefs.current.push(element);
  };

  const scrollToOpportunities = () => {
    document
      .getElementById("career-opportunities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="career-page">
      {/* Ambient background */}
      <div className="career-background" aria-hidden="true">
        <div className="career-orb career-orb-one" />
        <div className="career-orb career-orb-two" />
        <div className="career-grid" />
        <div className="career-noise" />
      </div>

      {/* HERO */}
      <section className="career-hero">
        <div className="career-hero-inner">
          <div className="career-eyebrow">
            <span className="career-eyebrow-line" />
            CAREERS AT INNCA
          </div>

          <div className="career-hero-title-wrap">
            <h1 className="career-hero-title">
              BUILD
              <span>WHAT COMES</span>
              <em>NEXT.</em>
            </h1>

            <div className="career-hero-side">
              <div className="career-side-line" />
              <p>
                We're looking for curious minds, ambitious builders and people
                who want to turn ideas into products that matter.
              </p>
            </div>
          </div>

          <div className="career-hero-bottom">
            <div className="career-meta">
              <div>
                <span>01</span>
                REMOTE FRIENDLY
              </div>

              <div>
                <span>02</span>
                PAKISTAN → GLOBAL
              </div>

              <div>
                <span>03</span>
                AI × PRODUCTS
              </div>
            </div>

            <button
              className="career-scroll-cta"
              onClick={scrollToOpportunities}
            >
              <span>EXPLORE OPPORTUNITIES</span>
              <ArrowDown size={17} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="career-hero-index">01 / 08</div>
      </section>

      {/* WHY INNCA */}
      <section
        className={`career-section career-why ${
          visibleSections.why ? "is-visible" : ""
        }`}
        data-section="why"
        ref={registerSection}
      >
        <div className="career-section-heading">
          <div className="career-section-number">01</div>

          <div>
            <span className="career-label">WHY INNCA?</span>

            <h2>
              Come for the challenge.
              <br />
              <span>Stay for the journey.</span>
            </h2>
          </div>
        </div>

        <div className="career-feature-grid">
          <article className="career-feature-card career-feature-large">
            <div className="career-card-number">01</div>

            <div className="career-feature-content">
              <span>01 — BUILD</span>
              <h3>Build from the ground up.</h3>
              <p>
                You're not joining something where every decision has already
                been made. You'll have the opportunity to influence products,
                systems and culture as we grow.
              </p>
            </div>

            <div className="career-card-glow" />
          </article>

          <article className="career-feature-card">
            <div className="career-card-number">02</div>

            <div className="career-feature-content">
              <span>02 — TECHNOLOGY</span>
              <h3>Work on meaningful technology.</h3>
              <p>
                AI isn't simply a buzzword here. We want to use technology to
                solve real problems and create genuinely useful products.
              </p>
            </div>

            <div className="career-card-glow" />
          </article>

          <article className="career-feature-card">
            <div className="career-card-number">03</div>

            <div className="career-feature-content">
              <span>03 — OWNERSHIP</span>
              <h3>Own your work.</h3>
              <p>
                Small teams create meaningful responsibility. Your ideas can
                move from conversation to implementation quickly.
              </p>
            </div>

            <div className="career-card-glow" />
          </article>

          <article className="career-feature-card career-feature-wide">
            <div className="career-card-number">04</div>

            <div className="career-feature-content">
              <span>04 — GROWTH</span>
              <h3>Keep evolving.</h3>
              <p>
                Technology changes constantly. So should we. Learning,
                experimentation and iteration are part of the culture.
              </p>
            </div>

            <div className="career-feature-arrow">
              <ArrowUpRight size={24} />
            </div>

            <div className="career-card-glow" />
          </article>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section
        className={`career-section career-principles ${
          visibleSections.principles ? "is-visible" : ""
        }`}
        data-section="principles"
        ref={registerSection}
      >
        <div className="career-section-heading">
          <div className="career-section-number">02</div>

          <div>
            <span className="career-label">HOW WE WORK</span>

            <h2>
              Different minds.
              <br />
              <span>One direction.</span>
            </h2>
          </div>
        </div>

        <div className="career-principles-layout">
          <div className="career-principle-list">
            {principles.map((principle, index) => (
              <button
                key={principle.number}
                className={`career-principle ${
                  activePrinciple === index ? "active" : ""
                }`}
                onMouseEnter={() => setActivePrinciple(index)}
                onFocus={() => setActivePrinciple(index)}
                onClick={() => setActivePrinciple(index)}
              >
                <span>{principle.number}</span>

                <strong>{principle.title}</strong>

                <ChevronRight size={18} />
              </button>
            ))}
          </div>

          <div className="career-principle-display">
            <div className="career-display-number">
              {principles[activePrinciple].number}
            </div>

            <div className="career-display-line" />

            <h3>{principles[activePrinciple].title}</h3>

            <p>{principles[activePrinciple].description}</p>

            <div className="career-display-orbit orbit-one" />
            <div className="career-display-orbit orbit-two" />
            <div className="career-display-core" />
          </div>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR */}
      <section
        className={`career-section career-people ${
          visibleSections.people ? "is-visible" : ""
        }`}
        data-section="people"
        ref={registerSection}
      >
        <div className="career-section-heading">
          <div className="career-section-number">03</div>

          <div>
            <span className="career-label">THE PEOPLE</span>

            <h2>
              Maybe you're
              <br />
              <span>one of us.</span>
            </h2>
          </div>
        </div>

        <div className="career-people-intro">
          <p>
            We don't believe great teams are built from identical people. They
            are built from different perspectives, different strengths and a
            shared desire to make something better.
          </p>
        </div>

        <div className="career-role-grid">
          <article className="career-role-card">
            <span>01</span>
            <h3>ENGINEERS</h3>
            <p>
              Flutter, frontend, backend, AI/ML, systems and infrastructure.
            </p>
            <ArrowUpRight size={20} />
          </article>

          <article className="career-role-card">
            <span>02</span>
            <h3>PRODUCT THINKERS</h3>
            <p>
              People who can turn ambiguous problems into clear product
              experiences.
            </p>
            <ArrowUpRight size={20} />
          </article>

          <article className="career-role-card">
            <span>03</span>
            <h3>DESIGNERS</h3>
            <p>
              People who care about interfaces, interaction, systems and
              details.
            </p>
            <ArrowUpRight size={20} />
          </article>

          <article className="career-role-card">
            <span>04</span>
            <h3>GROWTH & STRATEGY</h3>
            <p>
              People who understand markets, users, positioning and business.
            </p>
            <ArrowUpRight size={20} />
          </article>

          <article className="career-role-card">
            <span>05</span>
            <h3>CONTENT</h3>
            <p>
              Writers and communicators who make complex ideas easy to
              understand.
            </p>
            <ArrowUpRight size={20} />
          </article>

          <article className="career-role-card career-role-future">
            <span>06</span>
            <h3>FUTURE ROLES</h3>
            <p>
              Don't see yourself here? We may still want to hear what you want
              to build.
            </p>
            <ArrowUpRight size={20} />
          </article>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section
        id="career-opportunities"
        className={`career-section career-opportunities ${
          visibleSections.opportunities ? "is-visible" : ""
        }`}
        data-section="opportunities"
        ref={registerSection}
      >
        <div className="career-section-heading">
          <div className="career-section-number">04</div>

          <div>
            <span className="career-label">OPPORTUNITIES</span>

            <h2>
              We're building
              <br />
              <span>the team.</span>
            </h2>
          </div>
        </div>

        <div className="career-opportunity-intro">
          <p>
            These are the kinds of roles we're interested in building as INNCA
            grows. Specific openings will evolve with the company.
          </p>

          <span>ROLES WE'RE INTERESTED IN</span>
        </div>

        <div className="career-opportunity-list">
          {opportunities.map((role, index) => (
            <article className="career-opportunity" key={role.title}>
              <div className="career-opportunity-index">
                0{index + 1}
              </div>

              <div className="career-opportunity-main">
                <span>{role.category}</span>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>

              <div className="career-opportunity-type">
                {role.type}
              </div>

              <ArrowUpRight
                className="career-opportunity-arrow"
                size={23}
              />
            </article>
          ))}
        </div>
      </section>

      {/* WHAT YOU'LL BUILD */}
      <section
        className={`career-section career-build-more ${
          visibleSections.build ? "is-visible" : ""
        }`}
        data-section="build"
        ref={registerSection}
      >
        <div className="career-section-heading">
          <div className="career-section-number">07</div>

          <div>
            <span className="career-label">WHAT YOU'LL BUILD</span>

            <h2>
              Ideas with
              <br />
              <span>somewhere to go.</span>
            </h2>
          </div>
        </div>

        <div className="career-build-grid">
          <article className="career-build-card">
            <span>01</span>
            <h3>REAL PRODUCTS</h3>
            <p>
              Work on products that move beyond concepts and become part of
              people's everyday lives.
            </p>
          </article>

          <article className="career-build-card">
            <span>02</span>
            <h3>INTELLIGENT SYSTEMS</h3>
            <p>
              Explore AI, software and connected systems designed to make
              technology more useful and more human.
            </p>
          </article>

          <article className="career-build-card">
            <span>03</span>
            <h3>GLOBAL EXPERIENCES</h3>
            <p>
              Help shape products intended for people, creators and builders
              beyond a single market.
            </p>
          </article>

          <article className="career-build-card">
            <span>04</span>
            <h3>THE NEXT ITERATION</h3>
            <p>
              Test ideas, learn from reality and keep improving what comes
              next.
            </p>
          </article>
        </div>
      </section>

      {/* JOINING THE JOURNEY */}
      <section
        className={`career-section career-journey ${
          visibleSections.journey ? "is-visible" : ""
        }`}
        data-section="journey"
        ref={registerSection}
      >
        <div className="career-journey-panel">
          <div className="career-journey-copy">
            <span className="career-label">JOINING THE JOURNEY</span>

            <h2>
              Bring your
              <br />
              <span>way of thinking.</span>
            </h2>

            <p>
              You don't have to arrive with every answer. Bring curiosity,
              ownership and the willingness to learn. The rest can be built
              together.
            </p>
          </div>

          <div className="career-journey-orbit">
            <div className="career-journey-ring career-journey-ring-one" />
            <div className="career-journey-ring career-journey-ring-two" />
            <div className="career-journey-core" />
          </div>
        </div>
      </section>

      {/* HUMAN SECTION */}
      <section
        className={`career-section career-human ${
          visibleSections.human ? "is-visible" : ""
        }`}
        data-section="human"
        ref={registerSection}
      >
        <div className="career-human-mark">INNCA / PEOPLE</div>

        <div className="career-human-content">
          <span className="career-label">A DIFFERENT APPROACH</span>

          <h2>
            We don't hire
            <br />
            <em>resumes.</em>
            <br />
            We meet people.
          </h2>

          <p>
            Maybe you're early in your career. Maybe you've already built
            products, companies or things nobody asked you to build. Maybe you
            learned everything you know outside a classroom.
          </p>

          <p>
            What matters to us is what you can bring, what you want to learn
            and what you're willing to build.
          </p>
        </div>

        <div className="career-human-line" />
      </section>

      {/* VALUES */}
      <section
        className={`career-section career-values ${
          visibleSections.values ? "is-visible" : ""
        }`}
        data-section="values"
        ref={registerSection}
      >
        <div className="career-section-heading">
          <div className="career-section-number">05</div>

          <div>
            <span className="career-label">WHAT WE VALUE</span>

            <h2>
              The principles
              <br />
              <span>behind the work.</span>
            </h2>
          </div>
        </div>

        <div className="career-values-grid">
          {values.map((value, index) => (
            <article className="career-value" key={value.title}>
              <span>0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DAY AT INNCA */}
      <section
        className={`career-section career-day ${
          visibleSections.day ? "is-visible" : ""
        }`}
        data-section="day"
        ref={registerSection}
      >
        <div className="career-section-heading">
          <div className="career-section-number">06</div>

          <div>
            <span className="career-label">THE INNCA MINDSET</span>

            <h2>
              A day at
              <br />
              <span>INNCA.</span>
            </h2>
          </div>
        </div>

        <div className="career-day-track">
          <div className="career-day-line" />

          {timeline.map((item) => (
            <article className="career-day-item" key={item.time}>
              <div className="career-day-dot" />

              <span>{item.time}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className={`career-final ${
          visibleSections.final ? "is-visible" : ""
        }`}
        data-section="final"
        ref={registerSection}
      >
        <div className="career-final-glow" />

        <span className="career-label">YOUR NEXT CHAPTER</span>

        <h2>
          Ready to build
          <br />
          <span>something different?</span>
        </h2>

        <p>
          Don't see a role that fits? Tell us what you want to build. The
          conversation can start before the job title exists.
        </p>

        <a className="career-final-button" href="/contact">
          <span>START A CONVERSATION</span>
          <ArrowUpRight size={19} />
        </a>

        <div className="career-final-footer-line">
          <span>INNCA TECHNOLOGIES</span>
          <span>AI POWERED. HUMAN CENTRED.</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Career;