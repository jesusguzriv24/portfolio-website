"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/ui/icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="justify-center inline-block text-center">
        <motion.span
          className="inline text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#1984ff] to-[#024591]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeIn" }}
        >
          Fullstack Developer
        </motion.span>
      </div>

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

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.github}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
