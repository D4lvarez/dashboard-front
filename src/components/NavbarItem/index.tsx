import type { TNavbarItem } from "@typess/components/navbarItem.type";

export const NavbarItem = (item: TNavbarItem) => {
  return (
    <>
      <li
        key={item.id}
        className="p-3 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
      >
        <a href={item.path}>{item.name}</a>
      </li>
    </>
  );
};
