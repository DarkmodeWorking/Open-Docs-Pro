'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "GitHub Foundations",
    description: "Learn core GitHub workflows, repositories, and collaboration",
    link: "/github-foundations",
    image: "/github/github-foundations.png",
  },
  {
    title: "GitHub Copilot",
    description: "AI-powered coding assistance for faster development",
    link: "/github-copilot",
    image: "/github/github-copilot.png",
  },
  {
    title: "GitHub Actions",
    description: "Automate builds, tests, and deployments with workflows",
    link: "/github-actions",
    image: "/github/github-actions.png",
  },
  {
    title: "GitHub Admin",
    description: "Manage users, permissions, security, organization settings",
    link: "/github-admin",
    image: "/github/github-admin.png",
  },
  {
    title: "GitHub Advanced Security",
    description: "Identify vulnerabilities and secure code repositories",
    link: "/github-advanced-security",
    image: "/github/github-advanced-security.png",
  },
];



function page() {
  return (
    <div className="max-w-7xl mx-auto px-8 bg-black text-white">
      <HoverEffect items={projects} />
    </div>
  )
}

export default page