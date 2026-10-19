export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[720px] items-end overflow-hidden bg-ink lg:min-h-[826px]">
      <img
        src="/images/hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink/80 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 pt-32 pb-16 md:px-12 md:pb-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-[rgba(32,31,32,0.8)] px-4 py-1 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
          <span className="size-2.5 rounded-xl bg-ember" />
          <span className="font-sans text-[10px] font-bold tracking-[1px] text-peach uppercase">
            Temporada nacional 2026
          </span>
        </div>

        <h1 className="max-w-[896px] font-display text-[28px] leading-[0.95] font-extrabold tracking-[-0.04em] text-mist uppercase drop-shadow-[0px_10px_4px_rgba(0,0,0,0.04)] sm:text-5xl lg:text-[72px] lg:leading-[72px] lg:tracking-[-2.88px]">
          Onde o
          <br />
          sarro vira
          <br />
          <span className="bg-gradient-to-r from-ember via-copper to-amber bg-clip-text text-transparent">
            competição.
          </span>
        </h1>

        <p className="mt-4 max-w-[672px] pb-10 font-sans text-base leading-7 tracking-[-0.18px] text-sand sm:text-lg">
          Descubra batalhas, competições e eventos de Sarro perto de você. O circuito oficial que consagra os mestres da pista urbana.
        </p>

        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#competicoes"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-ember px-8 py-4 font-sans text-sm font-bold tracking-[0.84px] text-ember-ink uppercase shadow-[0_0_12px_rgba(255,86,53,0.45)] sm:px-10"
          >
            <img src="/images/icon-bolt.svg" alt="" width={13} height={17} className="h-[16.67px] w-[13.33px]" />
            Encontrar competições
          </a>
          <a
            href="#como-participar"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[rgba(42,42,43,0.6)] px-8 py-4 font-sans text-sm font-bold tracking-[0.84px] text-mist uppercase backdrop-blur-[6px] sm:px-10"
          >
            <img src="/images/icon-help.svg" alt="" width={15} height={15} className="size-[15px]" />
            Como participar
          </a>
        </div>

        <article className="flex w-full max-w-[768px] flex-col gap-6 rounded-lg bg-[rgba(32,31,32,0.9)] p-6 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] backdrop-blur-[12px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded bg-line">
              <img src="/images/icon-flame.svg" alt="" width={19} height={22} className="h-[22px] w-[19px]" />
            </span>
            <div>
              <p className="flex items-center gap-1 font-sans text-[10px] font-bold tracking-[0.5px] text-peach uppercase">
                <span className="size-2 rounded-xl bg-ember" />
                Próximo encontro confirmado
              </p>
              <p className="font-display text-xl leading-[26px] font-semibold text-mist uppercase">
                Sarro Battle SP • Arena Central
              </p>
              <p className="font-sans text-[13px] tracking-[0.13px] text-clay">18 NOV 2026 • São Paulo — SP</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 sm:justify-end">
            <div className="text-right">
              <p className="font-sans text-[10px] font-bold tracking-[1.2px] text-clay uppercase">Premiação total</p>
              <p className="font-display text-xl leading-[26px] font-semibold text-mint">
                R$
                <br />
                5.000,00
              </p>
            </div>
            <a href="#competicoes" className="rounded bg-line px-4 py-2 font-sans text-xs font-semibold tracking-[0.96px] text-mist uppercase">
              Acessar chave
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
