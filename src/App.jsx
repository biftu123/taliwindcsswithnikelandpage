import React from 'react';
import Nav from './components/nav';
import Hero from './sections/hero'; // Capitalized component name
import PopularProducts from './sections/popularProducts';
import SuperQuality from './sections/superQuality';
import Services from './sections/services';
import SpecialOffer from './sections/specialOffer';
import CustomerReviews from './sections/CustomReview';
import Subscribe from './sections/subscribe';
import Footer from './sections/footer';
const App = () => (
  <main className="relative">
    <Nav />
    <section className="x1:padding-l wide:padding-r padding-b">
      <Hero /> {/* Corrected component name */}
    </section>
    <section className="padding">
  <PopularProducts />
</section>
  
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App;