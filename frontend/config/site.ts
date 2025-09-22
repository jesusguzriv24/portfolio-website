export type SiteConfig = typeof siteConfig;

import { Icon } from "@iconify/react";

export const siteConfig = {
  name: "Jesus Guzman | Freelance Developer",
  description: "Personal portfolio built with Next.js (App Router), TailwindCSS and HeroUI.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
      icon: "mdi:home",
    },
    {
      label: "Sobre Mi",
      href: "/about",
      icon: "mdi:account-box",
    },
    {
      label: "Proyectos",
      href: "/projects",
      icon: "mdi:laptop-chromebook",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
      icon: "mdi:home",
      description: "Regresa a la pagina principal",
    },
        {
      label: "Sobre Mi",
      href: "/about",
      icon: "mdi:account-box",
      description: "Conoce mas sobre mi experiencia y habilidades",
    },
    {
      label: "Proyectos",
      href: "/projects",
      icon: "mdi:laptop-chromebook",
      description: "Trabajos y proyectos realizados",
    },
  ],
  links: {
    github: "https://github.com/jesusguzriv24",
    linkedin: "https://www.linkedin.com/in/jesus-alberto-guzman-rivera-860673246/",
  },
};
