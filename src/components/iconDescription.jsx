import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCab } from "@fortawesome/free-solid-svg-icons";

function IconDescription() {
  return (
      <div className="flex w-52 md:w-full">
        <FontAwesomeIcon className="p-4 text-xl dark:text-white" icon={faCab} />
        <div className="flex flex-col">
          <h3 className="font-bold text-xl">Compre Online</h3>
          <p>e receba em até 48 horas</p>
        </div>
      </div>
  );
}

export default IconDescription;
