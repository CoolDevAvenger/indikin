import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import TopHeader from './components/TopHeader';
import Header from './components/Header';
import FundPool from './components/FundPool';
import MatchMaking from './components/MatchMaking';
import Stream from './components/Stream';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <Header/>
      <FundPool/>
      <MatchMaking/>
      <Stream/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
