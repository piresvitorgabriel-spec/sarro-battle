const numbers = [
  { label: "Maior premiação única", value: "R$\n20k", note: "Distribuído na final nacional", valueClass: "text-peach" },
  { label: "Média por edição master", value: "R$\n10k", note: "Por circuito regional homologado", valueClass: "text-amber" },
  { label: "Cyphers realizadas", value: "+50", note: "Em mais de 12 capitais brasileiras", valueClass: "text-mint" },
  { label: "Comunidade ativa", value: "+2.000", note: "Dançarinos cadastrados no sistema", valueClass: "text-mist" },
];

export function Stats() {
  return (
    <section className="bg-ink-2 py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-5 md:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.6px] text-peach uppercase">Métricas transparentes</p>
            <h2 className="pt-1 font-display text-3xl font-bold tracking-[-0.8px] text-mist uppercase sm:text-[40px] sm:leading-[44px]">
              Grandes batalhas. Grandes
              <br />
              prêmios.
            </h2>
            <p className="font-sans text-[15px] leading-6 text-sand">
              Valorizamos o talento das ruas através de premiações dignas e auditoria pública de pontuações.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-1 rounded-xl bg-card px-4 py-1">
            <img src="/images/icon-shield.svg" alt="" width={12} height={15} className="h-[15px] w-3" />
            <span className="font-sans text-[10px] leading-3 font-bold tracking-[1.2px] text-sand uppercase">
              Premiações via escrow
              <br />
              oficial
            </span>
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {numbers.map((item) => (
            <article key={item.label} className="rounded-lg bg-card p-8 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] sm:p-10">
              <p className="font-sans text-[10px] font-bold tracking-[0.5px] text-clay uppercase">{item.label}</p>
              <p className={`pt-4 font-display text-5xl leading-[0.95] font-extrabold tracking-[-0.04em] whitespace-pre-line xl:text-[72px] xl:leading-[76px] xl:tracking-[-2.88px] ${item.valueClass}`}>
                {item.value}
              </p>
              <p className="pt-4 font-sans text-[13px] leading-5 tracking-[0.13px] text-sand">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
