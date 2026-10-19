import { Agenda } from "@/components/agenda";
import { Categories } from "@/components/categories";
import { Community } from "@/components/community";
import { Featured } from "@/components/featured";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Organizers } from "@/components/organizers";
import { Ranking } from "@/components/ranking";
import { Stats } from "@/components/stats";
import { Steps } from "@/components/steps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Agenda />
        <Featured />
        <Categories />
        <Steps />
        <Stats />
        <Ranking />
        <Organizers />
        <Community />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
