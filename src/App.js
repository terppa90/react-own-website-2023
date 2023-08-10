import './App.css';
import GlobalStyle from './globalStyles';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import WorkHistory from './pages/WorkHistory/WorkHistory';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<WorkHistory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
