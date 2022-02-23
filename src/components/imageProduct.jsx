import React from "react";

function ImageProduct({ product }) {
  return (
    product && (
        <div className="relative">
          <img
            className="object-cover w-full h-48"
            alt="ss"
            src={product.img_product}
          />
          <div className="absolute space-y-2 top-0 right-0">
            {/*<!--- brand -->*/}
            <div className="py-2 px-4 text-white bg-primary text-bold">
              {product.category}
            </div>
            <div className="py-2 px-4 text-white bg-primary text-bold">
              {product.discount}%
            </div>
          </div>
        </div>
    )
  );
}

export default ImageProduct;
