const Header = () => {
  return (
    <>
      <header className="flex tracking-tighter justify-center items-center space-between  text-secondary h-[90px] ml-[40px] mr-[40px] font-bold">

        <a className="flex mr-[50px]" href="/">

          <img className="w-[67px]" src="img/logo-default.png"></img>

        </a>

        <div className="flex flex-1 alijustify-center tracking-wide text-center">
          <li className="mr-[50px] list-none hover:text-primary">
            <a>Produtos</a>
          </li>

          <li className="mr-[50px] list-none hover:text-primary">
            <a>Trailhead</a>
          </li>
          <li className="mr-[50px] list-none hover:text-primary">
            <a>Acessibilidade</a>
          </li>
        </div>

        <div className="flex flex-end justify-center text-center">
          
        </div>

      </header>
    </>
  )
}

export default Header;