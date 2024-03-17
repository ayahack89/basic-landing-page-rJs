// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Navbar from "./Components/Navbar";
// eslint-disable-next-line react-refresh/only-export-components
import About from "./Components/About";
import Learn from "./Components/Learn";
import Course from "./Components/Course";
import Courseitem from "./Components/Courseitem";
import Footer from "./Components/Footer";
import Herotext from "./Components/Herotext";
const App = () => {
  useEffect(() => {
    document.title = "Online Journalism Coures - by Mr. Arun"; // Set the document title
  }, []);
  return (
    <div>
      <Navbar />
     <Herotext />
      <About />
      <Learn />
      <Course />
      <Courseitem />
      <Footer />
      
    </div>
  )
  
};
export default App


