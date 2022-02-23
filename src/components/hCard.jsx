import React from "react";

function HCard() {
  return (
    <div className="flex">
      <div className="space-y-2 w-1/2 bg-primary  h-auto md:h-full py-4 px-6 text-white flex flex-col justify-center">
        <p>Os methores productos para sua rotina de</p>
        <h3 className="text-xl font-bold">skin care</h3>
        <button className="py-2 px-4 text-sm text-primary dark:text-white bg-white dark:bg-primary">
          Compre agora
        </button>
      </div>
      <div className="w-1/2">
        <img
          alt="rr"
          className="object-cover h-full"
          src="https://picsum.photos/1200/1200"
        />
      </div>
    </div>
  );
}
export default HCard;
