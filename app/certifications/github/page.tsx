'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "Github Foundations",
    description: "Github Foundations",
    link: "/Github Foundations",
    image: "/github/github-foundations.png",
  },
  {
    title: "Github Actions",
    description: "Github Actions",
    link: "/Github Actions",
    image: "/github/github-actions.png",
  },
  {
    title: "Github Advanced Security",
    description: "Github Advanced Security",
    link: "/Github Advanced Security",
    image: "/github/github-advanced-security.png",
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