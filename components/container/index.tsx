import { cn } from "@/lib/utils";
import React from "react";
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[1440px] mx-auto flex flex-col justify-center px-4 main:px-[120px] relative",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
