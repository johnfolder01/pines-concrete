import { Header, Hero, About, Services, Gallery, Contact, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
