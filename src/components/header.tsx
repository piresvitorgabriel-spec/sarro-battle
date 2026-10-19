"use client";

import { useState } from "react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#competicoes", label: "Competições" },
  { href: "#ranking", label: "Ranking" },
  { href: "#como-participar", label: "Como participar" },
  { href: "#sobre", label: "Sobre" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(14,14,15,0.8)] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] backdrop-blur-[12px]">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-4 px-5 md:px-12">
        <a href="#inicio" className="flex items-center gap-4">
          <img src="/images/logo.png" alt="" width={57} height={32} className="h-8 w-[57px] object-contain" />
          <span className="hidden font-display text-xl font-semibold tracking-[-0.5px] text-mist uppercase sm:inline">
            Sarro Battle
          </span>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 font-sans text-xs font-semibold tracking-[0.96px] text-sand uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#entrar" className="hidden px-4 py-2 font-sans text-xs font-semibold tracking-[0.96px] text-sand uppercase sm:inline">
            Entrar
          </a>
          <a
            href="#criar-conta"
            className="rounded-xl bg-ember px-3 py-2 font-sans text-[11px] font-semibold tracking-[0.96px] text-ember-ink uppercase shadow-[0_0_8px_rgba(255,86,53,0.5)] sm:px-6 sm:text-xs"
          >
            Criar conta
          </a>
          <span className="hidden size-8 items-center justify-center rounded-xl bg-peach sm:flex">
            <img src="/images/icon-user.svg" alt="" width={12} height={12} className="size-3" />
          </span>
          <button
            type="button"
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-lg bg-card lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="block h-0.5 w-4 bg-mist" />
            <span className="block h-0.5 w-4 bg-mist" />
            <span className="block h-0.5 w-4 bg-mist" />
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/5 bg-ink px-5 py-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-sans text-xs font-semibold tracking-[0.96px] text-sand uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
