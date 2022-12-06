

function Header() {
  return (
    <header className="w-full p-4 md:text-white flex md:justify-between md:p-4 items-center -mb-20">

      <nav className="hidden md:block">
        <ul className="uppercase md:text-xl lg:text-sm cursor-pointer md:pr-10">
          <li>
            <a
              href="#capsules"
              className="group text-white transition duration-300"
            >
              Capsule
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;