import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Usps } from "@/components/usps";
import { VideoCarousel } from "@/components/video-carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
        <Hero />
        <Usps/>
        </div>
        <VideoCarousel/>
        <div className="h-[300vh]"></div>
      </main>
    </>
  );
}
