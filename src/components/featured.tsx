export function Featured() {
  return (
    <section className="bg-ink px-5 py-16 md:px-12">
      <div className="relative mx-auto w-full max-w-[1184px] overflow-hidden rounded-2xl bg-card shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <img src="/images/featured.png" alt="" className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="relative flex max-w-3xl flex-col gap-6 p-8 md:p-16">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-xl bg-ember px-4 py-1 font-sans text-[10px] font-bold tracking-[1.2px] text-ember-ink uppercase shadow-[0_0_6px_rgba(255,86,53,0.4)]">
              Evento em destaque nacional
            </span>
            <span className="flex items-center gap-1 font-sans text-[10px] font-bold tracking-[0.5px] text-clay uppercase">
              <span className="size-2 rounded-xl bg-mint" />
              Vagas limitadas — 82% preenchidas
            </span>
          </div>
          <div>
            <p className="font-sans text-xs font-semibold tracking-[1.2px] text-amber uppercase">
              20 de dezembro de 2026 • Rio de Janeiro — RJ
            </p>
            <h2 className="mt-1 font-display text-5xl leading-[0.95] font-extrabold tracking-[-1.8px] text-mist uppercase sm:text-6xl lg:text-[72px] lg:leading-[76px]">
              Sarro
              <br />
              National
              <br />
              Battle
            </h2>
            <p className="mt-1 max-w-xl font-sans text-base leading-7 tracking-[-0.18px] text-sand sm:text-lg">
              O ápice do ano. A arena principal do Parque Olímpico receberá as lendas das 5 regiões do Brasil disputando o cinturão e o legado supremo do Sarro nacional.
            </p>
          </div>
          <div className="grid gap-4 rounded-lg bg-[rgba(28,27,28,0.9)] p-4 backdrop-blur-[6px] sm:grid-cols-3">
            <Stat label="Premiação geral" value={"R$\n20.000"} accent />
            <Stat label="Categorias" value="1x1, 2x2 & Crew" />
            <Stat label="Arena" value="Pq. Olímpico" />
          </div>
          <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center">
            <a
              href="#criar-conta"
              className="rounded-xl bg-ember px-10 py-4 font-sans text-sm font-bold tracking-[0.84px] text-ember-ink uppercase shadow-[0_0_12px_rgba(255,86,53,0.5)]"
            >
              Quero participar
            </a>
            <a href="#regulamento" className="inline-flex items-center gap-1 py-2 font-sans text-xs font-semibold tracking-[0.96px] text-sand uppercase">
              <img src="/images/icon-pdf.svg" alt="" width={12} height={15} className="h-[15px] w-3" />
              Ver regulamento oficial em PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <p className="font-sans text-[10px] font-bold tracking-[1.2px] text-clay uppercase">{label}</p>
      <p className={`font-display whitespace-pre-line uppercase ${accent ? "text-[40px] leading-[44px] font-bold tracking-[-0.8px] text-peach" : "text-xl leading-[26px] font-semibold text-mist"}`}>
        {value}
      </p>
    </div>
  );
}
