import React from "react";
import BreadCrumbs from "../components/breadcrumbs";
import ImageProduct from "../components/imageProduct";

function ProductPage() {
  const product = {
    img_product: "https://picsum.photos/1020",
    name_product: "Pintura rupestre 3000",
    sku_product: "0123456",
    category: "novo",
    discount: "30",
    regular_price: "49.90",
    discount_price: "39.90",
    plans_to_pay: "em áte 10x sem juros R$ 3,99",
    description: 
    "Aqui va uma breve description das caracteristicas principais do produto, como suas dimensoes, peso, e cor.",
    extract:
      "Aqui va uma breve description das caracteristicas principais do produto, como suas dimensoes, peso, e cor.",
    variants_colors: [
      {
        color: "#333",
        name: "blue",
      },
      {
        color: "#333",
        name: "blue",
      },
      {
        color: "#333",
        name: "blue",
      },
    ],
    variants_sizes: [
        {
          size: "30 ml",
        },
        {
          size: "30 ml",
        },
        {
          size: "30 ml",
        },
      ],
  };

  return (
    <div className="px-4">
      <BreadCrumbs></BreadCrumbs>
      <div className="w-full m-auto text-center text-sm text-white py-2">
        <ImageProduct product={product}/>
      </div>
    </div>
  );
}

export default ProductPage;
