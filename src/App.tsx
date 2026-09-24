import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SellPage from './pages/SellPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-black font-['Inter',sans-serif]">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sneakers" element={<ProductPage categoryFilter="Sneakers" />} />
              <Route path="/apparel" element={<ProductPage categoryFilter="Apparel" />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sell" element={<SellPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
