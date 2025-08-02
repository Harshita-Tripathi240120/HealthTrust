import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from './pages/About';
import Footer from "./components/Footer";
import B2BInquiry from './pages/B2BInquiry';
import UploadPrescription from './pages/UploadPrescription';
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/b2b" element={<B2BInquiry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/prescription" element={<UploadPrescription />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <main>
        <Outlet /> {/* or Routes */}
      </main>
      <Footer />
    </Router>
  );
}


export default App;
