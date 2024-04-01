import Card from "../components/Card/card-service";

export default function Salescloud() {
  return (
    <main>

      <section className="flex flex-col items-center tracking-tighter ">

        <div className="flex items-center scale-110 my-[50px]">
          <div className="flex flex-col">
            <div className="flex-initial">
              <h1 className="text-5xl font-bold text-[#0A8680]">SALES CLOUD</h1>
              <p className="my-5 text-secondary w-[450px]">
                Aumente sua eficiência sem aumentar seus custos. Com a plataforma Sales Cloud, você tem um pipeline automatizado para seu negócio.</p>

              <div className="flex items-center justify-start space-x-20 my-5">

                <a className="flex items-center justify-start uppercase" href="/">
                  <button className="bg-[#0A8680] px-6 py-1 rounded-3xl font-bold text-[#f9f9f9] transition-all hover:bg-secondary">
                    Teste grátis!
                  </button >
                </a>

                <a className="flex items-center justify-start" href="/">
                  <button className="text-[#0A8680] px-6 py-1 border-2 border-datacloud rounded-3xl font-bold transition-all hover:text-[#0F2A5D] hover:border-salesforce-darkbase">
                    Saiba mais
                  </button >
                </a>

              </div>
            </div>

          </div>

          <img className="w-[350px]" src="../img/salescloud.png" ></img>
        </div>


        <article className="my-[50px]">
          <div className="flex flex-col place-items-center">
            <div>
              <h2 className="text-center mb-5 uppercase font-bold text-[#0A8680] text-4xl text-center w-[900px] mb-[50px]">
                a ferramenta que você precisava <a className="text-secondary">para vender mais.</a></h2>
            </div>  

            <div className="flex items-start space-x-20">
              <p className="text-secondary w-[300px] text-2xl text-justify">Com Sales Cloud, obtenha insights e mapeie seus próximos passos para fazer seu negócio crescer.</p>
              <img className=" w-[450px]" src="../img/image4.png"></img>
            </div>

          </div>

        </article>


      </section>

    </main>
  );
}