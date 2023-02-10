import Head from 'next/head'
import {Header} from "@/components/molecules/Header/Header";
import {Hero} from "@/components/organisms/Hero/Hero";
import {Portfolio} from "@/components/organisms/Portfolio/Portfolio";
import {About} from "@/components/organisms/About/About";
import {Feedback} from "@/components/organisms/Feedback/Feedback";
import {Footer} from "@/components/molecules/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Маркетинговое агентство Drozzi</title>
        <meta name="description" content="Drozzi - Маркетинговое агентство. С нами вы растете как на дрожжах" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Portfolio />
        <About />
        <Feedback />
      </main>

      <Footer />
    </>
  )
}
