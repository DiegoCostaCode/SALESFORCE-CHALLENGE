const Header = () => {
  return (
    <>
      <header className="flex justify-center items-center space-between bg-[#F8F8F8] text-[#343434] h-[96px] ml-[60px] mr-[60px] font-bold">

        <a className="flex mr-[50px]" href="/">

          <img className="w-[74px]" src="img/logo-default.png"></img>

        </a>

        <div className="flex flex-1 alijustify-center tracking-wide text-center">
          <li className="mr-[50px] list-none">
            <a>Serviços</a>
          </li>

          <li className="mr-[50px] list-none">
            <a>Trailhead</a>
          </li>
          <li className="mr-[50px] list-none">
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