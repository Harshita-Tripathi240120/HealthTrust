import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import B2BInquiry from "./pages/B2BInquiry";
import UploadPrescription from "./pages/UploadPrescription";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound"; // Optional custom 404 page

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Toaster />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/catalog"
          element={
            <PrivateRoute>
              <Catalog />
            </PrivateRoute>
          }
        />
        <Route
          path="/b2b"
          element={
            <PrivateRoute>
              <B2BInquiry />
            </PrivateRoute>
          }
        />
        <Route
          path="/prescription"
          element={
            <PrivateRoute>
              <UploadPrescription />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        {/* Optional public contact route */}
        <Route path="/contact" element={<Contact />} />

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
