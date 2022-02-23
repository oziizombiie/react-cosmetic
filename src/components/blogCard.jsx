import React from "react";

function BlogCard() {
  return (
    <div className="flex-none w-56 md:w-96 h-96">
      <div className="w-full h-2/3 relative">
        {/**product imageContainer */}
        <img
          alt="something"
          className="object-cover h-full w-full "
          src="https://picsum.photos/450"
        />
        <div className="absolute bottom-4 right-2">
          {/*<!--- brand -->*/}
          <div className="text-sm py-1 px-2 text-primary bg-white ">
            Promocoes
          </div>
        </div>
        {/**product textContainer */}
        <div className="w-full space-y-2 pt-2">
          <p className="text-sm text-primary">16/04/2021</p>
          <h3>Base líquida Alina 30ml</h3>
          <hr className="w-1/3"></hr>
          <p className="text-sm text-bold">continue lendo &gt; </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
