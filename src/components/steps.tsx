const steps = [
  {
    number: "01",
    icon: "/images/icon-step-find.svg",
    iconClass: "h-[23px] w-6",
    title: "Encontre",
    body: "Encontre uma competição perto de você através do nosso mapa dinâmico, filtros regionais e nível de premiação.",
    meta: "Busca georreferenciada",
  },
  {
    number: "02",
    icon: "/images/icon-step-sign.svg",
    iconClass: "h-[19px] w-[21px]",
    title: "Inscreva-se",
    body: "Escolha sua categoria preferida, confirme os dados da sua dupla ou equipe e garanta sua vaga com segurança instantânea.",
    meta: "Vaga garantida por escrow",
  },
  {
    number: "03",
    icon: "/images/icon-step-prep.svg",
    iconClass: "h-[24px] w-[21px]",
    title: "Prepare-se",
    body: "Confira horários de check-in, chaveamento inicial de confrontos, jurados confirmados e o regulamento em tempo real.",
    meta: "Dashboard do dançarino",
  },
  {
    number: "04",
    icon: "/images/icon-step-battle.svg",
    iconClass: "size-[21px]",
    title: "Batalhe",
    body: "Entre na pista quando seu número for chamado, solte sua autenticidade e conquiste as pontuações do corpo de jurados.",
    meta: "Pontuação para o ranking",
  },
];

export function Steps() {
  return (
    <section id="como-participar" className="scroll-mt-20 bg-ink-3 py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-5 md:px-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.6px] text-peach uppercase">Circuito sem fricção</p>
          <h2 className="pt-1 font-display text-3xl font-bold tracking-[-0.8px] text-mist uppercase sm:text-[40px] sm:leading-[44px]">
            Participar é simples.
          </h2>
          <p className="font-sans text-[15px] leading-6 text-sand">
            Do cadastro digital até os holofotes da cypher em apenas quatro etapas claras.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="flex flex-col justify-between rounded-lg bg-card p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-[40px] leading-[44px] font-extrabold tracking-[-0.8px] text-ember">{step.number}</span>
                  <img src={step.icon} alt="" className={step.iconClass} />
                </div>
                <h3 className="pt-4 font-display text-xl leading-[26px] font-semibold text-mist uppercase">{step.title}</h3>
                <p className="font-sans text-[13px] leading-5 tracking-[0.13px] text-sand">{step.body}</p>
              </div>
              <p className="pt-6 font-sans text-[10px] font-bold tracking-[0.5px] text-clay uppercase">{step.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
