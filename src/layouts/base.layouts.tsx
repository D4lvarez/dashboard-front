import type { ReactNode } from "react";
import { Navbar } from "@components/Navbar";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
