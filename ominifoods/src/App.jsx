import { FaCheck, FaFire } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoIosInfinite } from "react-icons/io";
import { MdOutlinePause } from "react-icons/md";
import { IoNutritionOutline } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLeafOutline } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function App() {
  return (
    <div className="text-[#555]">
      <Nav />
      <main>
        <Hero />
        <Featured />
        <HowItWorks gridCol="2" />
        <Meals />
        <Testimonials />
        <PricingandFeatures />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="bg-[#fdf2e9] h-[9.6rem] px-[4.8rem] tablet:px-[3.2rem] flex justify-between items-center relative">
      {/* Logo */}
      <a href="#">
        <img
          className="h-[2.2rem]"
          src="img/omnifood-logo.png"
          alt="Omnifood logo"
        />
      </a>

      {/* Desktop Nav - always shown on desktop */}
      <nav className="minTablet:hidden">
        <ul className="flex space-x-[4.8rem] text-[1.8rem] font-medium">
          <li>
            <a className="hover:text-[#cf711f]" href="#works">
              How it works
            </a>
          </li>
          <li>
            <a className="hover:text-[#cf711f]" href="#meal">
              Meals
            </a>
          </li>
          <li>
            <a className="hover:text-[#cf711f]" href="#testimony">
              Testimonials
            </a>
          </li>
          <li>
            <a className="hover:text-[#cf711f]" href="#price">
              Pricing
            </a>
          </li>
          <li>
            <a
              className="py-[1.2rem] px-[2.4rem] rounded-xl text-white bg-[#e67e22] hover:bg-[#cf711f] transition-all"
              href="#cta"
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav - shown only when openNav is true */}
      {openNav && (
        <nav className="minTablet:flex flex-col items-center justify-center absolute inset-0 min-h-screen bg-[#ffffffcc] backdrop-blur-sm z-10">
          <ul className="flex flex-col gap-[4.8rem] text-[3.4rem] font-medium text-center">
            <li>
              <a
                onClick={() => setOpenNav(false)}
                className="hover:text-[#cf711f]"
                href="#works"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpenNav(false)}
                className="hover:text-[#cf711f]"
                href="#meal"
              >
                Meals
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpenNav(false)}
                className="hover:text-[#cf711f]"
                href="#testimony"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpenNav(false)}
                className="hover:text-[#cf711f]"
                href="#price"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpenNav(false)}
                className="py-[1.2rem] px-[2.4rem] rounded-xl text-white bg-[#e67e22] hover:bg-[#cf711f] transition-all"
                href="#cta"
              >
                Try for free
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Hamburger Icon (mobile only) */}
      <button
        onClick={() => setOpenNav(!openNav)}
        className="minTablet:block hidden z-20"
      >
        {!openNav ? (
          <FiMenu className="text-[4.8rem] text-[#333]" />
        ) : (
          <IoMdClose className="text-[4.8rem] text-[#333]" />
        )}
      </button>
    </header>
  );
}

//! i like the fact am giving width to the style that needs it
function Hero() {
  return (
    <section className="bg-[#fdf2e9] pt-[4.8rem] pb-[9.6rem]">
      <div className="grid grid-cols-[1fr_1fr] minTablet:grid-cols-1 items-center max-w-[130rem] desktop:max-w-[120rem] gap-[9.6rem] tablet:gap-[4.8rem] minTablet:gap-[6.4rem] mx-auto px-[3.2rem] minTablet:px-[2.4rem] minTablet:text-center">
        {/* Text content */}
        <div>
          <h1 className="text-[4.6rem] desktop:text-[4.4rem] mb-[3.2rem] font-bold leading-[1.05] text-[#333]">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="text-[1.8rem] leading-[1.6] mb-[4.8rem]">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </p>

          {/* Buttons */}
          <div className="flex gap-[2.4rem] minTablet:flex-col minTablet:items-center minTablet:gap-[1.6rem] mb-[6.4rem]">
            <Button type="main">Start eating well</Button>
            <Button type="outline">Learn more</Button>
          </div>

          {/* Customer images and info */}
          <div className="flex items-center gap-[1.6rem] minTablet:justify-center minTablet:flex-col">
            <div className="flex">
              <CustomerImg img="img/customers/customer-1.jpg" />
              <CustomerImg img="img/customers/customer-2.jpg" />
              <CustomerImg img="img/customers/customer-3.jpg" />
              <CustomerImg img="img/customers/customer-4.jpg" />
              <CustomerImg img="img/customers/customer-5.jpg" />
              <CustomerImg img="img/customers/customer-6.jpg" last={true} />
            </div>
            <p className="text-[1.8rem] font-semibold minTablet:mt-[1.6rem]">
              <span className="text-[#cf711f] font-bold">250,000+ </span>meals
              delivered last year!
            </p>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="img/hero.png"
            alt="woman enjoying food"
            className="w-full max-w-[100%] minTablet:w-[70%] minTablet:mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="pt-[4.8rem] pb-[3.2rem]">
      <div className="max-w-[130rem] mx-auto px-[3.2rem] minTablet:px-[2.4rem]">
        <h2 className="text-[1.4rem] uppercase tracking-[0.75px] font-semibold text-center mb-[2.4rem] text-[#888]">
          As featured in
        </h2>

        <div className="flex justify-around items-center gap-[2rem] flex-wrap minTablet:gap-[3.2rem] minTablet:justify-center">
          <img
            className="h-[3.2rem] minTablet:h-[2.4rem] brightness-0 opacity-[50%]"
            src="img/logos/techcrunch.png"
            alt="TechCrunch"
          />
          <img
            className="h-[3.2rem] minTablet:h-[2.4rem] brightness-0 opacity-[50%]"
            src="img/logos/business-insider.png"
            alt="Business Insider"
          />
          <img
            className="h-[3.2rem] minTablet:h-[2.4rem] brightness-0 opacity-[50%]"
            src="img/logos/the-new-york-times.png"
            alt="The New York Times"
          />
          <img
            className="h-[3.2rem] minTablet:h-[2.4rem] brightness-0 opacity-[50%]"
            src="img/logos/forbes.png"
            alt="Forbes"
          />
          <img
            className="h-[3.2rem] minTablet:h-[2.4rem] brightness-0 opacity-[50%]"
            src="img/logos/usa-today.png"
            alt="USA Today"
          />
        </div>
      </div>
    </section>
  );
}

//! the margin is 9.6rem 96px

function HowItWorks() {
  return (
    <section id="works" className="py-[9.6rem] text-[#333]">
      <div className="max-w-[130rem] mx-auto px-[3.2rem] minTablet:px-[2.4rem]">
        <span className="tracking-[0.75px] text-[1.8rem] font-medium text-[#cf711f] uppercase mb-[1.6rem] block text-center minTablet:text-[1.6rem]">
          How it works
        </span>
        <h2 className="font-bold tracking-[-0.5px] text-[4.4rem] mb-[9.6rem] text-center tablet:text-[3.6rem] minTablet:text-[2.8rem]">
          Your daily dose of health in 3 simple steps
        </h2>

        <div className="grid grid-cols-2 gap-y-[9.6rem] items-center tablet:gap-y-[6.4rem] minTablet:grid-cols-1 minTablet:gap-y-[4.8rem]">
          {/* Step 1 */}
          <div className="minTablet:text-center">
            <p className="text-[9.8rem] font-semibold text-[#eee] minTablet:text-[7.4rem]">
              01
            </p>
            <h3 className="font-bold tracking-[-0.5px] text-[3rem] leading-[1.2] mb-[3.2rem] tablet:text-[2.4rem] minTablet:text-[2.2rem]">
              Tell us what you like (and what not)
            </h3>
            <p className="text-[1.8rem] leading-[1.8] minTablet:text-[1.6rem]">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-[35%] minTablet:w-[50%]"
              src="img/app/app-screen-1.png"
              alt="Iphone app"
            />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col-reverse minTablet:flex-col items-center justify-center minTablet:gap-[3.2rem]">
            <div className="minTablet:text-center">
              <p className="text-[9.8rem] font-semibold text-[#eee] minTablet:text-[7.4rem]">
                02
              </p>
              <h3 className="font-bold tracking-[-0.5px] text-[3rem] leading-[1.2] mb-[3.2rem] tablet:text-[2.4rem] minTablet:text-[2.2rem]">
                Approve your weekly meal plan
              </h3>
              <p className="text-[1.8rem] leading-[1.8] minTablet:text-[1.6rem]">
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </p>
            </div>
            <img
              className="w-[35%] minTablet:w-[60%] minTablet:mx-auto"
              src="img/app/app-screen-2.png"
              alt="Iphone app"
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center justify-center minTablet:gap-[3.2rem]">
            <div className="minTablet:text-center">
              <p className="text-[9.8rem] font-semibold text-[#eee] minTablet:text-[7.4rem]">
                03
              </p>
              <h3 className="font-bold tracking-[-0.5px] text-[3rem] leading-[1.2] mb-[3.2rem] tablet:text-[2.4rem] minTablet:text-[2.2rem]">
                Receive meals at convenient time
              </h3>
              <p className="text-[1.8rem] leading-[1.8] minTablet:text-[1.6rem]">
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </p>
            </div>
            <img
              className="w-[35%] minTablet:w-[60%] minTablet:mx-auto"
              src="img/app/app-screen-3.png"
              alt="Iphone app"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Meals() {
  return (
    <section id="meal" className="py-[9.6rem]">
      <div className="container text-center">
        <span className="tracking-[0.75px] text-[1.8rem] font-medium text-[#cf711f] uppercase mb-[1.6rem] block minTablet:text-[1.6rem]">
          Meals
        </span>
        <h2 className="font-bold tracking-[-0.5px] text-[4.4rem] mb-[9.6rem] tablet:text-[3.6rem] minTablet:text-[2.8rem]">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid-cols-3 gap-[9.6rem] mb-[4.8rem] tablet:gap-[6.4rem] minTablet:grid-cols-1">
        {/* Card 1 */}
        <div className="meal-con rounded-[11px] overflow-hidden transition-all ease-in-out duration-500 hover:translate-y-[-18px]">
          <img className="w-full" src="img/meals/meal-1.jpg" alt="Meal 1" />
          <div className="p-[4.8rem] pt-[3.2rem] minTablet:p-[3.2rem] minTablet:pt-[2.4rem]">
            <div className="mb-[1.2rem]">
              <span className="py-[0.4rem] px-[0.8rem] uppercase text-[1.2rem] bg-[#51cf66] rounded-full inline font-semibold">
                Vegetarian
              </span>
            </div>
            <p className="text-[2.4rem] mb-[3.2rem] text-[#333] font-semibold">
              Japanese Gyozas
            </p>
            <ul className="space-y-[2rem]">
              <li className="text-[1.8rem] flex items-center gap-[1.6rem]">
                <ion-icon name="flame-outline" />
                <span><strong>650</strong> calories</span>
              </li>
              <li className="text-[1.8rem] flex items-center gap-[1.6rem]">
                <ion-icon name="restaurant-outline" />
                <span>NutriScore® <strong>74</strong></span>
              </li>
              <li className="text-[1.8rem] flex items-center gap-[1.6rem]">
                <ion-icon name="star-outline" />
                <span><strong>4.9</strong> rating (537)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="meal-con rounded-[11px] overflow-hidden transition-all ease-in-out duration-500 hover:translate-y-[-18px]">
          <img className="w-full" src="img/meals/meal-2.jpg" alt="Meal 2" />
          <div className="p-[4.8rem] pt-[3.2rem] minTablet:p-[3.2rem] minTablet:pt-[2.4rem]">
            <div className="mb-[1.2rem] space-x-2">
              <span className="py-[0.4rem] px-[0.8rem] uppercase text-[1.2rem] bg-[#94d82d] rounded-full inline font-semibold">
                Vegan
              </span>
              <span className="py-[0.4rem] px-[0.8rem] uppercase text-[1.2rem] bg-[#ffd43b] rounded-full inline font-semibold">
                Paleo
              </span>
            </div>
            <p className="text-[2.4rem] mb-[3.2rem] text-[#333] font-semibold">
              Avocado Salad
            </p>
            <ul className="space-y-[2rem]">
              <li className="text-[1.8rem] flex items-center gap-[1.6rem]">
                <ion-icon name="flame-outline" />
                <span><strong>400</strong> calories</span>
              </li>
              <li className="text-[1.8rem] flex items-center gap-[1.6rem]">
                <ion-icon name="restaurant-outline" />
                <span>NutriScore® <strong>92</strong></span>
              </li>
              <li className="text-[1.8rem] flex items-center gap-[1.6rem]">
                <ion-icon name="star-outline" />
                <span><strong>4.8</strong> rating (537)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Diet List */}
        <div className="minTablet:text-center">
          <h3 className="font-bold tracking-[-0.5px] text-[3rem] leading-[1.2] mb-[3.2rem] minTablet:text-[2.4rem]">
            Works with any diet
          </h3>
          <ul className="space-y-[1.6rem]">
            {[
              "Vegetarian", "Vegan", "Kid-friendly", "Low FODMAP", "Paleo",
              "Keto", "Lactose-free", "Gluten-free", "Pescatarian"
            ].map((diet, idx) => (
              <li key={idx} className="flex items-center text-[1.8rem] gap-[1.6rem] minTablet:justify-center">
                <FaCheck className="w-[3rem] h-[3rem] text-[#e67e22]" />
                <span>{diet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container text-center text-[1.8rem] font-semibold">
        <a
          href="#"
          className="transition-all duration-700 hover:text-[#cf711f] hover:border-b-[1px] border-[#cf711f] inline-block pb-[2px]"
        >
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}
function Testimonials() {
  return (
    <section id="testimony" className="grid grid-cols-[55fr_45fr] items-center bg-[#fdf2e9] minTablet:grid-cols-1">
      {/* Text + Testimonials */}
      <div className="p-[9.6rem] tablet:px-[3.2rem] minTablet:py-[6.4rem]">
        <span className="tracking-[0.75px] text-[1.8rem] font-medium text-[#cf711f] uppercase mb-[1.6rem] block minTablet:text-[1.6rem]">
          Testimonials
        </span>
        <h2 className="font-bold tracking-[-0.5px] text-[4.4rem] mb-[9.6rem] tablet:text-[3.6rem] minTablet:text-[2.8rem]">
          Once you try it you can't go back
        </h2>

        <div className="grid grid-cols-2 gap-y-[4.8rem] gap-x-[8rem] minTablet:grid-cols-1 minTablet:gap-y-[4rem]">
          {[
            {
              name: "Dave Bryson",
              img: "img/customers/dave.jpg",
              quote:
                "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
            },
            {
              name: "Ben Hadley",
              img: "img/customers/ben.jpg",
              quote:
                "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
            },
            {
              name: "Steve Miller",
              img: "img/customers/steve.jpg",
              quote:
                "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
            },
            {
              name: "Hannah Smith",
              img: "img/customers/hannah.jpg",
              quote:
                "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
            },
          ].map((person, idx) => (
            <figure key={idx}>
              <img
                className="w-[6.4rem] rounded-full mb-[1.2rem]"
                src={person.img}
                alt={`customer ${person.name}`}
              />
              <Quote>{person.quote}</Quote>
              <p className="text-[1.4rem] text-[#6f6f6f]">
                &mdash; {person.name}
              </p>
            </figure>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-3 gap-[1.6rem] p-[1.6rem] desktop:grid-cols-2 minTablet:grid-cols-4 minTablet:gap-[1rem]">
        {Array.from({ length: 12 }, (_, i) => (
          <GallsryImage
            key={i}
            imgSrc={`img/gallery/gallery-${i + 1}.jpg`}
            imgAlt="food"
          />
        ))}
      </div>
    </section>
  );
}

function Quote({ children }) {
  return (
    <blockquote className="text-[1.8rem] leading-[1.8] mb-[1.6rem]">
      {children}
    </blockquote>
  );
}

function GallsryImage({ imgSrc, imgAlt }) {
  return (
    <figure className="bg-red-400  overflow-hidden ">
      <img
        className="transition-all duration-700 ease-line hover:scale-[1.1] w-[100%] block mb-0"
        src={imgSrc}
        alt={imgAlt}
      />
    </figure>
  );
  {
    /* <figcaption>Caption</figcaption> */
  }
}

function PricingandFeatures() {
  return (
    <section id="price" className="py-[9.6rem]">
      <div className="container text-center">
        <span className="tracking-[0.75px] text-[1.8rem] font-medium text-[#cf711f] uppercase mb-[1.6rem] block">
          Pricing
        </span>
        <h2 className="font-bold tracking-[-0.5px] text-[4.4rem] mb-[6.4rem] tablet:text-[3.6rem] minTablet:text-[3rem]">
          Eating well without breaking the bank
        </h2>
      </div>

      {/* Plans */}
      <div className="container grid grid-cols-2 gap-[9.6rem] tablet:grid-cols-1 tablet:gap-[6.4rem] tablet:justify-items-center mb-[6.4rem]">
        {/* Starter Plan */}
        <div className="border-[#fdf2e9] border-solid border-[2px] rounded-[11px] p-[4.6rem] w-[75%] tablet:w-[90%]">
          <header className="text-center mb-[4.8rem]">
            <p className="text-[#cf711f] text-[2rem] mb-[3.2rem] font-bold uppercase tracking-wide">
              Starter
            </p>
            <p className="text-[7.4rem] font-bold text-[#333] mb-[1.6rem]">
              <span className="text-[3rem] font-semibold mr-[0.8rem]">$</span>399
            </p>
            <p className="text-[1.6rem] text-[#6f6f6f]">Per month. That’s just $13 per meal!</p>
          </header>
          <ul className="space-y-[2rem] leading-[1.2]">
            <li className="text-[1.8rem] flex items-center gap-[1.6rem]"><FaCheck className="text-[#e67e22]" />1 meal per day</li>
            <li className="text-[1.8rem] flex items-center gap-[1.6rem]"><FaCheck className="text-[#e67e22]" />Order from 11am–9pm</li>
            <li className="text-[1.8rem] flex items-center gap-[1.6rem]"><FaCheck className="text-[#e67e22]" />Delivery is free</li>
            <li className="text-[1.8rem] flex items-center gap-[1.6rem]"><RxCross2 className="text-[#e67e22]" /></li>
          </ul>
          <div className="text-center mt-[4.8rem]">
            <Button type="main">Start eating well</Button>
          </div>
        </div>

        {/* Complete Plan */}
        <div className="bg-[#fdf2e9] rounded-[11px] p-[4.8rem] w-[79%] tablet:w-[90%]">
          <header className="text-center mb-[4.8rem]">
            <p className="text-[#cf711f] text-[2rem] mb-[3.2rem] font-bold uppercase tracking-wide">
              Complete
            </p>
            <p className="text-[7.4rem] font-bold text-[#333] mb-[1.6rem]">
              <span className="text-[3rem] font-semibold mr-[0.8rem]">$</span>649
            </p>
            <p className="text-[1.6rem] text-[#6f6f6f]">Per month. That’s just $11 per meal!</p>
          </header>
          <ul className="space-y-[2rem] leading-[1.2]">
            <li className="text-[1.8rem] flex items-center gap-[1.6rem]"><FaCheck className="text-[#e67e22]" /><strong>2 meals</strong> per day</li>
            <li className="text-[1.8rem] flex items-center gap-[1.6rem]"><FaCheck className="text-[#e67e22]" />Order <strong>24/7</strong></li>
            <li className="text-[1.8rem] flex items-center gap-[1.6rem]"><FaCheck className="text-[#e67e22]" />Delivery is free</li>
            <li className="text-[1.8rem] flex items-center gap-[1.6rem]"><FaCheck className="text-[#e67e22]" />Get access to latest recipes</li>
          </ul>
          <div className="text-center mt-[4.8rem]">
            <Button type="main">Start eating well</Button>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="container mb-[9.6rem] text-center">
        <aside className="text-[1.6rem] font-medium leading-[1.6] text-[#555] px-[2rem]">
          Prices include all applicable taxes. You can cancel at any time. Both plans include the following:
        </aside>
      </div>

      {/* Features */}
      <div className="container grid grid-cols-4 gap-[4.4rem] tablet:grid-cols-2 minTablet:grid-cols-1 text-center">
        <div>
          <IoIosInfinite className="text-[#e67e22] text-[5.8rem] mb-[2.4rem] bg-[#fdf2e9] p-[1.2rem] rounded-full mx-auto" />
          <p className="text-[2.4rem] font-bold mb-[1.6rem] text-[#333]">Never cook again!</p>
          <p className="text-[1.8rem] text-[#555]">365 days/year coverage — even holidays.</p>
        </div>
        <div>
          <IoNutritionOutline className="text-[#e67e22] text-[5.8rem] mb-[2.4rem] bg-[#fdf2e9] p-[1.2rem] rounded-full mx-auto" />
          <p className="text-[2.4rem] font-bold mb-[1.6rem] text-[#333]">Local and organic</p>
          <p className="text-[1.8rem] text-[#555]">Only local, fresh, and organic ingredients.</p>
        </div>
        <div>
          <IoLeafOutline className="text-[#e67e22] text-[5.8rem] mb-[2.4rem] bg-[#fdf2e9] p-[1.2rem] rounded-full mx-auto" />
          <p className="text-[2.4rem] font-bold mb-[1.6rem] text-[#333]">No waste</p>
          <p className="text-[1.8rem] text-[#555]">Eco-friendly containers used for all meals.</p>
        </div>
        <div>
          <MdOutlinePause className="text-[#e67e22] text-[5.8rem] mb-[2.4rem] bg-[#fdf2e9] p-[1.2rem] rounded-full mx-auto" />
          <p className="text-[2.4rem] font-bold mb-[1.6rem] text-[#333]">Pause anytime</p>
          <p className="text-[1.8rem] text-[#555]">Pause your subscription and get refunds.</p>
        </div>
      </div>
    </section>
  );
}
function CallToAction() {
  return (
    <section id="cta" className="py-[4.8rem] pb-[12.8rem]">
      <div className="container">
        <div className="cta-shadow overflow-hidden grid grid-cols-[2fr_1fr] rounded-xl bg-gradient-to-b from-[#eb9846] to-[#e67e22] minTablet:grid-cols-1">
          {/* Left: Text + Form */}
          <div className="p-[6.4rem] pt-[4.8rem] text-[#45260a] minTablet:p-[4.8rem]">
            <h2 className="font-extrabold text-[3.8rem] mb-[3.2rem] tracking-wide minTablet:text-[3rem] text-center minTablet:text-left">
              Get your first meal for free!
            </h2>
            <p className="text-[1.8rem] leading-[1.6] mb-[4.8rem] minTablet:text-center minTablet:text-[1.6rem]">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form
              className="grid gap-x-[3.2rem] gap-y-[2.4rem] grid-cols-2 minTablet:grid-cols-1"
              action="#"
            >
              <div>
                <label className="formLabel block mb-[0.8rem]" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  className="forminput w-full"
                  id="full-name"
                  required
                  type="text"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="formLabel block mb-[0.8rem]" htmlFor="email">
                  Email address
                </label>
                <input
                  className="forminput w-full"
                  id="email"
                  required
                  type="email"
                  placeholder="me@example.com"
                />
              </div>

              <div className="col-span-2 minTablet:col-span-1">
                <label className="formLabel block mb-[0.8rem]" htmlFor="select">
                  Where did you hear about us?
                </label>
                <select className="forminput w-full" id="select" required>
                  <option value="">Please choose an option</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="col-span-2 minTablet:col-span-1 text-center minTablet:text-left">
                <Button type="form">Sign up now</Button>
              </div>
            </form>
          </div>

          {/* Right: Background Image */}
          <div
            className="cta-bgImg bg-[url('/img/eating.jpg')] bg-cover bg-center min-h-[40rem] minTablet:hidden"
            role="img"
            aria-label="Woman enjoying a healthy meal"
          ></div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer id="footer" className="py-[12.8rem] border-t-2 border-solid border-[#eee] bg-white">
      <div className="container grid grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] gap-[4.2rem] minTablet:grid-cols-2 tablet:grid-cols-1">
        {/* Logo & Socials */}
        <div className="flex flex-col minTablet:items-start tablet:items-center">
          <a className="block mb-[3.2rem]" href="/">
            <img
              className="h-[2.2rem]"
              src="img/omnifood-logo.png"
              alt="Omnifood logo"
            />
          </a>

          <ul className="flex gap-[2.4rem] mb-[3.2rem]">
            <FootIconLinks icon={<TiSocialInstagram />} />
            <FootIconLinks icon={<TiSocialFacebook />} />
            <FootIconLinks icon={<SlSocialTwitter />} />
          </ul>

          <p className="text-[1.4rem] text-[#767676] leading-[1.6] minTablet:mt-auto tablet:text-center">
            &copy; 2025 Omnifood, Inc. All rights reserved.
          </p>
        </div>

        {/* Contact */}
        <div className="tablet:text-center">
          <p className="text-[1.8rem] mb-[3.2rem] font-bold text-[#333]">
            Contact us
          </p>
          <address className="font-normal text-[1.6rem] leading-[1.6] not-italic text-[#767676] space-y-[2rem]">
            <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p>
              <a
                className="hover:text-[#555] block"
                href="tel:415-201-6370"
              >
                415-201-6370
              </a>
              <a
                className="hover:text-[#555] block"
                href="mailto:hello@omnifood.com"
              >
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>

        {/* Account */}
        <FooterNav title="Account">
          <ListItem>Create account</ListItem>
          <ListItem>Sign in</ListItem>
          <ListItem>iOS app</ListItem>
          <ListItem>Android app</ListItem>
        </FooterNav>

        {/* Company */}
        <FooterNav title="Company">
          <ListItem>About Omnifood</ListItem>
          <ListItem>For Business</ListItem>
          <ListItem>Cooking partners</ListItem>
          <ListItem>Careers</ListItem>
        </FooterNav>

        {/* Resources */}
        <FooterNav title="Resources">
          <ListItem>Recipe directory</ListItem>
          <ListItem>Help center</ListItem>
          <ListItem>Privacy & terms</ListItem>
        </FooterNav>
      </div>
    </footer>
  );
}

function FooterNav({ title, children }) {
  return (
    <nav className="tablet:text-center">
      <p className="text-[1.8rem] mb-[3.2rem] font-bold text-[#333]">{title}</p>
      <ul className="space-y-[2.4rem]">{children}</ul>
    </nav>
  );
}

function ListItem({ children }) {
  return (
    <li>
      <a
        className="transition-all duration-200 text-[1.6rem] text-[#767676] hover:text-[#555]"
        href="#"
      >
        {children}
      </a>
    </li>
  );
}

function FootIconLinks({ icon }) {
  return (
    <li>
      <a
        className="transition-all duration-200 text-[2.4rem] text-[#767676] hover:text-[#555]"
        href="#"
        aria-label="Social link"
      >
        {icon}
      </a>
    </li>
  );
}


/* 


### Contact information




Social profiles: instagram, facebook, twitter [links to them not available yet]

### Additional links [links not available yet]









No waste: All our partners only use reusable containers to package all your meals.
Pause anytime: Going on vacation? Just pause your subscription, and we refund unused days.
 */

function Icon({ children }) {
  return <>{children}</>;
}

// -

// Meal 2: Avocado Salad

// - Category: Vegan and Paleo
// - Calories: 400
// - NutriScore (Registered): 92
// - Average rating: 4.8
// - Number reviews: 441

function CustomerImg({ img, last }) {
  return (
    <img
      className={`w-[4.8rem] h-[4.8rem] rounded-full border-[3px] border-solid border-[#fdf2e9]  tablet:w-[4.4rem] ${
        !last && "mr-[-1.6rem]"
      }`}
      src={img}
      alt="customer image"
    />
  );
}

function Button({ children, type }) {
  const property = ["text-[#3e3e3e]"];

  let linkbtn = `transition-all duration-400 ease-in-out text-[2rem] text-white inline-block  px-[3.2rem]  rounded-2xl font-semibold text-center cursor-pointer `;
  let hoverbtn;
  if (type === "main") {
    linkbtn = linkbtn + " bg-[#e67e22] mr-[1.6rem] py-[1.6rem]";
    hoverbtn = "hover:bg-[#cf711f]";
  } else if (type === "form") {
    linkbtn =
      linkbtn +
      " bg-[#45260a] py-[1.1rem] text-[#fdf2e9] self-end minTablet:mt-[1.2rem]";
    hoverbtn = "hover:bg-[#fff] hover:text-[#555]";
  } else {
    linkbtn = linkbtn + " bg-[#fff] !text-[#3e3e3e] py-[1.6rem]";
    hoverbtn = "hover:bg-[#fdf2e9]  ring-[#fff] ring-inset ring-4  ";
  }

  return (
    <a href="" className={` ${hoverbtn} ${linkbtn}   `}>
      {children}
    </a>
  );
}
