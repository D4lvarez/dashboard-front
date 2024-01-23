import { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { NavbarContainer } from "@containers/NavBarContainer";
import type { TNavbarItem } from "@typess/components/navbarItem.type";
import { NavbarItem } from "@components/NavbarItem";
import logo from "@assets/logo.png";

const navItems: TNavbarItem[] = [
  { id: 1, name: "Inicio", path: "/" },
  { id: 2, name: "Registro de Usuario", path: "/register" },
  { id: 3, name: "Inicio de Sesión", path: "/login" },
];

export const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <NavbarContainer>
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="mb-4" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <NavbarItem key={item.id} {...item} />
          ))}
        </ul>

        {/* Mobile Icon */}
        <div onClick={handleShow} className="block md:hidden">
          {show ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile */}
        <ul
          className={
            show
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <NavbarItem key={item.id} {...item} />
          ))}
        </ul>
      </NavbarContainer>
    </>
  );
};
