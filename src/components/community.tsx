export function Community() {
  return (
    <section className="bg-ink-3 py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.6px] text-peach uppercase">Manifesto das ruas</p>
          <h2 className="pt-1 font-display text-3xl font-bold tracking-[-0.8px] text-mist uppercase sm:text-[40px] sm:leading-[44px]">
            Mais que uma competição.
            <br />
            Uma comunidade.
          </h2>
          <p className="font-sans text-[15px] leading-6 text-sand">
            O Sarro nasce no asfalto, ganha ritmo na batida e encontra família nas rodas de batalha.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <figure className="relative h-72 overflow-hidden rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] md:col-span-2">
            <img src="/images/mosaic-1.png" alt="Roda de batalha lotada" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <figcaption className="absolute right-4 bottom-4 left-4">
              <p className="font-display text-xl leading-[26px] font-semibold text-mist uppercase">&quot;Encontre sua próxima batalha.&quot;</p>
              <p className="font-sans text-[13px] tracking-[0.13px] text-clay">A cada fim de semana, uma nova pista aguarda seus passos.</p>
            </figcaption>
          </figure>
          <figure className="relative h-72 overflow-hidden rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <img src="/images/mosaic-2.png" alt="Dois dançarinos se cumprimentando" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <figcaption className="absolute right-4 bottom-4 left-4 font-display text-xl leading-[26px] font-semibold text-mist uppercase">
              &quot;Conheça
              <br />
              dançarinos.&quot;
            </figcaption>
          </figure>
          <figure className="relative h-72 overflow-hidden rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <img src="/images/mosaic-3.png" alt="DJ na cabine da batalha" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <figcaption className="absolute right-4 bottom-4 left-4 font-display text-xl leading-[26px] font-semibold text-mist uppercase">
              &quot;Faça parte da cena.&quot;
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
