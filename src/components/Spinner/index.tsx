import { PacmanLoader } from "react-spinners";

export const Spinner = () => {
  return (
    <>
      <main className="w-full h-screen flex justify-center items-center">
        <PacmanLoader color="#00df9a" size={80} />
      </main>
    </>
  );
};
