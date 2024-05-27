import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <>
      <header className="padding-x p-8 absolute z-10 w-full">
        <nav className="flex items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center gap-16 max-lg:hidden">
            {navLinks.length > 0 ? (
              navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-monts errat leading-normal text-lg  text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))
            ) : (
              <div>No data avalable</div>
            )}
          </ul>
          <div className="ml-auto flex justify-end">
            <a
              href="/signin"
              className="font-monts errat leading-normal text-lg text-slate-700  hover:text-slate-950 ml-auto"
            >
              SignIn / Explore More
            </a>
          </div>
          <img className="h-5 w-5 ml-5 hidden max-lg:block" src={hamburger} alt="hamburger" />
        </nav>     
      </header>
    </>
  );
};

export default Nav;
