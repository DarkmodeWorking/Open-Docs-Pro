'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "AWS Foundational Cloud Practitioner",
    description: "Fundamentals of AWS cloud concepts and services",
    link: "/cloud-practitioner",
    image: "/aws/cloud-practitioner.png",
  },
  {
    title: "AWS Foundational AI Practitioner",
    description: "Core artificial intelligence and machine learning basics",
    link: "/ai-practitioner",
    image: "/aws/aws-.webp",
  },
  {
    title: "AWS Associate Solutions Architect",
    description: "Design scalable, reliable, and cost-efficient architectures",
    link: "/solutions-architect",
    image: "/aws/solutions-architect.png",
  },
  {
    title: "AWS Associate CloudOps Engineer",
    description: "Operate, monitor, and manage cloud infrastructures",
    link: "/cloudops-engineer",
    image: "/aws/cloudops-engineer.png",
  },
  {
    title: "AWS Associate SysOps Administrator",
    description: "Deploy, manage, and troubleshoot AWS systems",
    link: "/sysops-administrator",
    image: "/aws/sysops-admin.png",
  },
  {
    title: "AWS Associate Data Engineer",
    description: "Build, optimize, and manage data pipelines",
    link: "/data-engineer",
    image: "/aws/data-engineer.png",
  },
  {
    title: "AWS Associate Developer",
    description: "Develop, deploy, and debug cloud applications",
    link: "/developer",
    image: "/aws/developer.png",
  },
  {
    title: "AWS Professional Solutions Architect",
    description: "Design complex, enterprise-grade cloud architectures",
    link: "/solutions-architect-pro",
    image: "/aws/solutions-architect-pro.png",
  },
  {
    title: "AWS Professional Generative AI Developer",
    description: "Build, deploy, and optimize generative AI models",
    link: "/generative-ai-developer",
    image: "/aws/genai.png",
  },
  {
    title: "AWS Professional DevOps Engineer",
    description: "Automate, monitor, and optimize deployment pipelines",
    link: "/devops-engineer",
    image: "/aws/devops.png",
  },
  {
    title: "AWS Specialty Advanced Networking",
    description: "Design and manage complex cloud network architectures",
    link: "/advanced-networking",
    image: "/aws/advanced-networking.png",
  },
  {
    title: "AWS Specialty Machine Learning",
    description: "Build, train, deploy, and optimize ML models",
    link: "/machine-learning",
    image: "/aws/machine-learning.png",
  },
  {
    title: "AWS Specialty Security",
    description: "Secure cloud infrastructure and protect sensitive data",
    link: "/security",
    image: "/aws/security.png",
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