"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  return (
    <section className="bg-ink-2 px-5 py-16 md:px-12">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col items-start justify-between gap-8 rounded-2xl bg-card p-8 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] md:p-16 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <p className="flex items-center gap-1 font-sans text-xs font-semibold tracking-[0.96px] text-peach uppercase">
            <img src="/images/icon-bell.svg" alt="" width={17} height={17} className="h-[17px] w-[17px]" />
            Radar de eventos
          </p>
          <h2 className="mt-1 font-display text-[28px] leading-[34px] font-bold tracking-[-0.28px] text-mist uppercase">
            Fique por dentro das
            <br />
            próximas batalhas.
          </h2>
          <p className="font-sans text-[15px] leading-6 text-sand">
            Receba novas competições, convocações de jurados e abertura de chaves diretamente na sua caixa de entrada.
          </p>
        </div>
        <SubscribeForm placeholder="Seu melhor e-mail..." action="Quero receber" inputClass="bg-ink" />
      </div>
    </section>
  );
}

export function SubscribeForm({
  placeholder,
  action,
  inputClass,
}: {
  placeholder: string;
  action: string;
  inputClass: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  }

  if (done) {
    return <p className="font-sans text-sm text-mint">Inscrição confirmada. A gente avisa quando a próxima chave abrir.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-1 sm:w-auto sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={placeholder}
        className={`h-11 w-full rounded px-4 font-sans text-[15px] text-mist outline-none placeholder:text-clay sm:w-[272px] ${inputClass}`}
      />
      <button
        type="submit"
        className="h-11 rounded bg-ember px-8 font-sans text-xs font-semibold tracking-[0.96px] text-ember-ink uppercase shadow-[0_0_8px_rgba(255,86,53,0.35)] sm:px-10"
      >
        {action}
      </button>
    </form>
  );
}
