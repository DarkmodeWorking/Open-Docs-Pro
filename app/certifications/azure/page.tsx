'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "Microsoft 365 Fundamentals (MS-900)",
    description: "Core Microsoft 365 services, security, and compliance",
    link: "/ms-900",
    image: "/azure/ms900.png",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    description: "Basic cloud concepts, Azure services, and pricing",
    link: "/az-900",
    image: "/azure/az900.png",
  },
  {
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    description: "Fundamentals of relational and non-relational data",
    link: "/dp-900",
    image: "/azure/dp900.png",
  },
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    description: "Introduction to artificial intelligence",
    link: "/ai-900",
    image: "/azure/ai900.png",
  },
  {
    title: "Microsoft Security Compliance (SC-900)",
    description: "Security, compliance, identity, and governance fundamentals",
    link: "/sc-900",
    image: "/azure/sc900.png",
  },
  {
    title: "Microsoft Power Platform Fundamentals (PL-900)",
    description: "Build low-code apps using Power Platform tools",
    link: "/pl-900",
    image: "/azure/pl900.png",
  },
  {
    title: "Microsoft Azure Administrator (AZ-104)",
    description: "Manage Azure resources, networking, storage services",
    link: "/az-104",
    image: "/azure/az104.png",
  },
  {
    title: "Microsoft Azure AI Engineer (AI-102)",
    description: "Design and implement AI solutions using Azure",
    link: "/ai-102",
    image: "/azure/ai102.png",
  },
  {
    title: "Microsoft Azure Developer (AZ-204)",
    description: "Develop, deploy, and maintain cloud applications",
    link: "/az-204",
    image: "/azure/az204.png",
  },
  {
    title: "Microsoft Azure Solutions Architect (AZ-305)",
    description: "Design secure, scalable, and reliable cloud architectures",
    link: "/az-305",
    image: "/azure/az305.webp",
  },
  {
    title: "Microsoft Azure DevOps Engineer (AZ-400)",
    description: "Implement CI/CD pipelines and DevOps best practices",
    link: "/az-400",
    image: "/azure/az400.webp",
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