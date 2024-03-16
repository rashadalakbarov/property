import { Route, Routes } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/contact" index element={<Contact />} />
        <Route path="/*" index element={<Page404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
