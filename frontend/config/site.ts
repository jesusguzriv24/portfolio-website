export type SiteConfig = typeof siteConfig;

import { Icon } from "@iconify/react";

export const siteConfig = {
  name: "Jesus Guzman | Fullstack Developer",
  description: "Personal portfolio built with Next.js (App Router), TailwindCSS and HeroUI.",
  navItems: [
    {
      label: "Inicio",
      href: "#hero",
      icon: "mdi:home",
    },
    {
      label: "Sobre Mi",
      href: "#about",
      icon: "mdi:account-box",
    },
    {
      label: "Experiencia",
      href: "#experience",
      icon: "mdi:database-clock",
    },
    {
      label: "Proyectos",
      href: "#projects",
      icon: "mdi:laptop-chromebook",
    },
    {
      label: "Contacto",
      href: "#contact",
      icon: "mdi:email",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "#hero",
      icon: "mdi:home",
      description: "Volver al inicio",
    },
    {
      label: "Sobre Mi",
      href: "#about",
      icon: "mdi:account-box",
      description: "Datos personales y habilidades",
    },
    {
      label: "Experiencia",
      href: "#experience",
      icon: "mdi:database-clock",
      description: "Información laboral",
    },
    {
      label: "Proyectos",
      href: "#projects",
      icon: "mdi:laptop-chromebook",
      description: "Lista de proyectos realizados",
    },
    {
      label: "Contacto",
      href: "#contact",
      icon: "mdi:email",
      description: "Formulario e información de contacto",
    },
  ],
  links: {
    github: "https://github.com/jesusguzriv24",
    linkedin: "https://www.linkedin.com/in/jesus-alberto-guzman-rivera-860673246/",
  },
};
