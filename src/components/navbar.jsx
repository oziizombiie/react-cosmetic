import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex flex-row flex-wrap w-full bg-white justify-between mt-2 md:mt-4">
      <div className="w-full flex flex-row py-2">
        <div className="w-full flex flex-row md:w-10/12 md:mx-auto items-center px-4">
          <div className="w-1/6 md:hidden">
            <FontAwesomeIcon
              className="dark:text-white text-2xl"
              icon={faBars}
            />
          </div>
          <div className="w-3/6">
          <Link to={'/'}>
            <img className="object-fill w-auto h-[75px]" src="https://teprogramo.com/wp-content/uploads/2022/02/logoTeprogramo-removebg-preview.png" alt="Logo"/>
            </Link>
          </div>
          <div className="w-2/6 md:w-3/6 flex justify-between">
            <div>
              <FontAwesomeIcon
                className="text-xl dark:text-white "
                icon={faSearch}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="text-xl dark:text-white "
                icon={faUser}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="text-xl dark:text-white "
                icon={faCartShopping}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden md:flex md:flex-row md:border-gray-700 md:border-opacity-20 md:border-t-[1px] md:border-b-[1px]">
        <div className="submenu-container w-full md:w-10/12 md:mx-auto p-2">
          <ul className="flex flex-row justify-between">
            <li>Perfumaria</li>
            <li>Cabelos</li>
            <li>Pele</li>
            <li>Lábios</li>
            <li>Olhos</li>
            <li>Sobrancelhas</li>
            <li>Corpo e Banho</li>
            <li>Kits e Presents</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
