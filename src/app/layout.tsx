import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sarro Battle — Onde o sarro vira competição",
  description:
    "Descubra batalhas, competições e eventos de Sarro perto de você. O circuito oficial que consagra os mestres da pista urbana.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${space.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink text-mist">{children}</body>
    </html>
  );
}
