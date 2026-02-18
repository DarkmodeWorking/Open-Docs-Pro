'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "Hashicorp Terraform Associate (HCTA0)",
    description: "Manage infrastructure using infrastructure as code principles",
    link: "/terraform-associate",
    image: "/trf/associate.png",
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