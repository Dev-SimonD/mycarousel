import { useEffect } from "react";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import Magnet from "./components/Magnet";
import HledatePraci from "./components/HledatePraci";
import Kategorie from "./components/Kategorie";
import KdoJsme from "./components/KdoJsme";
import Lokalita from "./components/Lokalita";
import Poradna from "./components/Poradna";
import Potencial from "./components/Potencial";
import Rovnost from "./components/Rovnost";
import Ukrajina from "./components/Ukrajina";
import Footer from "./components/Footer";
import "./App.css";
import "aos/dist/aos.css";
import Aos from "aos";

// import required modules

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <>
      <Menu />
      <Kategorie />
      <Magnet />
      <Rovnost />
      <Ukrajina />
      <Carousel />
      <HledatePraci />
      <Potencial />
      <KdoJsme />
      <Poradna />
      <Lokalita />
      <Footer />
    </>
  );
}
