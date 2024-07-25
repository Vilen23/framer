"use client";
import { SiAppletv } from "react-icons/si";
import { Button } from "./button";
import { Container } from "./container";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="relative bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={imageContainerRef}
        className="absolute -top-[--header-height] left-0 w-full h-[200vh] "
      >
        <img
          className="sticky top-0 h-screen object-cover"
          src="/posters/olivia.jpg"
        />
      </motion.div>
      <Container className="relative z-10 pb-7  h-[--hero-height]">
        <motion.div
          className="flex flex-col justify-end items-start h-full"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
        >
          <h1 className="text-5xl font-bold mb-10">
            All Apple Originals. <br />
            Only on Apple TV+
          </h1>
          <Button className="mb-16">Stream now</Button>
          <p className="flex items-center gap-1 font-semibold">
            Watch on <SiAppletv size={24} /> app.
          </p>
        </motion.div>
      </Container>
    </div>
  );
};
