'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "Kubernetes Administrator",
    description: "Kubernetes Administrator",
    link: "/Kubernetes Administrator",
    image: "/k8s/admin.png",
  },
]


function page() {
  return (
    <div className="max-w-5xl mx-auto px-8 bg-black text-white">
      <HoverEffect items={projects} />
    </div>
  )
}

export default page