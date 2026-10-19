const rows = [
  {
    pos: "01",
    posClass: "bg-copper text-cream",
    trend: "/images/trend-1.svg",
    initials: "KP",
    initialsClass: "text-peach",
    name: "Kauan Phenix",
    style: "B-boy • Freestyle master",
    region: "São Paulo — SP",
    wins: "12 Vitórias",
    rate: "88%",
    points: "1.850 pts",
    pointsClass: "text-peach",
  },
  {
    pos: "02",
    posClass: "bg-[#39393a] text-mist",
    trend: "/images/trend-2.svg",
    initials: "MF",
    initialsClass: "text-amber",
    name: "Maya Flame",
    style: "B-girl • Popping specialist",
    region: "Rio de Janeiro — RJ",
    wins: "10 Vitórias",
    rate: "82%",
    points: "1.620 pts",
    pointsClass: "text-amber",
  },
  {
    pos: "03",
    posClass: "bg-line text-sand",
    trend: "/images/trend-3.svg",
    initials: "SF",
    initialsClass: "text-clay",
    name: "Storm Flow",
    style: "Dançarino solo • All styles",
    region: "Belo Horizonte — MG",
    wins: "9 Vitórias",
    rate: "79%",
    points: "1.510 pts",
    pointsClass: "text-mist",
  },
  {
    pos: "04",
    posClass: "bg-card text-clay",
    trend: "",
    initials: "CK",
    initialsClass: "text-clay",
    name: "Cypher King Lucas",
    style: "Locking / Breaking",
    region: "Curitiba — PR",
    wins: "8 Vitórias",
    rate: "74%",
    points: "1.340 pts",
    pointsClass: "text-mist",
  },
];

export function Ranking() {
  return (
    <section id="ranking" className="scroll-mt-20 bg-ink-3 py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 md:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.6px] text-peach uppercase">Quadro oficial de pontos</p>
            <h2 className="pt-1 font-display text-3xl font-bold tracking-[-0.8px] text-mist uppercase sm:text-[40px] sm:leading-[44px]">
              Quem está dominando a pista?
            </h2>
            <p className="font-sans text-[15px] leading-6 text-sand">
              Ranking unificado baseado em vitórias, participações e votos técnicos dos jurados.
            </p>
          </div>
          <a href="#ranking" className="inline-flex w-fit items-center gap-1 rounded bg-card px-4 py-2 font-sans text-xs font-semibold tracking-[0.96px] text-mist uppercase">
            Ver ranking completo
            <img src="/images/icon-external.svg" alt="" width={12} height={12} className="size-3" />
          </a>
        </div>

        <div className="overflow-hidden rounded-lg bg-card shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead className="bg-line">
                <tr className="font-sans text-[10px] font-bold tracking-[0.5px] text-clay uppercase">
                  <th className="px-6 py-4 font-bold">Posição</th>
                  <th className="px-6 py-4 font-bold">Dançarino / handle</th>
                  <th className="px-6 py-4 font-bold">Região</th>
                  <th className="px-6 py-4 text-center font-bold">Vitórias</th>
                  <th className="px-6 py-4 text-center font-bold">Win rate</th>
                  <th className="px-6 py-4 text-right font-bold">Pontos totais</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.pos} className="border-t border-chip">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className={`flex size-8 items-center justify-center rounded-xl font-sans text-xs font-bold tracking-[0.96px] ${row.posClass}`}>
                          {row.pos}
                        </span>
                        {row.trend ? <img src={row.trend} alt="" width={8} height={17} className="h-[17px] w-[8px]" /> : null}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`flex size-8 items-center justify-center rounded-xl bg-line font-display text-xl font-bold ${row.initialsClass}`}>
                          {row.initials}
                        </span>
                        <span>
                          <span className="block font-display text-xl leading-[26px] font-semibold text-mist">{row.name}</span>
                          <span className="block font-sans text-[10px] tracking-[1.2px] text-clay uppercase">{row.style}</span>
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-sans text-[13px] tracking-[0.13px] text-sand uppercase">{row.region}</td>
                    <td className="px-6 py-4 text-center font-sans text-[13px] font-bold tracking-[0.13px] text-mist">{row.wins}</td>
                    <td className="px-6 py-4 text-center font-sans text-[13px] font-bold tracking-[0.13px] text-mint">{row.rate}</td>
                    <td className={`px-6 py-4 text-right font-display text-xl font-semibold ${row.pointsClass}`}>{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
