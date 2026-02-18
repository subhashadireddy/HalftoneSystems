import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SuccessStories } from './components/SuccessStories';
import { Partnerships } from './components/Partnerships';
import { Stats } from './components/Stats';
import { Insights } from './components/Insights';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <SuccessStories />
      <Partnerships />
      <Stats />
      <Insights />
      <Footer />
    </div>
  );
}

export default App;
