import Nav from "./Nav";

function Header() {
  return (
    <header className="container mx-auto px-4 py-6 md:py-10">
      <div className="mx-auto flex w-3/4 items-center justify-between">
        <a href="/">
          <img
            src="/src/assets/Logo.svg"
            alt="Logo"
            className="min-w-min p-4"
          />
        </a>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
