import Image from "next/image";
import Header from "./components/Header/header";
import Pagetemplate from "./components/Page-template/page-template";

export default function Home() {
  return (
    <main>
      <Header />
      <Pagetemplate
        //APRESENTAÇÃO DA PAGINA
        exclamacao="SUCESSO!"
        titulo="SALESFORCE CUSTOMER 360"
        descricao="O customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI."
        image="./img/entry1.png"
        button1="https://www.youtube.com/watch?v=4s4UCxCv_OE"
        button2="https://www.youtube.com/watch?v=4s4UCxCv_OE"

        //FORMATAÇÃO PERSONALIZADA PARA A PAGINA
        cor="#179DD8"

        //ARTIGO 2 DA PÁGINA
        titulo2="Runir pessoas é salesforce"
        conteudo1="Desde o início, a Salesforce procurou mudar o mundo para melhor através da tecnologia que cria relacionamentos mais fortes. Entre empresas e seus clientes."
        
      />
      
    </main>
  );
}
