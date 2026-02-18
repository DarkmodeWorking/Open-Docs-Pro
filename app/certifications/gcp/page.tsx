'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "Google Cloud Digital Leader",
    description: "Understand cloud concepts, business value, and strategy",
    link: "/gcp-digital-leader",
    image: "/gcp/digital-leader.png",
  },
  {
    title: "Google Generative AI Leader",
    description: "Lead adoption of generative artificial intelligence solutions",
    link: "/gcp-genai-leader",
    image: "/gcp/genai.png",
  },
  {
    title: "Google Associate Cloud Engineer",
    description: "Deploy, manage, and monitor Google Cloud solutions",
    link: "/gcp-associate-cloud-engineer",
    image: "/gcp/cloud-engineer.png",
  },
  {
    title: "Google Associate Data Practitioner",
    description: "Analyze, prepare, and manage data using Google",
    link: "/gcp-associate-data-practitioner",
    image: "/gcp/data-practice.png",
  },
  {
    title: "Google Associate Workspace Administrator",
    description: "Configure, secure, and manage Google Workspace",
    link: "/gcp-workspace-admin",
    image: "/gcp/workspace.png",
  },
  {
    title: "Google Professional Cloud Architect",
    description: "Design scalable, secure, and reliable cloud architectures",
    link: "/gcp-cloud-architect",
    image: "/gcp/cloud-architect.png",
  },
  {
    title: "Google Professional Cloud Developer",
    description: "Build, deploy, and maintain cloud-native applications",
    link: "/gcp-cloud-developer",
    image: "/gcp/cloud-developer.png",
  },
  {
    title: "Google Professional Data Engineer",
    description: "Design, build, and optimize data processing systems",
    link: "/gcp-data-engineer",
    image: "/gcp/data-engineer.png",
  },
  {
    title: "Google Professional Cloud Database Engineer",
    description: "Design, manage, and optimize cloud database solutions",
    link: "/gcp-database-engineer",
    image: "/gcp/cloud-d.png",
  },
  {
    title: "Google Professional Cloud DevOps Engineer",
    description: "Implement CI/CD, monitoring, and site reliability practices",
    link: "/gcp-devops-engineer",
    image: "/gcp/cloud-devops.png",
  },
  {
    title: "Google Professional Cloud Network Engineer",
    description: "Design, implement, manage hybrid cloud networking",
    link: "/gcp-network-engineer",
    image: "/gcp/cloud-network.png",
  },
  {
    title: "Google Professional Cloud Security Engineer",
    description: "Protect cloud infrastructure by advanced security practices",
    link: "/gcp-security-engineer",
    image: "/gcp/security.png",
  },
  {
    title: "Google Professional ML Engineer",
    description: "Design, train, deploy, and optimize machine learning",
    link: "/gcp-ml-engineer",
    image: "/gcp/machine-learning.png",
  },
  {
    title: "Google Professional SecOps Engineer",
    description: "Monitor, detect, and respond to security incidents",
    link: "/gcp-secops-engineer",
    image: "/gcp/secops.png",
  },
  {
    title: "Google Professional Workspace Administrator",
    description: "Manage, secure, and optimize Google Workspace services",
    link: "/gcp-workspace-admin-pro",
    image: "/gcp/work.png",
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