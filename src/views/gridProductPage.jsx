import React from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../components/breadcrumbs";
import HCard from "../components/hCard";
import ProductCard from "../components/productCard";
import PromoCard from "../components/promoCard";

function GridProductPage() {
  let params = useParams();
  return (
    <div className="my-4 p-4">
      <BreadCrumbs></BreadCrumbs>
      <h2 className="text-2xl my-3">{params.slug}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-content-stretch">
        <div className="">
          <Link to={"/product/something"}>
            <ProductCard></ProductCard>
          </Link>
        </div>
        <div className="">
          <Link to={"/product/something"}>
            <ProductCard></ProductCard>
          </Link>
        </div>
        <div className="">
          <Link to={"/product/something"}>
            <ProductCard></ProductCard>
          </Link>
        </div>
        <div className="">
          <Link to={"/product/something"}>
            <ProductCard></ProductCard>
          </Link>
        </div>
        <div className="">
          <Link to={"/product/something"}>
            <ProductCard></ProductCard>
          </Link>
        </div>
      </div>
      {/** Section Horizontal cards */}
      <section className="w-full space-y-4 relative">
        <div className="flex flex-col md:flex-row h-full md:h-auto space-y-6 md:space-y-0 md:space-x-4">
          <div className="flex flex-col space-y-6">
            <HCard />
            <HCard />
          </div>
          <PromoCard />
        </div>
      </section>
    </div>
  );
}

export default GridProductPage;
