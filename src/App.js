import { Route, Routes } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
