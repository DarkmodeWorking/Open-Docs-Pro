"use client";

import { FocusCards } from "@/components/ui/focus-cards";

const cards = [
  {
    title: "Amazon Web Services",
    src: "/certifications/1.png",
    description: "Cloud computing platform by AWS for scalable applications.",
    link: "/certifications/aws",
  },
  {
    title: "Azure",
    src: "/certifications/2.png",
    description: "Microsoft cloud services for building and deploying apps.",
    link: "/certifications/azure",
  },
  {
    title: "Google Cloud",
    src: "/certifications/3.png",
    description: "Google's cloud platform for data, AI, and infrastructure.",
    link: "/certifications/gcp",
  },
  {
    title: "Github",
    src: "/certifications/4.png",
    description: "Platform for version control and collaborative development.",
    link: "/certifications/github",
  },
  {
    title: "Oracle",
    src: "/certifications/5.png",
    description: "Enterprise database and cloud infrastructure solutions.",
    link: "/certifications/oracle",
  },
  {
    title: "Kubernetes",
    src: "/certifications/6.png",
    description: "Container orchestration system for modern applications.",
    link: "/certifications/kubernetes",
  },
  {
    title: "Terraform",
    src: "/certifications/7.png",
    description: "Infrastructure as Code tool for cloud automation.",
    link: "/certifications/terraform",
  },
  {
    title: "Databricks",
    src: "/certifications/8.png",
    description: "Data engineering and AI analytics platform.",
    link: "/certifications/databricks",
  },
];

function page() {
  return (
    <div className="bg-black">
       <FocusCards cards={cards} />
    </div>
  )
}

export default page