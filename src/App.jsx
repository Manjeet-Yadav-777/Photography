import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AnimRoute from "./components/AnimRoute";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoute />
        <Footer />
        <ScrollToTop />
      </Router>
    </>
  );
};

export default App;
