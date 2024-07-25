import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
}

export const Button = ({
  children,
  size = "medium",
  className,
}: ButtonProps) => {
  const sizeClassName = {
    small: "px-2 py-1 text-xs",
    medium: "px-5 py-3 text-sm",
    large: "px-8 py-4 text-lg",
  };
  return (
    <button
      className={twMerge(
        "text-text bg-white px-3 py-1 rounded-full",
        sizeClassName[size],
        className
      )}
    >
      {children}
    </button>
  );
};
