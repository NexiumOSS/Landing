import Image from "next/image";
import Countdown from "../components/Countdown";
import EmailForm from "../components/EmailForm";
import SocialLinks from "../components/SocialLinks";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const features = [
    {
      title: "Unified talent profiles",
      body: "Showcase skills, past work, and availability in one adaptive profile designed for scouts and collaborators.",
    },
    {
      title: "Proof of skill signals",
      body: "Back your claims with code repos, community impact, shipped assets, and verified contributions.",
    },
    {
      title: "Opportunities, routed smartly",
      body: "Receive curated roles, collabs, and bounties that align with your stack, timezone, and goals.",
    },
    {
      title: "Built for creators & devs",
      body: "From community managers to full stack teams, Nexium adapts to how you collaborate and deliver.",
    },
  ];

  const faqs = [
    {
      q: "When does the waitlist open?",
      a: "We’ll reopen the waitlist closer to launch. Follow our socials to be first to know.",
    },
    {
      q: "Who is Nexium for?",
      a: "Builders, creators, developers, and community leaders looking to get discovered and ship together.",
    },
    {
      q: "Will there be early access?",
      a: "Yes. Early cohorts will get invites for private betas, feature tests, and launch day perks.",
    },
    {
      q: "How do brands or studios join?",
      a: "Brand and studio partners can register interest now; outreach opens alongside the beta window.",
    },
  ];

  return (
    <div className="page-shell">
      <div className="aurora aurora-left" />
      <div className="aurora aurora-right" />
      <div className="beam" />

      <header className="top-bar">
        <div className="brand-mark">
          <div className="brand-glyph">
            <Image src="/logo.png" alt="Nexium" width={40} height={40} priority />
          </div>
          <div>
            <p className="brand-name">Nexium</p>
            <p className="brand-tag">Show your skills. Get discovered.</p>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-copy">
            <span className="chip">Launching Q2 2026</span>
            <h1 className="headline">
              Show your skills.
              <span className="headline-accent">Get discovered.</span>
            </h1>
            <p className="lede">
              Nexium is evolving into a global platform for creators, developers, and community
              managers. Launching soon!
            </p>

            <div className="cta-stack">
              <EmailForm />
              <SocialLinks />
            </div>

            <div className="pill-grid">
              {["Creators", "Developers", "Community managers", "Studios"].map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="hero-aside">
            <div className="panel gradient-border">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">Countdown to lift-off</p>
                  <p className="panel-title">Nexium launch</p>
                </div>
                <div className="badge">Live</div>
              </div>
              <Countdown />
              <div className="meta-grid">
                <div>
                  <p className="meta-label">Platform</p>
                  <p className="meta-value">Talent discovery</p>
                </div>
                <div>
                  <p className="meta-label">Focus</p>
                  <p className="meta-value">Creators · Devs · Community</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="section-block">
          <div className="section-header">
            <p className="eyebrow">What’s coming</p>
            <h2 className="section-title">Designed for modern talent discovery</h2>
            <p className="section-lede">
              From proof backed profiles to curated opportunities, Nexium gives builders and teams the clarity
              they need to move fast together.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((item) => (
              <div key={item.title} className="feature-card">
                <div className="feature-icon" aria-hidden>
                  <span>✦</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block">
        <div className="section-header">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">From proof to opportunity</h2>
          <p className="section-lede">
            Ship work, surface signals, and let opportunities find you. Nexium connects the dots between
            what you can do and who needs it.
          </p>
        </div>
        <div className="step-grid">
          {["Show your best work", "Prove with signals", "Match with opportunities", "Collaborate fast"].map((title, idx) => (
            <div key={title} className="step-card">
              <div className="step-pill">Step {idx + 1}</div>
              <h3>{title}</h3>
              <p>
                {idx === 0 && "Bring your builds, creative drops, and community wins into a single, living profile."}
                {idx === 1 && "Connect repos, shipped assets, growth metrics, and reputation badges to verify your craft."}
                {idx === 2 && "We route roles, collabs, and bounties that fit your stack, timezone, and ambitions."}
                {idx === 3 && "Form squads quickly with transparent scopes, timelines, and shared delivery checklists."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
          <div className="section-header">
            <p className="eyebrow">FAQs</p>
            <h2 className="section-title">What you might want to know</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((item) => (
              <div key={item.q} className="faq-item">
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

      <section className="cta-banner">
        <div>
          <p className="eyebrow">Stay close</p>
          <h2 className="section-title">Follow along while we build</h2>
          <p className="section-lede">Updates, drops, and early access cohorts will roll out on our socials.</p>
        </div>
        <SocialLinks />
      </section>

        <footer className="footer">
          <p className="footer-copy">© {new Date().getFullYear()} ByteBrush Studios — All rights reserved</p>
          <SocialLinks compact />
        </footer>
      </main>
    </div>
  );
}

