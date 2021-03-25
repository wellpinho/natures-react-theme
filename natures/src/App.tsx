import './main.css'
import './style.css'

import Header from './components/header'
import About from './components/about'
import SectionFeatures from './components/section-features'
import SectionTours from './components/section-tours'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <SectionFeatures />
        <SectionTours />
      </main>
    </div>
  );
}

export default App;
