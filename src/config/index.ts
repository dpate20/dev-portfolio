import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Devarth Patel",
  author: "Devarth Patel",
  description:
    "M.S Information Systems @ Dakota State University - Madison,SD | Cybersecurity, Network Security, Digital Forensics, Management",
  lang: "en",
  siteLogo: "/dev-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/devarth-patel" },
    { text: "Github", href: "https://github.com/dpate20" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://dev-portfolio-seven-pi.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Devarth Patel",
    specialty: "Cybersecurity + Automation",
    summary: "Building practical security tools, labs, and detection projects.",
    email: "Dev.Patel@trojan.dsu.edu",
  },
  experience: [
    {
      company: "Kansas Memorial Union",
      position: "E-Commerce Associate Lead ",
      startDate: "Jan 2024",
      endDate: "Jan 2026",
      summary: [
      "Audited 500+ products per week across 300+ product categories, validating end-to-end listing integrity in Oracle NetSuite + CMS—including titles/descriptions, pricing, product attributes/variants, inventory/availability status, and category placement—to ensure accurate, consistent customer-facing listings.",
      "Performed structured discrepancy investigation when data didn’t match across systems: compared records between NetSuite, CMS, vendor feeds, and internal reference sources; identified the source of truth; flagged inconsistencies; and executed corrections to eliminate mismatches (pricing errors, missing attributes, incorrect availability, misclassified items).",
      "Used 8+ external systems/databases to verify and cross-check product information, troubleshoot exceptions, and resolve workflow blockers—supporting faster resolution when issues involved incomplete vendor data, conflicting values between systems, or missing required fields.",
      "Maintained and coordinated 40+ vendor relationships, serving as the point of contact for product updates, field requirements, and issue resolution; communicated data needs clearly, followed up on missing/inaccurate information, and ensured vendor inputs aligned with internal standards and publishing timelines.",
      "Managed day-to-day operational issues using a ticket/incident workflow: logged issues with clear reproduction steps, impacted SKUs/categories, suspected root cause, and recommended actions; escalated complex issues to the appropriate stakeholder (vendor/internal team) and tracked progress through closure.",  
      "Authored 3 internal user guides (step-by-step SOPs) covering recurring processes and common failure points, standardizing how new employees handle audits, corrections, and escalations—reducing repeat errors and improving onboarding consistency.",
      ],
    },
   
    {
      company: "Victorian Inn",
      position: "IT Assistant",
      startDate: "Sept 2020",
      endDate: "Dec 2023",
      summary:
        "Supported day-to-day hotel operations systems—including reservation/booking platforms and internal front-desk tools—with a focus on uptime, continuity, and reliable end-to-end workflows (booking → check-in → billing → check-out).",
        "Managed 3–4 third-party app integrations that powered reservations and operational workflows; monitored for failures, triaged outages/workflow breaks, identified where the process was failing (integration vs platform vs user workflow), and coordinated resolution to restore service quickly.",
        "Served as the point person for operational troubleshooting during high-impact issues: investigated errors affecting reservation creation, payment/billing sync, room assignment, and guest communications; escalated when needed and ensured fixes were validated before returning to normal operations.",
        "Maintained and validated 30+ guest records/day, ensuring accuracy and consistency across guest profiles, booking details, billing status, and check-in/check-out actions—reducing mistakes that could cause double bookings, incorrect charges, or guest experience issues.",
        "Documented incidents with clear root-cause summaries, steps taken, final fixes, and prevention measures; created repeatable handoff notes for front-desk staff and improved operational reliability by ~60% by reducing recurring workflow failures and speeding up issue resolution.",
        "Strengthened frontline handoffs by standardizing what staff should check during exceptions (booking mismatches, payment failures, missing fields), improving consistency across shifts and reducing dependency on ad-hoc troubleshooting.",    
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description:`
    I’m Dev Patel, a cybersecurity-focused M.S. student who builds real-world security tools, labs, and automation. My interests center on detection engineering, network security, and scalable security workflows.
    Right now, I’m developing projects in traffic analysis, anomaly detection, and blue-team visibility.
  `,
    image: "/dev-big.jpg",
  },
};

// #5755ff
