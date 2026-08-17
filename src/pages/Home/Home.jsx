import { useEffect, useRef, useState } from "react";

import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Lightbulb,
  Rocket,
  UserRound,
  Mail,
  Sparkles,
  Globe2,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import heroBackground from "../../assets/backgrounds/home-hero.png";
import storyImage from "../../assets/images/our-story.png";
import timelineImage from "../../assets/images/timeline.png";
import purposeImage from "../../assets/images/purpose.png";
import futureImage from "../../assets/images/future-vision.png";

import "./Home.css";

const quickLinks = [
  {
    title: "Home",
    description: "Welcome to INNCA",
    icon: <Globe2 />,
    path: "/",
  },
  {
    title: "Career",
    description: "Join Our Team",
    icon: <BriefcaseBusiness />,
    path: "/career",
  },
  {
    title: "Innovative Solutions",
    description: "What We Build",
    icon: <Lightbulb />,
    path: "/innovative-solutions",
  },
  {
    title: "Future",
    description: "Where We're Going",
    icon: <Rocket />,
    path: "/future",
  },
  {
    title: "Founder",
    description: "Our Leadership",
    icon: <UserRound />,
    path: "/founder",
  },
  {
    title: "Contact",
    description: "Get In Touch",
    icon: <Mail />,
    path: "/contact",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    text: "The first ideas behind INNCA began taking shape, driven by a belief that technology should feel more human.",
  },
  {
    year: "2025",
    title: "Building",
    text: "We began turning ideas into intelligent products, experimenting, learning and building with purpose.",
  },
  {
    year: "Present",
    title: "Creating",
    text: "Today, INNCA is focused on building AI and social products designed for real people and real problems.",
  },
  {
    year: "Future",
    title: "Beyond",
    text: "Our journey continues toward products that redefine how people interact with intelligent technology.",
  },
];

function useTypewriter(text) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 95);
    } else if (!isDeleting && displayText.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1900);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, 65);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text]);

  return displayText;
}

function Home() {
  const heroRef = useRef(null);
  const phrase = useTypewriter("A step towards the Change");

  const handleMouseMove = (event) => {
    if (!heroRef.current || window.innerWidth < 800) return;

    const rect = heroRef.current.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    heroRef.current.style.setProperty("--mouse-x", `${x}%`);
    heroRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div className="home-page">

      <Navbar />

      {/* HERO */}
      <section
        ref={heroRef}
        className="hero"
        style={{ "--hero-image": `url(${heroBackground})` }}
        onMouseMove={handleMouseMove}
      >
        <div className="hero-background" />
        <div className="hero-mouse-glow" />

        <div className="hero-grid" />

        <div className="hero-content">

          <motion.div
            className="hero-title-wrapper"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h1 className="hero-title">
              INNCA Technologies
            </h1>
          </motion.div>

          <div className="hero-typed-line">
            <span>{phrase}</span>
            <span className="typing-cursor" />
          </div>

          <motion.div
            className="hero-points"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span>AI-Powered.</span>
            <span>Human-Centered.</span>
            <span>Consistent.</span>
            <span>Future-Driven.</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            We build intelligent apps and social products
            that empower people and transform the future.
          </motion.p>

          <motion.div
            className="hero-cta-wrapper"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Link
              to="/innovative-solutions"
              className="hero-cta"
            >
              <span>Explore Our World</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>

        <motion.div
          className="cursor-explore"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <div className="mouse-icon">
            <div className="mouse-wheel" />
          </div>

          <span>Move your cursor to explore</span>

          <ArrowDown size={15} />
        </motion.div>

      </section>

      {/* QUICK NAVIGATION */}
      <section className="quick-navigation">

        <div className="quick-navigation-grid">

          {quickLinks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.08,
                duration: 0.65,
              }}
            >
              <Link
                to={item.path}
                className="quick-card"
              >
                <div className="quick-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowRight className="quick-arrow" size={17} />
              </Link>
            </motion.div>
          ))}

        </div>

        <div className="building-statement">
          Building <span>intelligent solutions</span> for a better future.
        </div>

      </section>

      {/* OUR STORY */}
      <section id="story" className="content-section story-section">

        <div className="section-container split-section">

          <motion.div
            className="section-copy"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-eyebrow">
              OUR STORY
            </span>

            <h2>
              Ideas become meaningful
              when technology serves people.
            </h2>

            <p>
              INNCA Technologies is an AI and social
              product company built around one simple
              belief: technology should move humanity
              forward, not leave it behind.
            </p>

            <p>
              We explore ideas, transform them into
              products and continuously search for
              better ways to connect intelligence,
              creativity and human experience.
            </p>

            <Link
              to="/innovative-solutions"
              className="text-link"
            >
              Discover what we build
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            className="image-orbit-wrapper"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="image-glow" />

            <img
              src={storyImage}
              alt="INNCA Technologies story"
              className="section-image"
            />

            <div className="floating-tech-dot dot-one" />
            <div className="floating-tech-dot dot-two" />
            <div className="floating-tech-dot dot-three" />
          </motion.div>

        </div>

      </section>

      {/* TIMELINE */}
      <section className="content-section timeline-section">

        <div className="section-container">

          <motion.div
            className="center-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">
              OUR JOURNEY
            </span>

            <h2>
              From an idea to
              something bigger.
            </h2>
          </motion.div>

          <div className="timeline-layout">

            <motion.div
              className="timeline-image-wrapper"
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={timelineImage}
                alt="INNCA journey"
                className="timeline-image"
              />

              <div className="timeline-image-overlay" />
            </motion.div>

            <div className="timeline">

              {timeline.map((item, index) => (
                <motion.div
                  className="timeline-item"
                  key={item.year}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.7,
                  }}
                >
                  <div className="timeline-marker">
                    <span />
                  </div>

                  <div className="timeline-content">
                    <span className="timeline-year">
                      {item.year}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PURPOSE */}
      <section id="purpose" className="content-section purpose-section">

        <div className="section-container split-section reverse-mobile">

          <motion.div
            className="purpose-image-wrapper"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={purposeImage}
              alt="Our purpose"
              className="section-image"
            />

            <div className="purpose-line line-one" />
            <div className="purpose-line line-two" />
            <div className="purpose-line line-three" />
          </motion.div>

          <motion.div
            className="section-copy"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-eyebrow">
              OUR PURPOSE
            </span>

            <h2>
              Build with intelligence.
              Create with empathy.
            </h2>

            <p>
              We want to make technology feel more
              intuitive, more useful and more human.
            </p>

            <p>
              Every product should solve something,
              simplify something or create an opportunity
              that did not exist before.
            </p>

            <div className="purpose-points">

              <div>
                <Sparkles size={19} />
                <span>Think beyond the obvious.</span>
              </div>

              <div>
                <BrainCircuit size={19} />
                <span>Build intelligent experiences.</span>
              </div>

              <div>
                <Globe2 size={19} />
                <span>Create impact that matters.</span>
              </div>

            </div>
          </motion.div>

        </div>

      </section>

      {/* WHAT WE BELIEVE */}
      <section className="content-section beliefs-section">

        <div className="section-container">

          <div className="center-heading">

            <span className="section-eyebrow">
              WHAT WE BELIEVE
            </span>

            <h2>
              Technology should feel
              almost inevitable.
            </h2>

            <p>
              Simple enough to understand.
              Powerful enough to change things.
            </p>

          </div>

          <div className="belief-grid">

            <motion.div
              className="belief-card"
              whileHover={{ y: -8 }}
            >
              <BrainCircuit />

              <h3>Intelligence</h3>

              <p>
                We use AI to create products that
                understand, adapt and improve.
              </p>
            </motion.div>

            <motion.div
              className="belief-card"
              whileHover={{ y: -8 }}
            >
              <Globe2 />

              <h3>Humanity</h3>

              <p>
                Technology matters most when it
                improves real human experiences.
              </p>
            </motion.div>

            <motion.div
              className="belief-card"
              whileHover={{ y: -8 }}
            >
              <Rocket />

              <h3>Possibility</h3>

              <p>
                We believe the future belongs to
                people willing to build it.
              </p>
            </motion.div>

          </div>

        </div>

      </section>

      {/* FUTURE CTA */}
      <section className="future-section">

        <div className="future-background">
          <img
            src={futureImage}
            alt=""
          />
        </div>

        <div className="future-overlay" />

        <motion.div
          className="future-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            THE NEXT CHAPTER
          </span>

          <h2>
            Building intelligent solutions
            for a better future.
          </h2>

          <p>
            And we're only getting started.
          </p>

          <Link
            to="/future"
            className="hero-cta"
          >
            Explore The Future
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;