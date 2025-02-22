import { useState } from "react";
import Card from "./Card";
import Testimonial from "./Testimonial";

const Main = () => {
  (updateTimes) => {
    setAvailableTimes(availableTimes.filter((time) => time !== updateTimes));
  };

  return (
    <>
      <main>
        <section className="bg-green py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex flex-col items-center justify-between space-y-8 lg:w-3/4 lg:flex-row lg:space-y-0">
              <div className="text-center lg:w-1/2 lg:text-left">
                <h1 className="text-3xl md:text-4xl text-heading font-bold text-yellow">
                  Little Lemon
                </h1>
                <h2 className="text-2xl md:text-3xl mt-2 text-subHeading font-bold text-white">
                  Chicago
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  tincidunt, ex nec ultricies varius, justo elit facilisis
                  augue, eget fermentum nisl libero vitae nunc. Nullam nec magna
                  in nunc condimentum fermentum. Nullam nec magna in nunc
                  condimentum fermentum.
                </p>
                <button className="hover:bg-yellow-600 mt-6 rounded-2xl bg-yellow px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-1">
                  <a href="/booking" className="text-black">
                    Book a Table
                  </a>
                </button>
              </div>
              <div className="flex justify-center lg:w-1/2">
                <img
                  src="/src/assets/restauranfood.jpg"
                  alt="food"
                  className="h-auto w-96 rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex w-3/4 flex-wrap items-center justify-between pb-10">
              <h2 className="text-heading">Specials</h2>
              <button className="hover:bg-yellow-600 mt-6 rounded-2xl bg-yellow px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-1">
                Online Menu
              </button>
            </div>
            <div className="mx-auto flex w-3/4 flex-wrap justify-center md:justify-between">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
                <Card
                  img="greek salad.jpg"
                  title="Greek Salad"
                  price="12.99"
                  description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
                <Card
                  img="bruchetta.svg"
                  title="Bruchetta"
                  price="5.99"
                  description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                />
                <Card
                  img="lemon dessert.jpg"
                  title="Lemon Dessert"
                  price="5.00"
                  description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green py-20">
          <div className="container mx-auto px-4">
            <h2 className="py-10 text-center text-heading font-bold text-white">
              Testimonials
            </h2>
            <div className="mx-auto flex w-3/4 flex-col items-center justify-center gap-6 py-10 sm:block md:block lg:flex lg:flex-row lg:gap-10">
              <Testimonial
                img="https://i.pravatar.cc/100?img=1"
                name="Kenzie Edgar"
                text="Little Lemon is a hidden gem! The flavors are vibrant, the atmosphere cozy, and the service impeccable. A must-visit for food lovers!"
                stars={5}
              />
              <Testimonial
                img="https://i.pravatar.cc/100?img=11"
                name="Arthur Morning"
                text="The dishes at Little Lemon are pure perfection—fresh, flavorful, and beautifully presented. This place truly exceeds expectations"
                stars={4}
              />
              <Testimonial
                img="https://i.pravatar.cc/100?img=12"
                name="Lukas Dohn"
                text="Little Lemon brings a burst of flavor to every plate. Exceptional food, warm hospitality, and a dining experience you’ll never forget!"
                stars={5}
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex w-full flex-col items-center justify-between gap-10 md:w-3/4 md:flex-row">
              <div className="w-full sm:pb-4 md:w-1/2">
                <h1 className="font-markazi text-heading font-bold text-yellow">
                  Little Lemon
                </h1>
                <h2 className="text-subHeading font-bold">Chicago</h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  tincidunt, ex nec ultricies varius, justo elit facilisis
                  augue, eget fermentum nisl libero vitae nunc. Nullam nec magna
                  in nunc condimentum fermentum. Nullam nec magna in nunc
                  condimentum fermentum.
                </p>
              </div>

              <div className="relative flex w-full justify-center md:w-1/2">
                <img
                  src="/src/assets/Mario and Adrian b.jpg"
                  alt="founders"
                  className="h-auto max-w-[250px] rounded-2xl object-fill sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
                />
                <img
                  src="/src/assets/Mario and Adrian A.jpg"
                  alt="founders"
                  className="absolute -top-10 left-10 h-auto max-w-[150px] rounded-2xl object-fill sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
