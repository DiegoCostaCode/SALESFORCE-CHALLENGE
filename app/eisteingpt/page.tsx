import Card from "../components/Card/card-service";

export default function Einsteingpt() {
  return (
    <main>

      <section className="flex flex-col items-center tracking-tighter ">

        <div className="flex items-center scale-110 my-[50px]">
          <div className="flex flex-col">
            <div className="flex-initial">
              <h1 className="text-5xl font-bold text-[#179DD8]">EINSTEIN GPT</h1>
              <p className="my-5 text-secondary w-[450px]">
                Se você sonha com a primeira IA geradora para CRM do mundo, ela chegou. Prepare-se. O Einstein GPT entrou no chat.</p>

              <div className="flex items-center justify-start space-x-20 my-5">

                <a className="flex items-center justify-start uppercase" href="./cadastro/">
                  <button className="bg-[#179DD8] px-6 py-1 rounded-3xl font-bold text-[#f9f9f9] transition-all hover:bg-secondary">
                    Teste grátis!
                  </button >
                </a>

                <a className="flex items-center justify-start" href="/">
                  <button className="text-[#179DD8] px-6 py-1 border-2 border-datacloud rounded-3xl font-bold transition-all hover:text-[#0F2A5D] hover:border-salesforce-darkbase">
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
              <h2 className="text-center mb-5 uppercase font-bold text-[#179DD8] text-4xl text-center w-[900px] mb-[50px]">
                experiência personalizada <a className="text-secondary">a seus clientes.</a></h2>
            </div>  

            <div className="flex items-start space-x-20">
              <p className="text-secondary w-[300px] text-2xl text-justify">O Einstein GPT oferece praticidade e mensagens personalizadas para cada tipo de cliente e necessidade.</p>
              <img className=" w-[450px]" src="../img/imagegpt.png"></img>
            </div>

          </div>

        </article>


      </section>

    </main>
  );
}