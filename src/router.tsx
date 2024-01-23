import { HomePage } from "@pages/HomePage";
import { RegisterPage } from "@pages/RegisterPage";

export const routes = {
  "/": () => <HomePage />,
  "/register": () => <RegisterPage />,
};
