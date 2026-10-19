const benefits = [
  "Publique sua competição e cypher em menos de 5 minutos",
  "Gerencie inscrições com check-in digital por QR Code no local",
  "Divulgue premiações oficiais e adicione seus patrocinadores",
  "Controle de chaves e chaveamento automático direto na tela do DJ",
  "Alcance dançarinos verificados de todo o Brasil",
];

export function Organizers() {
  return (
    <section className="bg-ink-2 px-5 py-16 md:px-12">
      <div className="mx-auto grid w-full max-w-[1184px] overflow-hidden rounded-2xl bg-card shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-10 p-8 md:p-16 lg:col-span-7">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.6px] text-peach uppercase">Plataforma para promotores</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.8px] text-mist uppercase sm:text-[40px] sm:leading-[44px]">
              Você organiza
              <br />
              competições?
            </h2>
            <p className="mt-2 font-sans text-[15px] leading-6 text-sand">
              Divulgue seu evento para dançarinos de toda a comunidade urbana do país com gestão profissional de chaves e arrecadação de inscrições.
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-2 font-sans text-[13px] tracking-[0.13px] text-mist">
                  <img src="/images/icon-check.svg" alt="" width={17} height={17} className="size-[17px] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#criar-conta"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-ember px-10 py-4 font-sans text-sm font-bold tracking-[0.84px] text-ember-ink uppercase shadow-[0_0_10px_rgba(255,86,53,0.4)]"
          >
            <img src="/images/icon-plus.svg" alt="" width={17} height={17} className="size-[17px]" />
            Publicar competição
          </a>
        </div>
        <div className="relative min-h-[280px] bg-line lg:col-span-5 lg:min-h-full">
          <img src="/images/organizers.png" alt="Organizador no console durante uma batalha" className="absolute inset-0 h-full w-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card" />
        </div>
      </div>
    </section>
  );
}
