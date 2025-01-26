import Nav from "./Nav";

function Header() {
  return (
    <header className="container mx-auto px-4 py-6 md:py-10">
      <div className="mx-auto flex w-3/4 items-center justify-between">
        <a href="/">
          <img
            src="/src/assets/Logo.svg"
            alt="Logo"
            className="h-[min(10vw, 3rem)] md:h-[min(5vw, 4rem)]"
          />
        </a>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
