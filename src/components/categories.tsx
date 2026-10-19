const modes = [
  {
    icon: "/images/icon-solo.svg",
    iconClass: "size-4",
    kicker: "Solo cypher",
    kickerClass: "text-peach",
    title: "1x1",
    quote: '"Mostre seu estilo."',
    body: "Freestyle puro sem roteiro prévio. O dançarino enfrenta o adversário com musicalidade instantânea, técnica de resposta e firmeza de palco.",
    meta: "2 rounds de 45s",
  },
  {
    icon: "/images/icon-duet.svg",
    iconClass: "h-4 w-[22px]",
    kicker: "Duet cypher",
    kickerClass: "text-amber",
    title: "2x2",
    quote: '"Duplique a energia."',
    body: "Sincronia afinada, combos de transição rápida e dinâmicas de assistência em tempo real para superar a dupla oponente na pista.",
    meta: "3 rounds alternados",
  },
  {
    icon: "/images/icon-crew.svg",
    iconClass: "h-3 w-6",
    kicker: "Team battle",
    kickerClass: "text-mint",
    title: "Crew (5x5)",
    quote: '"Uma equipe. Um movimento."',
    body: "Táticas coletivas, coreografias ensaiadas e solos surpresa combinados. A vitória exige estratégia cirúrgica de escalação de membros.",
    meta: "10 min de batalha contínua",
  },
  {
    icon: "/images/icon-kids.svg",
    iconClass: "size-[18px]",
    kicker: "Next gen",
    kickerClass: "text-blush",
    title: "Kids",
    quote: '"A nova geração do Sarro."',
    body: "Competição dedicada a prodígios de até 15 anos. Espaço de revelação com mentoria técnica e arbitragem pedagógica construtiva.",
    meta: "Até 15 anos • chave simplificada",
  },
];

export function Categories() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-ink-2 py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 md:px-12">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold tracking-[0.6px] text-peach uppercase">Modalidades de duelo</p>
          <h2 className="pt-1 font-display text-3xl font-bold tracking-[-0.8px] text-mist uppercase sm:text-[40px] sm:leading-[44px]">
            Escolha sua batalha
          </h2>
          <p className="font-sans text-[15px] leading-6 text-sand">
            Cada modalidade exige um conjunto único de habilidades, reflexos e atitude perante a roda.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {modes.map((mode) => (
            <article key={mode.title} className="flex flex-col justify-between rounded-lg bg-card p-6 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <div>
                <span className="flex size-12 items-center justify-center rounded bg-line">
                  <img src={mode.icon} alt="" className={mode.iconClass} />
                </span>
                <p className={`mt-4 font-sans text-[10px] font-bold tracking-[1px] uppercase ${mode.kickerClass}`}>{mode.kicker}</p>
                <h3 className="font-display text-[28px] leading-[34px] font-bold tracking-[-0.28px] text-mist uppercase">{mode.title}</h3>
                <p className="mt-1 font-sans text-[13px] leading-5 tracking-[0.13px] text-amber">{mode.quote}</p>
                <p className="mt-2 font-sans text-[13px] leading-5 tracking-[0.13px] text-clay">{mode.body}</p>
              </div>
              <div className="mt-6 flex items-center justify-between pt-6">
                <span className="font-sans text-[10px] font-bold tracking-[1.2px] text-clay uppercase">{mode.meta}</span>
                <img src="/images/icon-arrow.svg" alt="" width={16} height={16} className="size-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
