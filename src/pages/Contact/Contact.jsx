import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

import "./Contact.css";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "message" && value.length > 1000) {
      return;
    }

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Frontend-only for now.

      Later we will connect this form to your backend/email service
      so submissions are delivered to:

      support@inncatechnologies.com
    */

    setSubmitted(true);
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-grid-bg" />

        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />

        <div className="contact-hero-inner">

          <div className="contact-hero-copy">

            <div className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              CONNECT WITH INNCA
            </div>

            <h1>
              Let's make
              <span> something</span>
              <br />
              meaningful.
            </h1>

            <p>
              Have a question, an idea, a collaboration opportunity,
              or simply want to know more about what we're building?
              We'd love to hear from you.
            </p>

            <div className="contact-hero-meta">

              <div>
                <span>EMAIL</span>
                <a href="mailto:support@inncatechnologies.com">
                  support@inncatechnologies.com
                </a>
              </div>

              <div>
                <span>RESPONSE</span>
                <p>Usually within 1–2 business days</p>
              </div>

            </div>

          </div>

          <div className="contact-hero-orbit">

            <div className="contact-orbit orbit-one" />
            <div className="contact-orbit orbit-two" />
            <div className="contact-orbit orbit-three" />

            <div className="contact-orbit-core">
              <Sparkles size={30} strokeWidth={1.2} />
            </div>

            <span className="contact-orbit-dot dot-one" />
            <span className="contact-orbit-dot dot-two" />
            <span className="contact-orbit-dot dot-three" />

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT AREA
      ===================================================== */}

      <section className="contact-main">

        <div className="contact-container">

          <div className="contact-layout">

            {/* LEFT INFORMATION */}

            <aside className="contact-information">

              <div className="contact-section-label">
                <span />
                START A CONVERSATION
              </div>

              <h2>
                Tell us what
                <br />
                you're <em>thinking.</em>
              </h2>

              <p className="contact-description">
                For your query or any question, fill in the form
                and we'll be happy to hear from you and respond.
                Whether you're exploring an idea, looking for
                collaboration, or simply curious about INNCA,
                every conversation starts somewhere.
              </p>

              <div className="contact-info-block">

                <div className="contact-info-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <span>WRITE TO US</span>

                  <a href="mailto:support@inncatechnologies.com">
                    support@inncatechnologies.com
                  </a>
                </div>

              </div>

              <div className="contact-info-block">

                <div className="contact-info-icon">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <span>WHATSAPP</span>

                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Start a conversation
                  </a>
                </div>

              </div>


              {/* SOCIALS */}

              <div className="contact-social-area">

                <span className="contact-social-title">
                  FOLLOW OUR JOURNEY
                </span>

                <div className="contact-socials">

                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <span className="social-letter">◎</span>
                    <span>Instagram</span>
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <span className="social-letter">in</span>
                    <span>LinkedIn</span>
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href="mailto:support@inncatechnologies.com"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                    <span>Email</span>
                    <ArrowUpRight size={15} />
                  </a>

                </div>

              </div>

            </aside>


            {/* FORM */}

            <div className="contact-form-wrapper">

              <div className="contact-form-top">

                <div>
                  <span>CONTACT FORM</span>

                  <h3>
                    Send us a message.
                  </h3>
                </div>

                <div className="form-secure">
                  <span className="secure-dot" />
                  SECURE
                </div>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <div className="form-field">
                    <label htmlFor="firstName">
                      First Name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Your first name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Your last name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>


                <div className="form-row">

                  <div className="form-field">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="company">
                      Company / Organization
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>

                </div>


                <div className="form-field">

                  <label htmlFor="subject">
                    What can we help with?
                  </label>

                  <div className="select-wrapper">

                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >

                      <option value="" disabled>
                        Select a topic
                      </option>

                      <option value="general">
                        General Inquiry
                      </option>

                      <option value="collaboration">
                        Collaboration
                      </option>

                      <option value="business">
                        Business Opportunity
                      </option>

                      <option value="product">
                        Product / Solution
                      </option>

                      <option value="career">
                        Career
                      </option>

                      <option value="other">
                        Something Else
                      </option>

                    </select>

                    <ChevronDown size={17} />

                  </div>

                </div>


                <div className="form-field">

                  <div className="message-label-row">

                    <label htmlFor="message">
                      Your Question / Message
                    </label>

                    <span>
                      {form.message.length}/1000
                    </span>

                  </div>

                  <textarea
                    id="message"
                    name="message"
                    rows="8"
                    maxLength="1000"
                    placeholder="Tell us a little about your question, idea, project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-bottom">

                  <p>
                    By submitting this form, you agree that
                    INNCA Technologies may use your information
                    to respond to your inquiry.
                  </p>

                  <button
                    type="submit"
                    className={`contact-submit ${
                      submitted ? "submitted" : ""
                    }`}
                  >

                    {submitted ? (
                      <>
                        <Check size={17} />
                        Message Ready
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}

                  </button>

                </div>


                {submitted && (
                  <div className="form-success">

                    <div className="success-icon">
                      <Check size={18} />
                    </div>

                    <div>
                      <strong>
                        Your message has been prepared.
                      </strong>

                      <p>
                        We'll connect the form to
                        support@inncatechnologies.com
                        when we set up the backend.
                      </p>
                    </div>

                  </div>
                )}

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final">

        <div className="contact-final-grid" />

        <div className="contact-final-inner">

          <span className="contact-section-label centered">
            ONE CONVERSATION CAN START SOMETHING
          </span>

          <h2>
            The future
            <span> starts with a conversation.</span>
          </h2>

          <a
            href="mailto:support@inncatechnologies.com"
            className="contact-final-button"
          >
            Email INNCA
            <ArrowUpRight size={18} />
          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="contact-footer">

        <div className="contact-container">

          <div className="contact-footer-main">

            <div className="contact-footer-brand">

              <span>INNCA TECHNOLOGIES</span>

              <h3>
                Building intelligent
                <br />
                <em>solutions</em> for a
                <br />
                better future.
              </h3>

            </div>


            <div className="contact-footer-links">

              <div>

                <span>EXPLORE</span>

                <a href="/">Home</a>

                <a href="/career">Career</a>

                <a href="/innovative-solutions">
                  Innovative Solutions
                </a>

                <a href="/future">Future</a>

              </div>


              <div>

                <span>COMPANY</span>

                <a href="/founder">Founder</a>

                <a href="/contact">Contact</a>

                <a href="/contact">Let's Talk</a>

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


          <div className="contact-footer-bottom">

            <span>
              © {new Date().getFullYear()} INNCA Technologies.
              All rights reserved.
            </span>

            <span>
              AI POWERED · HUMAN CENTRED
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
};

export default Contact;