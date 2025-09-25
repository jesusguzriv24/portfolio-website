"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/ui/icons";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-125px)] scroll-mt-20"
    >
      <motion.div
        className="justify-center inline-block text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeIn" }}
      >
        <span className="inline sm:text-6xl text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#1984ff] to-[#024591]">
          Fullstack Developer
        </span>
      </motion.div>
      <motion.div
        className="justify-center inline-block text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeIn" }}
      >
        <span className="inline sm:text-4xl text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#4B5563] to-[#9CA3AF]">
          Jesus Guzman Rivera
        </span>
      </motion.div>

      <div className="relative flex items-center justify-center w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] mx-auto">
        {/* GrayShape.png con rotación */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeIn", delay: 0.2 }}
        >
          <Image
            src="/GrayShape.png"
            alt="Gray Shape"
            fill
            className="object-cover rotate-[25deg]"
            priority
          />
        </motion.span>
        {/* BlueShape.png encima */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
        >
          <Image
            src="/BlueShape.png"
            alt="Blue Shape"
            fill
            className="object-cover"
            priority
          />
        </motion.span>
        {/* Imagen HeroPerfil.png encima de las figuras */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.7, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <Image
            src="/HeroPerfil.png"
            alt="Perfil"
            fill
            className="object-cover rounded-full"
            priority
          />
        </motion.span>
      </div>

      <div className="flex justify-center w-full mb-2">
        <motion.div
          className="grid w-full max-w-3xl grid-cols-1 md:grid-cols-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeIn" }}
        >
          {/* Card 1 */}
          <div className="flex items-center justify-center p-4 rounded-xl">
            {/* Texto grande a la izquierda */}
            <span className="text-6xl font-extrabold text-primary">+3</span>
            {/* Enunciados a la derecha */}
            <div className="flex flex-col items-start ml-4">
              <span className="text-base font-semibold text-foreground">
                Años de experiencia
              </span>
              <span className="text-sm text-foreground/70">
                Desarrollando proyectos web
              </span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex items-center justify-center p-4 rounded-xl">
            {/* Texto grande a la izquierda */}
            <span className="text-6xl font-extrabold text-primary">+3</span>
            {/* Enunciados a la derecha */}
            <div className="flex flex-col items-start ml-4">
              <span className="text-base font-semibold text-foreground">
                Proyectos realizados
              </span>
              <span className="text-sm text-foreground/70">Web, ML y APIs</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex items-center justify-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: "easeIn" }}
      >
        {/* Botón para descargar CV */}
        <a
          href="/CV.pdf"
          download
          className={buttonStyles({
            color: "primary",
            radius: "lg",
            variant: "shadow",
          })}
        >
          <Icon icon="mdi:download" className="text-xl" />
          Descargar CV
        </a>
        {/* Botón solo icono Github */}
        <Link
          isExternal
          href={siteConfig.links.github}
          className="inline-flex items-center justify-center p-1 m-0 transition bg-transparent border rounded-lg border-foreground/80 hover:bg-primary/10"
        >
          <Icon icon="mdi:github" className="text-3xl text-foreground/80" />
        </Link>
        {/* Botón solo icono Linkedin */}
        <Link
          isExternal
          href={siteConfig.links.linkedin}
          className="inline-flex items-center justify-center p-1 m-0 transition bg-transparent border rounded-lg border-foreground/80 hover:bg-primary/10"
        >
          <Icon icon="mdi:linkedin" className="text-3xl text-foreground/80" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
