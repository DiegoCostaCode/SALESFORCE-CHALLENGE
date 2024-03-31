const Footer = () => {
    return (
        <>
            <footer className="flex items-center w-screen h-[300px] bg-secondary ">
                
                
                <div className="flex space-x-20 ml-[40px]">

                    <div className="flex-1">
                        <img className="w-[150px]" src="../img/logo-sem-nome.png"></img>
                    </div>
                       
                       

                   
                    
                    <section>
                        <h3 className="text-2xl text-white font-bold my-[15px]">Links</h3>
                            <ul><a>Acessibilidade</a></ul>
                            <ul><a>Data Cloud</a></ul>
                            <ul><a>Eistien GPT</a></ul>
                            <ul><a>Marketing Cloud</a></ul>
                            <ul><a>Salescloud</a></ul>
        
                    </section>
                    <section >
                        <h3 className="text-2xl text-white font-bold  my-[15px]">Outros</h3>
                        <ul><a>Integrantes</a></ul>
                    </section>
                    <section >
                        <h3 className="text-2xl text-white font-bold  my-[15px]">Redes sociais</h3>
                        <p>Nos siga nas redes sociais</p>
                        <ul className="flex">
                            <ul><a>-</a></ul>
                            <ul><a>-</a></ul>
                            <ul><a>-</a></ul>
                        </ul>
                        
                    </section>
                </div>
            </footer>
        </>
    )
}

export default Footer;