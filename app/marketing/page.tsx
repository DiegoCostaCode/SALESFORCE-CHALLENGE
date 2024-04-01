import Card from "../components/Card/card-service";

export default function Marketingcloud() {
  return (
    <main>

      <section className="flex flex-col items-center tracking-tighter ">

        <div className="flex items-center scale-110 my-[50px]">
          <div className="flex flex-col">
            <div className="flex-initial">
              <h1 className="text-5xl font-bold text-[#FF914D]">MARKETING CLOUD</h1>
              <p className="my-5 text-secondary w-[450px]">
                Atraia clientes. Gere mais engajamento. Construa relações duradouras. Tudo isso graças ao marketing digital baseado em dados.</p>

              <div className="flex items-center justify-start space-x-20 my-5">

                <a className="flex items-center justify-start uppercase" href="/">
                  <button className="bg-[#FF914D] px-6 py-1 rounded-3xl font-bold text-[#f9f9f9] transition-all hover:bg-secondary">
                    Teste grátis!
                  </button >
                </a>

                <a className="flex items-center justify-start" href="/">
                  <button className="text-[#FF914D] px-6 py-1 border-2 border-datacloud rounded-3xl font-bold transition-all hover:text-[#0F2A5D] hover:border-salesforce-darkbase">
                    Saiba mais
                  </button >
                </a>

              </div>
            </div>

          </div>

          <img className="w-[350px]" src="../img/marketingcloud.png" ></img>
        </div>


        <article className="my-[50px]">
          <div className="flex flex-col place-items-center">
            <div>
              <h2 className="text-center mb-5 uppercase font-bold text-[#FF914D] text-4xl text-center w-[900px] mb-[50px]">
                investimento em <a className="text-secondary">marketing mais eficaz.</a></h2>
            </div>  

            <div className="flex items-start space-x-20">
              <p className="text-secondary w-[300px] text-2xl text-justify">O Marketing Cloud <b>diminuiu o custo</b> de nossos clientes em <b>27%.</b> Dado baseado em 3.706 entrevistas com clientes do EUA, Canadá, Reino Unido, Brasil, entre outros.</p>
              <img className=" w-[450px]" src="../img/image13.png"></img>
            </div>

          </div>

        </article>


      </section>

    </main>
  );
}