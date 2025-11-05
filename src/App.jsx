import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <FeaturedDishes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
