import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularItems from './components/PopularItems';
import PopularItems2 from './components/PopularItems2';
import OrderWebsiteBanner from './components/OrderWebsiteBanner';
import PromoBanner from './components/PromoBanner';
import CustomerReviews from './components/CustomerReviews';
import FeaturesSection from './components/FeaturesSection';
import SpiceSection from './components/SpiceSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CateringForm from './components/CateringForm';
import PromoBanner2 from './components/PromoBanner2';
import GiftSection from './components/GiftSection';
import CategoryNav from './components/CategoryNav';

function HomePage() {
  return (
    <>
      <Hero />
      <PopularItems />
      <PopularItems2 />
      {/* <OrderWebsiteBanner /> */}
      <PromoBanner2 />
      <CustomerReviews />
      <FeaturesSection />
      <SpiceSection />
      <PromoBanner />
      <AboutSection />
      <FAQSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<CategoryNav />} />
          <Route path="/catering" element={<CateringForm />} />
          <Route path="/gift-cards" element={<GiftSection />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;