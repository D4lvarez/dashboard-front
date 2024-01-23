import type { ReactNode } from "react";

export const NavbarContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className="bg-white border-gray-200 border-b-2 dark:bg-gray-900 dark:text-white h-20 p-4 mr-0 ml-0 w-screen fixed top-0 right-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap justify-between items-center">
          {children}
        </div>
      </nav>
    </>
  );
};
