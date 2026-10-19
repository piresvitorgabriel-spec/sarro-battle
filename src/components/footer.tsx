import { SubscribeForm } from "@/components/newsletter";

const columns = [
  {
    title: "Categorias",
    links: ["1v1 Breaking", "Popping Finals", "Hip-Hop Freestyle", "All Styles Crew"],
  },
  {
    title: "Organizadores",
    links: ["Regulamento Oficial", "Submissão de Chaves", "Corpo de Jurados", "Parcerias e Apoio"],
  },
  {
    title: "Links rápidos",
    links: ["Tabela de Classificação", "Manifesto Urbano", "Termos de Uso", "Política de Privacidade"],
  },
];

export function Footer() {
  return (
    <footer id="entrar" className="bg-ink">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-5 py-16 md:px-12">
        <div id="criar-conta" className="flex flex-col items-start justify-between gap-6 rounded-lg bg-ink-3 p-8 shadow-[0px_1px_4px_rgba(0,0,0,0.04)] lg:flex-row lg:items-center lg:p-10">
          <div className="max-w-xl">
            <p className="font-display text-xl leading-[26px] font-semibold text-mist uppercase">Fique por dentro das cyphers</p>
            <p className="font-sans text-[13px] leading-5 tracking-[0.13px] text-sand">
              Receba atualizações imediatas sobre chaves, convocações de jurados e batalhas subterrâneas.
            </p>
          </div>
          <SubscribeForm placeholder="Seu e-mail underground" action="Assinar" inputClass="bg-line uppercase placeholder:text-xs placeholder:tracking-[0.96px]" />
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="" width={57} height={32} className="h-8 w-[57px] object-contain" />
              <span className="font-display text-xl font-semibold text-mist uppercase">Sarro Battle</span>
            </div>
            <p className="mt-4 max-w-xs font-sans text-[13px] leading-5 tracking-[0.13px] text-clay">
              Plataforma definitiva de combate e cyphers da cultura urbana. Do asfalto para a arena digital.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-sans text-sm font-bold tracking-[0.7px] text-mist uppercase">{column.title}</p>
              <ul className="mt-2 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#sobre" className="font-sans text-[13px] tracking-[0.13px] text-sand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="regulamento" className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[10px] font-bold tracking-[1.2px] text-sand uppercase">
            © 2024 Sarro Battle. Todos os direitos reservados. Underground dance culture.
          </p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1 font-sans text-[10px] font-bold tracking-[1.2px] text-mint uppercase">
              <img src="/images/icon-live.svg" alt="" width={12} height={10} className="h-[10px] w-[12px]" />
              Live protocol online
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[1.2px] text-sand uppercase">V 2.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
