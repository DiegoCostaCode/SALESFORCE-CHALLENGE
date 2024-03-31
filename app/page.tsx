import Image from "next/image";
import Header from "./components/Header/header";
import Card from "./components/Card/card-service";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center tracking-tighter ">

        <div className="flex items-center scale-110 my-[50px]">
          <div className="flex flex-col">
            <div className="flex-initial">
              <h1 className="text-5xl font-bold text-[#179DD8]">SUCESSO!</h1>
              <h3 className="text-4xl font-bold text-[#0F2A5D]">
                Salesforce customer 360</h3>
              <p className="my-5 text-[#343434] w-[450px]">O customer 360 é a nossa suíte de produtos e serviços q
                ue ajuda 98% dos clientes a alcançar ou superar suas metas de ROI.</p>

              <div className="flex items-center justify-start space-x-20 my-5">

                <a className="flex items-center justify-start uppercase" href="/">
                  <button className="bg-sf-green px-6 py-1 rounded-3xl font-bold text-[#f9f9f9] transition-all hover:bg-secondary">
                    Teste grátis!
                  </button >
                </a>

                <a className="flex items-center justify-start" href="/">
                  <button className="text-[#179DD8] px-6 py-1 border-2 border-primary rounded-3xl font-bold transition-all hover:text-[#0F2A5D] hover:border-salesforce-darkbase">
                    Saiba mais
                  </button >
                </a>

              </div>
            </div>

          </div>

          <img className="w-[550px]" src="../img/Entry1.png" ></img>
        </div>
        
        
          <article className="my-[50px]">
            <div className="flex flex-col place-items-center">
              <h1 className="text-center mb-5 uppercase font-bold text-[#0F2A5D] text-5xl text-center w-[500px]">
                REUNIR PESSOAS É <a className="text-[#179DD8]">SALESFORCE</a></h1>
              <p className="text-2xl text-justify text-secondary">
                Nosso objetivo é alcançar seu cliente independente do cenário, e torná-los fiéis à sua empresa.
              </p>
            </div>
          </article>

          <article className="my-[50px]">
            <div className="flex items-center space-x-5">

              <div className="drop-shadow-shadow2">
                <img className=" w-[200px]" src="../img/Earth.png"></img>
              </div>
              <aside>
                <h3 className="text-5xl font-medium w-[500px] text-justify text-secondary">O <a className="text-sf-green">mundo</a> vai mudar,
                 mas o foco permanece no <a className="font-bold text-primary drop-shadow-blue-shine uppercase hover:tracking-widest transition-all">Cliente</a>.</h3>
              </aside>
            </div>
          </article>
       

        <section className="bg-secondary w-screen">

          <div className="flex justify-center my-[45px]">
            <h1 className="font-bold text-3xl uppercase text-white w-[550px] text-center">
              Conheça nossos produtos mais <a className="text-salesforce-base text-5xl">populares</a></h1>
          </div>

          <div id="produtos" className="flex justify-center space-x-5 mb-[50px]">

            <Card
              image="../img/eisteingpt.png"
              tittle="Eistein GPT"
              description="Inteligência artificial feita para o seu CRM.
              Melhore a interação com seus clientes com Eistein GPT."
              button="conhecer"
              fundo="#179DD8"
            />
            <Card
              image="../img/datacloud.png"
              tittle="Data Cloud"
              description="Personalize a interação com seus clientes com a primeira inteligência artificial direcionada a CRM."
              button="conhecer"
              fundo="#3849DB"
            />
            <Card
              image="../img/salescloud.png"
              tittle="Sales Cloud"
              description="A melhor plataforma de CRM. Com integração com I.A, análise, e automatize dados com facilidade."
              button="conhecer"
              fundo="#0A8680"
            />
            <Card
              image="../img/marketingcloud.png"
              tittle="Marketing Cloud"
              description="Personalize a interação com seus clientes com a primeira inteligência artificial direcionada a CRM."
              button="conhecer"
              fundo="#FF914D"
            />
          </div>

        </section>

      </section>
      <Footer />
    </main>
  );
}
