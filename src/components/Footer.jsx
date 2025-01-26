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
                  <a href="/" className="text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="text-base">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="text-base">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="" className="text-base">
                    Reservations
                  </a>
                </li>
                <li>
                  <a href="" className="text-base">
                    Order Online
                  </a>
                </li>
                <li>
                  <a href="" className="text-base">
                    Login
                  </a>
                </li>
              </ul>
              <ul>
                <h3 className="text-base font-bold">Contact</h3>
                <li className="text-base">Address</li>
                <li className="text-base">Phone Number</li>
                <li className="text-base">Email</li>
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
