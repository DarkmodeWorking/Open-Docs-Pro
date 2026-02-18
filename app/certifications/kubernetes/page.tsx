'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect';

export const projects = [
  {
    title: "Kubernetes Administrator (CKA)",
    description: "Manage, configure, and troubleshoot clusters",
    link: "/kubernetes-administrator",
    image: "/k8s/admin.png",
  },
  {
    title: "Kubernetes Application Developer (CKAD)",
    description: "Design, build, and deploy cloud-native applications",
    link: "/kubernetes-application-developer",
    image: "/k8s/dev.png",
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