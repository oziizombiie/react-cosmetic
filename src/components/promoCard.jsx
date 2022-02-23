import React from "react";

function PromoCard() {
  return (
    <div className="w-full h-96 md:h-auto relative">
      <div className="w-1/2 h-auto bg-opacity-80 space-y-4 p-6 md:ml-8 bg-primary text-white">
        <p>Compre maquiagem com até</p>
        <b className="text-xl">30% de desconto</b>
        <p>e ganhe brindes incríves em compras acima de R$100!</p>
        <button className="py-2 px-4 text-sm text-primary dark:text-white bg-white dark:bg-primary">
          Compre agora
        </button>
      </div>
      <img
        alt="some"
        src="https://picsum.photos/1080/1080"
        className="object-cover h-full w-full absolute top-0 -z-10"
      />
    </div>
  );
}

export default PromoCard;
