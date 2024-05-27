import Hero from "./sections/Hero";
import PopularProducst from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality.jsx";
import Services from "./sections/Services.jsx";
import SpecialOffer from "./sections/SpecialOffer.jsx";
import CustomerReviews from "./sections/CustomerReviews.jsx";
import Subscribe from "./sections/Subscribe.jsx"
import Footer from "./sections/Footer.jsx"
import Nav from "./components/Nav.jsx"


const App = () => {
  return (
    <main className='relative'>
      <Nav />

      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>

      <section className='padding'>
        <PopularProducst />
      </section>

      <section className='padding'>
        <SuperQuality />
      </section>

      <section className='padding-x py-10'>
        <Services />
      </section>

      <section className='padding'>
        <SpecialOffer />
      </section>

      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>

      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
}

export default App;
