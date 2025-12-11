
// import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection.jsx";

import "./assets/templatemo-personal-style.css";
import "./assets/templatemo-personal-javascripts.js";
import Footer from "./components/Footer.jsx";


function App() {
  // const [node, setNode] = useState(null);

  // useEffect(() => {
  //   fetch("https://folio.ddev.site/node/2?_format=json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("API Data:", data);
  //       setNode(data); // store object, not array
  //     })
  //     .catch((error) => console.error("API Error:", error));
  // }, []);

  return (
    <div>
       <Navbar />
        <Hero />
      <AboutSection />
      <Footer />
      {/* {!node ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{node.title?.[0]?.value}</h2>
          <p dangerouslySetInnerHTML={{ __html: node.body?.[0]?.value }} />
        </div>
      )} */}
    </div>
  );
}

export default App;
