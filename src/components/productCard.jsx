import React from "react";
import ImageProduct from "./imageProduct";


function ProductCard(){
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
    return(
        <div>
            {/**product imageContainer */}
            <ImageProduct product={product}/>
            {/**product textContainer */}
            <div className="w-full space-y-2 pt-2">
                <h3 className="text-lg">{product.name_product}</h3>
                <div className="flex space-x-6">
                    <p className="text-slate-500 opacity-40 line-through text-bold">R$ {product.regular_price}</p>
                    <p className="text-red-500 text-bold">R$ {product.discount_price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;