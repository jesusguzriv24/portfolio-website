"use client";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Icon } from "@iconify/react";
import { Code } from "@heroui/code";

import FadeIn from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Desarrollador Web",
    company: "Servicios CBI Tampico",
    location: "Tampico, Tamaulipas",
    period: "Julio 2024 - Marzo 2025",
    description:
      "Diseño y desarrollo completo de una aplicación web bajo arquitectura MVC para la gestión integral de usuarios, clientes, inventario y órdenes de servicio en un centro de servicio autorizado Samsung. El sistema reemplazó una plataforma obsoleta, optimizando la velocidad, confiabilidad y eliminando redundancias.",
    achievements: [
      "Recolección y análisis de requerimientos.",
      "Diseño y modelado de la base de datos relacional.",
      "Implementación de un sistema escalable con autenticación segura y control de roles.",
      "Optimización de la experiencia de usuario mediante UI/UX minimalista y responsiva.",
      "Desarrollo individual a lo largo de todas las fases del proyecto (end-to-end).",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "TailwindCSS",
      "Zod",
      "Framer Motion",
      "Vercel",
      "Git",
    ],
  },
  {
    title: "Técnico en Sistemas",
    company: "Instituo Nacional Electoral (INE)",
    location: "Pánuco, Veracruz",
    period: "Mayo 2023 - Julio 2024",
    description:
      "Soporte técnico especializado en la instalación, configuración y mantenimiento de módulos de atención ciudadana del INE, asegurando la operación continua de los sistemas electorales y la infraestructura informática asociada.",
    achievements: [
      "Instalación, configuración y mantenimiento de módulos de atención ciudadana.",
      "Ejecución de mantenimiento preventivo y correctivo en equipos de cómputo.",
      "Validación y envío de información generada por sistemas electorales.",
      "Depuración de bases de datos para mantener actualizado el padrón electoral.",
      "Gestión de inventario de bienes informáticos y seguimiento de incidencias técnicas vía CAU.",
      "Apoyo en la implementación de nuevas versiones del sistema SIIRFEMAC.",
      "Soporte a personal operativo en juntas distritales y vocalías.",
    ],
    technologies: [
      "Windows Server",
      "Active Directory",
      "SQL (consultas y depuración de bases de datos)",
      "Herramientas de soporte remoto",
      "Paquetería Office",
      "SIIRFEMAC (sistema electoral)",
      "Gestores de incidencias (CAU)",
    ],
  },
  {
    title: "Programador Jr",
    company: "Lumasoft",
    location: "Celaya, Guanajuato",
    period: "Junio 2022 - Noviembre 2022",
    description:
      "Apoyo en el desarrollo y mantenimiento de aplicaciones web, colaborando en la implementación de interfaces y funcionalidades básicas.",
    achievements: [
      "Desarrollo de componentes con HTML, CSS y JavaScript.",
      "Corrección de errores y mejora de la experiencia de usuario.",
      "Colaboración en pruebas y documentación técnica del proyecto.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Git"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-125px)] scroll-mt-20 mt-28"
    >
      <div className="container max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-8 text-center slide-up">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-b from-[#1984ff] to-[#024591] bg-clip-text">
              Experiencia Profesional
            </h2>
            <p className="text-md text-muted-foreground">
              Soy un desarrollador de software con experiencia en el diseño de
              aplicaciones web dinámicas y accesibles, enfocado en transformar
              ideas en soluciones digitales eficientes.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeIn key={index}>
              <Card
                key={index}
                className="border rounded-lg shadow-lg border-primary/50 bg-foreground/10 section-card slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="relative p-6 border-b border-foreground/20">
                  <div className="flex flex-col gap-2">
                    {/* Título y compañía */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>

                    {/* Periodo y ubicación */}
                    <div className="flex flex-col gap-2 text-sm text-foreground/80 sm:flex-row md:absolute md:top-6 md:right-6 md:gap-4">
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:calendar" className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:map-marker" className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="p-6">
                  <p className="mb-4 leading-relaxed text-foreground/80">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-3 text-lg font-semibold text-foreground">
                      Logros clave:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-foreground/90"
                        >
                          <div className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Code
                        key={tech}
                        color="primary"
                        className="px-2 py-1 text-xs text-white rounded-md bg-primary"
                      >
                        {tech}
                      </Code>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
