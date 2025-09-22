"use client";

import { Icon } from "@iconify/react";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/layout/theme-switch";
import { EspIcon, EngIcon } from "@/components/ui/icons";

export const Navbar = () => {
  const pathname = usePathname();

  const [isEng, setIsEng] = useState(true);

  const toggleLangIcon = () => setIsEng((prev) => !prev);

  return (
    <HeroUINavbar maxWidth="lg" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p className="font-bold text-inherit">{"<JG/>"}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="justify-center flex-1 hidden xl:flex"
        justify="center"
      >
        <ul className="justify-center hidden gap-8 ml-2 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "px-3 py-1 rounded-lg flex flex-col items-center",
                pathname === item.href
                  ? "text-foreground font-medium"
                  : "",
              )}
              color="foreground"
              href={item.href}
              data-active={pathname === item.href ? "true" : undefined}
            >
            <span className="relative flex items-center gap-1 px-2">
              <Icon icon={item.icon} />
              {item.label}
              {pathname === item.href && (
                <span className="absolute left-0 right-0 -bottom-1 h-[4px] rounded bg-primary" />
              )}
            </span>
            </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 xl:flex">
          <Link
            isExternal
            aria-label="Linkedin"
            href={siteConfig.links.linkedin}
          >
            <Icon
              icon="mdi:linkedin"
              width={26}
              height={26}
              className="text-foreground/60"
            />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <Icon
              icon="mdi:github-box"
              width={26}
              height={26}
              className="text-foreground/60"
            />
          </Link>
          <span
            role="button"
            tabIndex={0}
            onClick={toggleLangIcon}
            aria-label="Cambiar idioma"
            className="flex items-center justify-center p-0 m-0 bg-transparent border-none rounded outline-none cursor-pointer select-none"
          >
            {isEng ? <EspIcon size={20} /> : <EngIcon size={20} />}
          </span>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 xl:hidden basis-1" justify="end">
        <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
          <Icon
            icon="mdi:linkedin"
            width={26}
            height={26}
            className="text-foreground/60"
          />
        </Link>
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <Icon
            icon="mdi:github-box"
            width={26}
            height={26}
            className="text-foreground/60"
          />
        </Link>
        <span
          role="button"
          tabIndex={0}
          onClick={toggleLangIcon}
          aria-label="Cambiar idioma"
        >
          {isEng ? <EspIcon size={20} /> : <EngIcon size={20} />}
        </span>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-2 mx-4 mt-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={clsx(
                  "flex items-center px-3 py-2 rounded-lg w-full gap-3",
                  "data-[active=true]:text-primary data-[active=true]:font-medium data-[active=true]:bg-foreground/10"
                )}
                color={"foreground"}
                href={item.href}
                size="lg"
                data-active={pathname === item.href ? "true" : undefined}
              >
                {/* Icono a la izquierda */}
                {item.icon && (
                  <span className="flex-shrink-0 text-xl">
                    <Icon icon={item.icon} />
                  </span>
                )}
                {/* Textos a la derecha */}
                <span className="flex flex-col items-start">
                  <span className="font-semibold">{item.label}</span>
                  <span className="text-xs text-default-500">
                    {item.description}
                  </span>
                </span>
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
