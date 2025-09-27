"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-12 border-t border-primary/20 bg-foreground/5">
      <div className="container max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <div className="space-y-3 text-center sm:space-y-4 sm:text-left sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-b from-[#1984ff] to-[#024591] bg-clip-text">
                {"<JGR/>"}
              </h3>
            </div>
            <p className="max-w-xs mx-auto text-sm text-foreground/70 sm:mx-0">
              Programador Jr especializado en crear soluciones web modernas e innovadoras.
            </p>

            <div className="flex justify-center gap-3 sm:gap-4 sm:justify-start">
              <Link
                isExternal
                href={siteConfig.links.github}
                className="p-2 transition-colors rounded-lg hover:bg-primary/10"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" className="w-5 h-5 text-foreground/70 hover:text-primary" />
              </Link>
              <Link
                isExternal
                href={siteConfig.links.linkedin}
                className="p-2 transition-colors rounded-lg hover:bg-primary/10"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="w-5 h-5 text-foreground/70 hover:text-primary" />
              </Link>
              <Link
                isExternal
                href="mailto:jesusguzriv24@gmail.com"
                className="p-2 transition-colors rounded-lg hover:bg-primary/10"
                aria-label="Email"
              >
                <Icon icon="mdi:email" className="w-5 h-5 text-foreground/70 hover:text-primary" />
              </Link>
            </div>
          </div>


          <div className="space-y-3 text-center sm:space-y-4 sm:text-left">
            <h4 className="text-base font-semibold sm:text-lg text-foreground">Enlaces rápidos</h4>
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mx-auto text-sm transition-colors text-foreground/70 hover:text-primary w-fit sm:mx-0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>


          <div className="space-y-3 text-center sm:space-y-4 sm:text-left">
            <h4 className="text-base font-semibold sm:text-lg text-foreground">Contacto</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <Icon icon="mdi:email" className="flex-shrink-0 w-4 h-4 text-primary" />
                <span className="text-sm break-all text-foreground/70 sm:break-normal">jesusguzriv24@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <Icon icon="mdi:map-marker" className="flex-shrink-0 w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/70">Tampico, Tamaulipas</span>
              </div>
            </div>
          </div>
        </div>


        <div className="my-6 border-t sm:my-8 border-primary/10" />


        <div className="flex flex-col items-center justify-between gap-3 text-center sm:gap-4 sm:text-left md:flex-row">
          <div className="text-xs sm:text-sm text-foreground/60">
            © {currentYear} Jesus Guzman Rivera. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};