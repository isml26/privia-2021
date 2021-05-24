import React from 'react';
import Header from "./components/header/Header"
import Features from "./components/features/Features"
import Analytics from "./components/analytics/Analytics"
import MoreFeatures from "./components/morefeatures/MoreFeatures"
import Collaborate from "./components/collaborate/Collaborate"
import Testimonial from "./components/testimonial/Testimonial"
import Pricing from "./components/pricing/Pricing"
import Footer from "./components/footer/Footer"
function App() {
  return (
    <div>
      <Header/>
      <Features/>
      <Analytics/>
      <Analytics/>
      <MoreFeatures/>
      <Collaborate/>
      <Testimonial/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
