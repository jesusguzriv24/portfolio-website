"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Aplicación Web Centro de Servicios CBI",
      description:
        "Diseñada para un centro de servicio autorizado Samsung, con el fin de gestionar de manera eficiente órdenes de servicio, inventario, clientes y usuarios.",
      image: "/ServiciosCBI.jpg",
      technologies: [
        { name: "React", icon: "mdi:react" },
        { name: "Node.js", icon: "mdi:nodejs" },
        { name: "Next.js", icon: "mdi:alpha-n-box" },
        { name: "PostgreSQL", icon: "mdi:database" },
        { name: "TailwindCSS", icon: "mdi:tailwind" },
        { name: "TypeScript", icon: "mdi:language-typescript" },
      ],
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 2,
      title: "Modelo de ML para Predicción de Partidos de NBA",
      description:
        "Un modelo de Machine Learning que emplea datos históricos de equipos y jugadores, obtenidos mediante técnicas de scrapping, para predecir los resultados de los partidos de la NBA.",
      image: "/ML_NBA.jpg",
      technologies: [
        { name: "Python", icon: "mdi:language-python" },
        { name: "Pandas", icon: "mdi:panda" },
        { name: "BeautifulSoup", icon: "mdi:bowl-mix" },
        { name: "Scikit-Learn", icon: "mdi:language-python" },
        { name: "XGBoost", icon: "mdi:language-python" },
        { name: "LightGBM", icon: "mdi:language-python" },
      ],
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 3,
      title: "Control de Bodega Electoral",
      description:
        "Gestion de inventarios y reportes para una bodega electoral, facilitando el control de materiales y recursos otorgados a los CAEs durante procesos electorales.",
      image: "/BodegaElectoral.jpg",
      technologies: [
        { name: "Excel", icon: "mdi:microsoft-excel" },
        { name: "Visual Basic", icon: "mdi:microsoft-visual-studio" },
      ],
      liveUrl: "",
      githubUrl: "",
    },
  ];

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToProject = (index: number) => {
    if (isAnimating || index === currentProject) return;
    setIsAnimating(true);
    setCurrentProject(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate projects every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextProject();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-125px)] scroll-mt-20 mt-28 px-4 md:px-8 lg:px-16"
    >
      <FadeIn>

        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-b from-[#1984ff] to-[#024591] bg-clip-text">
            Proyectos
          </h2>

        </div>


        <div className="w-full max-w-4xl mx-auto">
          <div className="relative overflow-hidden border shadow-xl rounded-2xl bg-gradient-to-br from-[#024591]/30 to-[#1984ff]/40 backdrop-blur-sm border-default-200">

            <div className="relative w-full h-64 overflow-hidden md:h-80 lg:h-96">
              <div
                className={`relative w-full h-full transition-transform duration-500 ease-in-out ${
                  isAnimating ? "scale-105 opacity-80" : "scale-100 opacity-100"
                }`}
              >
                <Image
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>


              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


              <button
                onClick={prevProject}
                disabled={isAnimating}
                className="absolute flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 border rounded-full left-4 top-1/2 bg-black/30 backdrop-blur-sm border-white/20 hover:bg-black/50 group disabled:opacity-50"
              >
                <Icon
                  icon="mdi:chevron-left"
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                />
              </button>

              <button
                onClick={nextProject}
                disabled={isAnimating}
                className="absolute flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 border rounded-full right-4 top-1/2 bg-black/30 backdrop-blur-sm border-white/20 hover:bg-black/50 group disabled:opacity-50"
              >
                <Icon
                  icon="mdi:chevron-right"
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                />
              </button>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isAnimating
                    ? "transform translate-y-4 opacity-0"
                    : "transform translate-y-0 opacity-100"
                }`}
              >

                <h3 className="mb-4 text-lg font-bold md:text-3xl lg:text-2xl text-default-900">
                  {projects[currentProject].title}
                </h3>


                <p className="max-w-4xl mb-6 text-sm leading-relaxed md:text-md text-default-700">
                  {projects[currentProject].description}
                </p>


                <div >
                  <h4 className="mb-3 text-sm font-light tracking-wider uppercase text-default-600">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[currentProject].technologies.map(
                      (tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-2 transition-colors border rounded-full bg-default-100 hover:bg-default-200 border-default-200"
                        >
                          <Icon
                            icon={tech.icon}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-sm font-medium text-default-700">
                            {tech.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>


                {/* <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    as={Link}
                    href={projects[currentProject].liveUrl}
                    target="_blank"
                    size="lg"
                    className="px-8 py-3 font-semibold text-sm text-white transition-all duration-300 bg-gradient-to-b from-[#1984ff] to-[#024591] rounded-xl hover:shadow-lg hover:scale-105"
                    startContent={
                      <Icon icon="mdi:open-in-new" className="w-5 h-5" />
                    }
                  >
                    Ver Proyecto
                  </Button>

                  <Button
                    as={Link}
                    href={projects[currentProject].githubUrl}
                    target="_blank"
                    variant="bordered"
                    size="lg"
                    className="px-8 py-3 text-sm font-semibold transition-all duration-300 border-default-300 text-default-700 hover:bg-default-100 rounded-xl hover:shadow-md hover:scale-105"
                    startContent={
                      <Icon icon="mdi:github" className="w-5 h-5" />
                    }
                  >
                    Ver Codigo
                  </Button>
                </div> */}
              </div>
            </div>
          </div>


          <div className="flex items-center justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                disabled={isAnimating}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "w-8 bg-gradient-to-r from-[#1984ff] to-[#024591]"
                    : "w-2 bg-default-300 hover:bg-default-400"
                } disabled:opacity-50`}
              />
            ))}
          </div>

          <div className="mt-2 text-center">
            <span className="text-sm text-default-500">
              {currentProject + 1} de {projects.length}
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
