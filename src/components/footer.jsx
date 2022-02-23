import React from "react";
import SocialMediaBar from "./socialMediaBar";

function Footer() {
  return (
    <>
      <footer className="px-2 py-8 bg-primary">
        <div className="md:w-10/12 md:mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/3 space-y-4">
            <img
              className="object-cover w-auto h-[225px]"
              src="https://teprogramo.com/wp-content/uploads/2022/02/logoTeprogramo-removebg-preview.png"
              alt="Logo"
            />
            <p className="text-white"> lorem ipsum sit amet</p>
            <img
              src="https://d11eqtcd4tfmzx.cloudfront.net/pub/media/wysiwyg/smartwave/porto/footer/payments.png"
              alt="lala"
            />
          </div>
          <div className="flex w-full flex-wrap text-white">
            <div className="space-y-6 mb-4 mr-4 md:mr-0 md:w-1/3">
              <h3 className="font-bold">Institucional</h3>
              <ul className="list-none space-y-1">
                <li>Sobre Nós</li>
                <li>Ofertas</li>
                <li>Fale Conosco</li>
                <li>Trabalhe Conosco</li>
                <li>Perguntas Frequentes</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="space-y-6 mr-4 md:mr-0 md:w-1/3">
              <h3 className="font-bold">Ajuda</h3>
              <ul className="list-none space-y-1">
                <li>Politica de Privacidade</li>
                <li>Prazos de Entrega</li>
                <li>Como Comprar</li>
              </ul>
            </div>
            <div className="space-y-6 md:w-1/3">
              <h3 className="font-bold">Central de atendimiento</h3>
              <ul className="list-none space-y-1">
                <li>(11) 3200-1234</li>
                <li>(11) 9900-1234</li>
                <li>email@dominio.com.br</li>
                <li>seg a sex das 9h-12h / 14h-18h </li>
              </ul>
              <SocialMediaBar />
            </div>
          </div>
        </div>
        <div className="w-10/12 my-6 md:mx-auto">
          <hr className="opacity-40"></hr>
          <div className="text-center flex flex-col">
            <small className="pt-4 text-[12px] text-center text-white">
              Todos los derechos reservados.
            </small>
            <small className="pt-2 text-[12px] text-center text-white">
              Desarrollado por <b>Teprogramo.com</b>
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
