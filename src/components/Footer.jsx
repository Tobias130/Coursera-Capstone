function Footer() {
  return (
    <>
      <section className="bg-green py-10">
        <footer className="container mx-auto px-4 text-white">
          <nav>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              <img
                src="/src/assets/footer-logo.d09eb2af6c5a2225eedf.png"
                alt="logo"
                className="h-auto w-40"
              />
              <ul>
                <h3 className="text-base font-bold">Doormat Navigation</h3>
                <li>
                  <a
                    href="/"
                    className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Reservations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Order Online
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-800 relative text-base transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Login
                  </a>
                </li>
              </ul>
              <ul>
                <h3 className="text-base font-bold">Contact</h3>
                <li className="text-base">35405 Alabama</li>
                <li className="text-base">1-406-378-9346</li>
                <li className="text-base">example@gmail.com</li>
              </ul>
              <ul>
                <h3 className="text-base font-bold">Social Media Links</h3>
                <li className="text-base">Facebook</li>
                <li className="text-base">Instagram</li>
                <li className="text-base">Twitter</li>
              </ul>
            </div>
          </nav>
        </footer>
      </section>
    </>
  );
}

export default Footer;
