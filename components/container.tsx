import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge("max-w-[980px] mx-auto px-6", className)}>
      {children}
    </div>
  );
};
