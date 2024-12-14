import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Loading from './pages/Loading';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BlogPage from './pages/BlogPage';
import Article from './components/Article';
import Checkout from "./pages/CheckoutPage.tsx";

// import Tea from './pages/Tea';
// import PaymentPopup from './pages/PaymentPopup';
// import Shopchoice from './components/Shopchoice';
// import ProductDetailPage from './pages/ProductDetailPage';
import CustomProduct from './pages/CustomProduct';

const App: React.FC = () => {

  return (
    //onLogin={handleLogin}
    <Router>
      <Navbar />
      <div className="content" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/custom-product" element={<CustomProduct />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/green-tea" element={<ProductListPage />} />
          <Route path="/black-tea" element={<ProductListPage />} />
          <Route path="/white-tea" element={<ProductListPage />} />
          <Route path="/oolong-tea" element={<ProductListPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;


