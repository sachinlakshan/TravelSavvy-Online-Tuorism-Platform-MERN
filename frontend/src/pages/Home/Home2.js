import { BuAccent } from "../../components/Buttons/Buttons";
import { CatalogueCard } from "../../components/Cards/Cards";
import ImgHero from "../../assets/hero.png";
import ImgHero2 from "../../assets/hero2.png";
import "./Home2.css";
import { getCarArray } from "../../Helpers/CarsProvider";
import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import HeroForm from "../../components/Forms/HeroForm";
import { Footer, NavbarTop } from "../../components/Navigation/Navigation";
import { GridDisplay, ScrollDisplay } from "../CarDisplayViews";
import NavigationBar from "../../components/navbar";

function HeroSection() {
  return (
    <section
      className="hero
       grid grid-cols-1 grid-rows-3 content-center gap-4 m-auto my-8 max-w-[100rem] 
       md:grid-rows-2 md:grid-cols-2 md:gap-8 md:mt-12
       lg:my-16
      "
    >
      <div
        className="
        text-center hero-text max-w-2xl self-center row-start-2 
        md:text-start
        lg:row-start-1 
        "
      >
        <h1
          className=" font-bold text-4xl text-dark leading-relaxed 
          xl:text-6xl
          "
        >
          Rent your Dream Car <br />
          At your fingertips
        </h1>
        <p className=" text-xl mt-4 leading-loose">
        Whether you're looking for luxury or efficiency, our car options cater to your needs, ensuring a seamless and enjoyable experience from start to finish
        </p>
      </div>
      <img
        src={ImgHero2}
        alt=""
        className="
          self-center max-w-full max-h-full object-cover row-start-1 col-start-1 col-span-2
          lg:row-span-2 lg:col-start-2 lg:col-span-1"
      ></img>
      <HeroForm
        className="
        self-center row-start-3 max-w-2xl
        md:row-start-2  
        "
      ></HeroForm>
    </section>
  );
}

export default function Home2() {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);
  return (
    <>
      {/* <NavbarTop></NavbarTop> */}
      <NavigationBar/>
      <div className="page py-5 px-4 md:py-8 md:px-16">
        <HeroSection></HeroSection>

        <ScrollDisplay/>
        <GridDisplay/>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
