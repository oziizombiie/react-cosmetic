import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import TopBar from "./components/topbar";
import HomePage from "./views/homePage";
import GridProductPage from "./views/gridProductPage";
import ProductPage from "./views/productPage";
import Footer from "./components/footer";
import NotFoundPage from './components/notFound';


function App() {
  return (
    <div>
      <TopBar />
      <header className="w-full sticky top-0 z-20">
        <NavBar />
      </header>
      <main className="space-y-6 md:w-10/12 md:mx-auto">
        <Routes>
          <Route exact path="/" element= {<HomePage/>} />
          <Route path="/category/:slug" element= {<GridProductPage/>} />
          <Route path="/product/:slug" element= {<ProductPage/>} />
          <Route path="*" element= {<NotFoundPage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
