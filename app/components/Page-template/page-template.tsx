import { Props } from "./interfaces"

const Pagetemplate = (props: Props) => {
    return (
        <>
            <section className="flex flex-col justify-center items-center h-[600px] my-20">

                <div className="flex">
                    <div className="flex flex-col w-[400px] text-left">
                        <h1 className="text-5xl font-bold text-[#179DD8]">{props.exclamacao}</h1>
                        <h3 className="text-3xl font-bold text-[#0F2A5D]">{props.titulo}</h3>
                        <p className="text-[#343434]">{props.descricao}</p>

                        <div className="flex items-center justify-start space-x-20 my-10">

                            <a className="flex items-center justify-start" href={props.button1}>
                                <button style={{ background: props.cor }} className="px-6 py-1 rounded-3xl font-bold text-[#f9f9f9]">
                                    Teste grátis!
                                </button >
                            </a>

                            <a className="flex items-center justify-start" href={props.button2}>
                                <button className="px-6 py-1 bg-trnasparent border-2 border-custom-blue rounded-3xl font-bold text-[#179DD8]">
                                    Saiba mais
                                </button >
                            </a>

                        </div>


                    </div>

                    <img className="w-[400px]" src={props.image} ></img>
                </div>

                <article className="my-20">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-5 uppercase font-bold text-[#0F2A5D] text-3xl box-content w-[600px] text-center">{props.titulo2}</h1>
                        <p className="text-xl box-content w-[700px] text-justify">{props.conteudo1}</p>
                    </div>
                </article>

            </section>

            
        </>
    );
}

export default Pagetemplate;