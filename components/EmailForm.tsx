"use client";

import { ArrowRight } from "lucide-react";

export default function EmailForm() {
  const disabled = true;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="email-card">
      <form onSubmit={handleSubmit} className="email-form" aria-label="Email signup">
        <div className="input-shell">
          <input
            type="email"
            value=""
            onChange={() => null}
            placeholder="Waitlist opens closer to launch"
            className="email-input"
            disabled={disabled}
            required
          />
          <button type="submit" className="email-button" disabled={disabled}>
            Coming soon
            <ArrowRight className="icon" />
          </button>
        </div>
      </form>
      <p className="helper-text">Waitlist temporarily closed. Follow us on socials for updates.</p>
    </div>
  );
}
