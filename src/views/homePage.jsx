import React from "react";
import Hero from "../components/hero";
import IconDescription from "../components/iconDescription";
import ProductCard from "../components/productCard";
import Brand from "../components/brand";
import HCard from "../components/hCard";
import PromoCard from "../components/promoCard";
import BlogCard from "../components/blogCard";

function HomePage() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="flex w-full space-x-12 md:space-x-0 md:justify-between py-4 px-2 carousel shadow-md">
        <div>
          <IconDescription />
        </div>
        <div>
          <IconDescription />
        </div>
        <div>
          <IconDescription />
        </div>
        <div>
          <IconDescription />
        </div>
      </section>
      {/** Section product category slider */}
      <section className="flex flex-col justify-center py-4 space-y-3 text-center">
        <h2 className="text-2xl">Mais vendidos</h2>
        <p className="text-primary mx-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <div className="flex w-full space-x-4 py-4 px-2 text-left carousel">
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
        </div>
      </section>
      {/** Section brand slider */}
      <section className="flex flex-col justify-center py-4 space-y-3 text-center">
        <h2 className="text-2xl">Compre por marcas</h2>
        <div className="flex w-full space-x-4 py-4 px-2 text-left carousel">
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </div>
      </section>
      {/** Section Horizontal cards */}
      <section className="w-full px-2 space-y-4 relative">
        <div className="flex flex-col md:flex-row h-full md:h-auto space-y-6 md:space-y-0 md:space-x-4">
          <div className="flex flex-col space-y-6">
            <HCard />
            <HCard />
          </div>
          <PromoCard />
        </div>
      </section>
      {/** Section Promo Card like magazine */}
      <section className="px-2"></section>
      {/** Section product category slider */}
      <section className="flex flex-col justify-center py-4 space-y-3 text-center">
        <h2 className="text-2xl">Lancamentos do mês</h2>
        <p className="text-primary mx-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <div className="flex w-full space-x-4 py-4 px-2 text-left carousel">
        <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
          <div  className="flex-none w-44 md:w-56 h-2/3">
          <ProductCard />
          </div>
        </div>
      </section>
      {/** Section ads */}
      <section className="py-4">
        <div className="flex justify-center w-full py-4 px-2 ">
          <Brand />
        </div>
      </section>
      {/** Section Blog */}
      <section className="py-4">
        <div className="flex w-full space-x-4 py-4 px-2 carousel">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </>
  );
}

export default HomePage;
