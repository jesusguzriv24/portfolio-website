import React from "react";
import { Icon } from "@iconify/react";
import FadeIn from "@/components/ui/FadeIn";

const About = () => {
  const educationData = [
    {
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Autónoma de Tamaulipas",
      period: "2018 - 2022",
    },
    {
      degree: "Técnico en Programación",
      institution:
        "Centro de Bachillerato Tecnológico Industrial y de Servicios No. 55",
      period: "2015 - 2018",
    },
  ];

  const skills = [
    { name: "HTML", icon: "mdi:language-html5" },
    { name: "CSS", icon: "mdi:language-css3" },
    { name: "JavaScript", icon: "mdi:language-javascript" },
    { name: "TypeScript", icon: "mdi:language-typescript" },
    { name: "Python", icon: "mdi:language-python" },
    { name: "React", icon: "mdi:react" },
    { name: "Next.js", icon: "mdi:alpha-n-box" },
    { name: "Node.js", icon: "mdi:nodejs" },
    { name: "TailwindCSS", icon: "mdi:tailwind" },
    { name: "Git", icon: "mdi:git" },
    { name: "MySQL", icon: "mdi:database" },
    { name: "PostgreSQL", icon: "mdi:database" },
    { name: "VS Code", icon: "mdi:microsoft-visual-studio-code" },
    { name: "Excel", icon: "mdi:microsoft-excel" },
  ];

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-125px)] scroll-mt-20 mt-18"
    >
      <div className="container max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-b from-[#1984ff] to-[#024591] bg-clip-text">
              Educación
            </h2>
            <p className="px-8 text-md text-muted-foreground">
              Formación académica orientada a la innovación y creación de
              soluciones digitales.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <FadeIn key={index}>
              <div
                key={index}
                className="relative overflow-hidden transition-all duration-500 transform border shadow-lg border-primary/50 group bg-foreground/10 rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-blue-400/10 to-blue-200/10 group-hover:opacity-100" />

                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-100 bg-gradient-to-br from-blue-700 to-blue-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 rounded-tr-full opacity-100 bg-gradient-to-tr from-blue-700 to-blue-500" />

                <div className="relative p-8">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full shadow-lg bg-gradient-to-r from-blue-700 to-blue-400">
                    <Icon icon="mdi:school" className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-center transition-colors duration-300 text-foreground group-hover:text-blue-600">
                    {edu.degree}
                  </h3>

                  <p className="mb-4 text-lg font-medium text-center text-foreground/70">
                    {edu.institution}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2 px-4 py-2 border border-blue-100 rounded-full bg-gradient-to-r from-blue-50 to-purple-50">
                      <Icon
                        icon="mdi:calendar"
                        className="w-4 h-4 text-blue-500"
                      />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>

                  <div className="w-16 h-1 mx-auto mt-6 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-r from-blue-700 to-blue-400 group-hover:opacity-100" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="container max-w-4xl mx-auto">
        <FadeIn>
          <div className="my-12 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-b from-[#1984ff] to-[#024591] bg-clip-text">
              Habilidades
            </h2>
            <p className="px-8 text-md text-muted-foreground">
              Conjunto de lenguajes, frameworks y herramientas que utilizo para desarrollar proyectos.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
          {skills.map((skill, index) => (
            <FadeIn key={index}>
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 transition-transform duration-300 border rounded-lg shadow-md border-primary/50 bg-foreground/10 hover:scale-105"
              >
                <Icon icon={skill.icon} className="w-10 h-10 text-primary" />
                <span className="mt-2 text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
