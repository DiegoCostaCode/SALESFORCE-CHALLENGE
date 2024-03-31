import { Props } from "./interface";

const Card = (props: Props) => {
    return (
        <>

                
                    <div role="button" style={{ background: props.fundo }}
                        className="p-5 flex flex-col w-[300px] 
                        h-auto rounded-3xl 
                        text-center justify-center drop-shadow-default trasition-all scale-100 hover:drop-shadow-blue-shine">
                        <a href={props.link}>

                            <img className="w-[500px]" src={props.image}></img>

                            <div className="space-y-5">
                                <h1 className="font-bold text-white text-5xl drop-shadow-text ">{props.tittle}</h1>
                                <p className="text-xl text-white drop-shadow-text ">{props.description}</p>
                            </div>
                        </a>
                    </div>
                
            

        </>
    );
}

export default Card;