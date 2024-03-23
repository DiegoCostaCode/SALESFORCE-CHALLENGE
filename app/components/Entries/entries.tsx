import { Props } from "./interfaces"

const Entries = (props: Props) => {
    return (
        <>
            <section className="flex justify-center items-center scale-150 h-[400px] my-20">

                <div className="flex flex-col w-[400px] text-left">
                    <h1 className="text-5xl font-bold text-[#179DD8]">{props.supertitle}</h1>
                    <h3 className="text-3xl font-bold text-[#0F2A5D]">{props.title}</h3>
                    <p className="text-[#343434]">{props.description}</p>

                    <div className="flex items-center justify-start space-x-20 my-10">

                        <a className="flex items-center justify-start" href={props.button1}>
                            <button className="px-6 py-1  bg-[#3A8B54] rounded-3xl font-bold text-[#f9f9f9]">
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

            </section>
        </>
    );
}

export default Entries;