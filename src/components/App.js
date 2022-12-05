import React from "react";
import "../index.css";
import About from "./About/About";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import { Routes, Route } from "react-router-dom";
import Course from "./Course/Course";
import News from "./News/News";
import Aos from "aos";
import "aos/dist/aos.css";
import FullNews from "./News/FullNews";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
Aos.init({ offset: 200, duration: 600, easing: "ease-in-sine" });
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Course />
              <News homePage={true} />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/news" element={<News activePage={true} />} />
        <Route path="/news/:id/:title/" element={<FullNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
