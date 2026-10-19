export type BadgeTone = "open" | "last" | "draw";
export type Timeframe = "today" | "week" | "month" | "later";

export type Competition = {
  id: string;
  image: string;
  badge: string;
  badgeTone: BadgeTone;
  when: string;
  date: string;
  category: string;
  categoryKey: string;
  place: string;
  city: string;
  title: string;
  description: string;
  prize: string;
  spots: string;
  fill: number;
  fillLabel: string;
  fillClass: string;
  price: string;
  priceSuffix?: string;
  timeframe: Timeframe;
  status: string;
};

export const competitions: Competition[] = [
  {
    id: "sp",
    image: "/images/card-sp.png",
    badge: "Inscrições abertas",
    badgeTone: "open",
    when: "18 NOV • 19:00",
    date: "2026-11-18",
    category: "1x1 Freestyle",
    categoryKey: "1x1",
    place: "SP — Arena Central",
    city: "São Paulo",
    title: "Sarro Battle SP",
    description: "A etapa de abertura paulistana do circuito. Os 64 melhores dançarinos…",
    prize: "R$ 5.000",
    spots: "Vagas: 32 / 64",
    fill: 50,
    fillLabel: "50% preenchido",
    fillClass: "bg-ember",
    price: "R$ 35",
    timeframe: "later",
    status: "Inscrições abertas",
  },
  {
    id: "rio",
    image: "/images/card-rio.png",
    badge: "Últimas vagas",
    badgeTone: "last",
    when: "28 NOV • 20:00",
    date: "2026-11-28",
    category: "2x2 Duplas",
    categoryKey: "2x2",
    place: "Rio — Fundição Urbana",
    city: "Rio de Janeiro",
    title: "Cypher Carioca Masters",
    description: "Confronto rítmico em duplas no coração da Lapa. Sincronia pura,…",
    prize: "R$ 8.000",
    spots: "Vagas: 18 / 32 duplas",
    fill: 56,
    fillLabel: "56% preenchido",
    fillClass: "bg-copper",
    price: "R$ 60",
    priceSuffix: "/dup",
    timeframe: "later",
    status: "Últimas vagas",
  },
  {
    id: "bh",
    image: "/images/card-bh.png",
    badge: "Inscrições abertas",
    badgeTone: "open",
    when: "05 DEZ • 18:00",
    date: "2026-12-05",
    category: "Crew 5x5",
    categoryKey: "crew",
    place: "BH — Galpão 104",
    city: "Belo Horizonte",
    title: "Sarro Underground BH",
    description: "A maior guerra de grupos de Minas Gerais. Batalha de crews com rotinas…",
    prize: "R$ 12.000",
    spots: "Vagas: 12 / 16 equipes",
    fill: 75,
    fillLabel: "75% preenchido",
    fillClass: "bg-ember",
    price: "R$ 150",
    priceSuffix: "/crew",
    timeframe: "later",
    status: "Inscrições abertas",
  },
  {
    id: "sul",
    image: "/images/card-sul.png",
    badge: "Retirada de senhas",
    badgeTone: "draw",
    when: "12 DEZ • 16:00",
    date: "2026-12-12",
    category: "1x1 & Kids",
    categoryKey: "kids",
    place: "Curitiba — Teatro Ópera",
    city: "Curitiba",
    title: "Sul Battle Royale",
    description: "Confronto interestadual do Sul com chave aberta e chave juvenil especial",
    prize: "R$ 6.500",
    spots: "Vagas: 48 / 64",
    fill: 75,
    fillLabel: "75% preenchido",
    fillClass: "bg-peach",
    price: "R$ 40",
    timeframe: "later",
    status: "Retirada de senhas",
  },
];

export const cities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"];
export const categories = [
  { key: "1x1", label: "1x1 Freestyle" },
  { key: "2x2", label: "2x2 Duplas" },
  { key: "crew", label: "Crew 5x5" },
  { key: "kids", label: "Kids" },
];
export const statuses = ["Inscrições abertas", "Últimas vagas", "Retirada de senhas"];
