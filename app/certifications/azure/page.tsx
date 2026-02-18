'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    description: "Fundamentals",
    link: "/Fundamentals",
    image: "/azure/az900.png",
  },
  {
    title: "Microsoft 365 Fundamentals (MS-900)",
    description: "Fundamentals",
    link: "/Fundamentals1",
    image: "/azure/ms900.png",
  },
  {
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    description: "Fundamentals",
    link: "/Fundamentals2",
    image: "/azure/dp900.png",
  },
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    description: "Fundamentals",
    link: "/Fundamentals3",
    image: "/azure/ai900.png",
  },
  {
    title: "Microsoft Power Platform Fundamentals (PL-900)",
    description: "Fundamentals",
    link: "/Fundamentals4",
    image: "/azure/pl900.png",
  },
  {
    title: "Microsoft Security Compliance (SC-900)",
    description: "Fundamentals",
    link: "/Fundamentals0",
    image: "/azure/sc900.png",
  },
  {
    title: "Microsoft Azure Administrator (AZ-104)",
    description: "Fundamentals",
    link: "/Fundamentals5",
    image: "/azure/az104.png",
  },
  {
    title: "Microsoft Azure AI Engineer (AI-102)",
    description: "Fundamentals",
    link: "/Fundamentals6",
    image: "/azure/ai102.png",
  },
  {
    title: "Microsoft Azure Developer (AZ-204)",
    description: "Fundamentals",
    link: "/Fundamentals8",
    image: "/azure/az204.png",
  },
  {
    title: "Microsoft Azure Solutions Architect (AZ-305)",
    description: "Fundamentals",
    link: "/Fundamentals7",
    image: "/azure/az305.webp",
  },
  {
    title: "Microsoft Azure DevOps Engineer (AZ-400)",
    description: "Fundamentals",
    link: "/Fundamentals9",
    image: "/azure/az400.webp",
  },
]


function page() {
  return (
    <div className="max-w-7xl mx-auto px-8 bg-black text-white">
      <HoverEffect items={projects} />
    </div>
  )
}

export default page