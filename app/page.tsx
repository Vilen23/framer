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
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
      </main>
    </>
  );
}
