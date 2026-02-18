'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "Cloud Practitioner",
    description: "Cloud Practitioner",
    link: "/Cloud Practitioner",
    image: "/aws/cloud-practitioner.png",
  },
  {
    title: "AI Practitioner",
    description: "AI Practitioner",
    link: "/AI Practitioner",
    image: "/aws/aws-.webp",
  },
  {
    title: "Solutions Architect",
    description: "Solutions Architect",
    link: "/Solutions Architect",
    image: "/aws/solutions-architect.png",
  },
  {
    title: "CloudOps Engineer",
    description: "CloudOps Engineer",
    link: "/CloudOps Engineer",
    image: "/aws/cloud.webp",
  },
  {
    title: "SysOps Administrator",
    description: "SysOps Administrator",
    link: "/SysOps Administrator",
    image: "/aws/sysops.webp",
  },
  {
    title: "Developer",
    description: "Developer",
    link: "/Developer",
    image: "/aws/developer.png",
  },
  {
    title: "Solutions Architect",
    description: "Solutions Architect",
    link: "/Solutions Architect Pro",
    image: "/aws/solutions-architect-pro.png",
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