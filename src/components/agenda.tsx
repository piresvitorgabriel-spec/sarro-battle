"use client";

import { useMemo, useState } from "react";
import { categories, cities, competitions, statuses, type BadgeTone, type Competition } from "@/lib/events";

const badgeClass: Record<BadgeTone, string> = {
  open: "bg-ember text-ember-ink",
  last: "bg-copper text-cream",
  draw: "bg-[#39393a] text-mist",
};

const chips = [
  { id: "all", label: "Todos os eventos" },
  { id: "today", label: "Hoje" },
  { id: "week", label: "Esta semana" },
  { id: "month", label: "Este mês" },
  { id: "open", label: "Inscrições abertas" },
] as const;

type ChipId = (typeof chips)[number]["id"];

function inRange(date: string, chip: ChipId) {
  if (chip === "all" || chip === "open") return true;
  const event = new Date(`${date}T12:00:00`);
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (chip === "today") {
    return event.toDateString() === start.toDateString();
  }
  if (chip === "week") {
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    return event >= start && event < end;
  }
  return event.getMonth() === start.getMonth() && event.getFullYear() === start.getFullYear();
}

export function Agenda() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [chip, setChip] = useState<ChipId>("all");
  const [sort, setSort] = useState<"relevance" | "date" | "prize">("relevance");

  const results = useMemo(() => {
    const text = query.trim().toLowerCase();
    const filtered = competitions.filter((event) => {
      const matchesText =
        !text ||
        event.title.toLowerCase().includes(text) ||
        event.city.toLowerCase().includes(text) ||
        event.place.toLowerCase().includes(text);
      const matchesCity = !city || event.city === city;
      const matchesCategory = !category || event.categoryKey === category;
      const matchesStatus = !status || event.status === status;
      const matchesChip = chip === "open" ? event.status === "Inscrições abertas" : inRange(event.date, chip);
      return matchesText && matchesCity && matchesCategory && matchesStatus && matchesChip;
    });

    if (sort === "date") {
      return [...filtered].sort((a, b) => a.date.localeCompare(b.date));
    }
    if (sort === "prize") {
      const amount = (value: string) => Number(value.replace(/\D/g, ""));
      return [...filtered].sort((a, b) => amount(b.prize) - amount(a.prize));
    }
    return filtered;
  }, [category, chip, city, query, sort, status]);

  return (
    <>
      <section className="bg-ink-3 py-10">
        <form
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-5 md:px-12"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-2 rounded-lg bg-card p-2 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] lg:grid-cols-12">
            <label className="flex h-10 items-center rounded bg-ink px-4 lg:col-span-4">
              <img src="/images/icon-search.svg" alt="" width={18} height={18} className="mr-2 h-[18px] w-[18px]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar competição ou cidade..."
                className="w-full bg-transparent font-sans text-[15px] text-mist outline-none placeholder:text-clay"
              />
            </label>
            <FilterSelect
              icon="/images/icon-pin.svg"
              label="Localização"
              value={city}
              onChange={setCity}
              options={cities.map((item) => ({ value: item, label: item }))}
            />
            <FilterSelect
              icon="/images/icon-category.svg"
              label="Categoria"
              value={category}
              onChange={setCategory}
              options={categories.map((item) => ({ value: item.key, label: item.label }))}
            />
            <FilterSelect
              icon="/images/icon-status.svg"
              label="Status"
              value={status}
              onChange={setStatus}
              options={statuses.map((item) => ({ value: item, label: item }))}
            />
            <button
              type="submit"
              className="flex h-10 items-center justify-center gap-1 rounded bg-ember font-sans text-xs font-semibold tracking-[0.96px] text-ember-ink uppercase shadow-[0_0_6px_rgba(255,86,53,0.3)] lg:col-span-2"
            >
              <img src="/images/icon-filter.svg" alt="" width={14} height={14} className="size-[13.5px]" />
              Filtrar
            </button>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1">
            <span className="pr-1 font-sans text-[10px] font-bold tracking-[1.2px] text-clay uppercase">Atalhos:</span>
            {chips.map((item) => {
              const active = chip === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setChip(item.id)}
                  className={`flex shrink-0 items-center gap-1 rounded-xl px-4 py-1 font-sans text-xs font-semibold tracking-[0.96px] uppercase ${
                    active
                      ? "bg-ember text-ember-ink shadow-[0_0_6px_rgba(255,86,53,0.35)]"
                      : item.id === "open"
                        ? "bg-chip text-peach"
                        : "bg-chip text-mist"
                  }`}
                >
                  {item.id === "open" && !active ? <span className="size-1.5 rounded-xl bg-peach" /> : null}
                  {item.label}
                </button>
              );
            })}
          </div>
        </form>
      </section>

      <section id="competicoes" className="scroll-mt-20 bg-ink-2 py-16">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 md:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.6px] text-peach uppercase">Agenda oficial</p>
              <h2 className="pt-1 font-display text-3xl font-bold tracking-[-0.8px] text-mist uppercase sm:text-[40px] sm:leading-[44px]">
                Próximas competições
              </h2>
              <p className="font-sans text-[15px] leading-6 text-sand">
                Escolha sua próxima batalha e garanta sua inscrição nas chaves.
              </p>
            </div>
            <label className="flex items-center gap-2 font-sans text-[10px] font-bold tracking-[1.2px] text-clay uppercase">
              Ordenação:
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as typeof sort)}
                className="bg-transparent text-clay outline-none"
              >
                <option value="relevance">Relevância</option>
                <option value="date">Data</option>
                <option value="prize">Premiação</option>
              </select>
              <img src="/images/icon-sort.svg" alt="" width={18} height={12} className="h-3 w-[18px]" />
            </label>
          </div>

          {results.length === 0 ? (
            <p className="rounded-lg bg-card px-6 py-10 text-center font-sans text-sm text-sand">
              Nenhuma competição encontrada com esses filtros. Limpe a busca ou escolha outro atalho.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {results.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterSelect({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="relative flex h-10 items-center rounded bg-ink px-4 lg:col-span-2">
      <img src={icon} alt="" className="mr-1 h-[15px] w-4 shrink-0" />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none bg-transparent pr-4 font-sans text-xs font-semibold tracking-[0.96px] text-mist uppercase outline-none"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function EventCard({ event }: { event: Competition }) {
  return (
    <article id={`evento-${event.id}`} className="flex scroll-mt-24 flex-col overflow-hidden rounded-lg bg-card shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className="relative h-48 overflow-hidden bg-line">
        <img src={event.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span className={`absolute top-2 left-2 rounded-xl px-2 py-1 font-sans text-[10px] font-bold tracking-[1.2px] uppercase ${badgeClass[event.badgeTone]}`}>
          {event.badge}
        </span>
        <span className="absolute top-2 right-2 rounded bg-[rgba(14,14,15,0.8)] px-2 py-1 font-sans text-[10px] font-bold tracking-[1.2px] text-mist backdrop-blur-[6px]">
          {event.when}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
        <div>
          <div className="flex items-start justify-between gap-2 font-sans text-[10px] font-bold tracking-[1.2px] text-clay uppercase">
            <span>{event.category}</span>
            <span className="text-right">{event.place}</span>
          </div>
          <h3 className="mt-1 font-display text-xl leading-[26px] font-semibold text-mist uppercase">{event.title}</h3>
          <p className="mt-1 line-clamp-2 font-sans text-[13px] leading-5 tracking-[0.13px] text-sand">{event.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between font-sans text-xs tracking-[0.96px]">
            <span className="font-semibold text-clay">Premiação</span>
            <span className="font-bold text-mint">{event.prize}</span>
          </div>
          <div>
            <div className="mb-1 flex justify-between font-sans text-[10px] font-bold tracking-[1.2px]">
              <span className="text-clay">{event.spots}</span>
              <span className="text-peach">{event.fillLabel}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-xl bg-line">
              <div className={`h-full rounded-xl ${event.fillClass}`} style={{ width: `${event.fill}%` }} />
            </div>
          </div>
          <div className="flex items-center justify-between pt-1">
            <p className="font-display text-xl leading-[26px] font-semibold text-mist">
              {event.price}
              {event.priceSuffix ? <span className="ml-1 font-sans text-[13px] font-normal text-clay">{event.priceSuffix}</span> : null}
            </p>
            <a href={`#evento-${event.id}`} className="rounded bg-chip px-4 py-1 font-sans text-xs font-semibold tracking-[0.96px] text-mist uppercase">
              Ver competição
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
