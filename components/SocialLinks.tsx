"use client";

import { FaDiscord, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

type Props = {
  compact?: boolean;
};

export default function SocialLinks({ compact = false }: Props) {
  const links = [
    { icon: FaDiscord, href: "https://discord.gg/hSxP9QNpAe", label: "Discord" },
    { icon: FaTwitter, href: "https://x.com/NexiumApp", label: "Twitter" },
    { icon: FaGithub, href: "https://github.com/NexiumOSS", label: "GitHub" },
  ];

  return (
    <div className={`social-links ${compact ? "social-links-compact" : ""}`}>
      {links.map((link) => (
        <a key={link.label} href={link.href} className="social-button" aria-label={link.label}>
          <link.icon className="social-icon" />
          {!compact && <span className="social-label">{link.label}</span>}
        </a>
      ))}
    </div>
  );
}
