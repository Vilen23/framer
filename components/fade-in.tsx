"use client";
import { motion } from "framer-motion";
interface FadeInProps {
  children: React.ReactNode;
}

export const FadeIn = ({ children }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "100% 0px -300px 0px" }}
    >
      {children}
    </motion.div>
  );
};
