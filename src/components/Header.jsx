import { useState } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../constants/index.js";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiX } from "react-icons/bi";

const NavItems = ({ onClick }) => (
  <ul className="nav-ul group">
    {navLinks.map(({ id, to, name }) => (
      <li key={id} className="nav-li">
        <Link
          to={to}
          smooth={true}
          className="cursor-pointer"
          duration={500}
          onClick={onClick}
        >
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-black border-b border-dashed border-light-gray">
      <div className="py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-600 font-bold text-xl">
              Tomso
            </a>
            <nav className="lg:flex hidden">
              <NavItems />
            </nav>
            <button
              onClick={toggleMenu}
              className="lg:invisible flex"
              alt="Toggle menu"
            >
              {isOpen ? (
                <BiX className="h-6 w-6 text-white" />
              ) : (
                <HiOutlineMenuAlt3 className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
            <nav className="p-5">
              <NavItems onClick={closeMenu} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
