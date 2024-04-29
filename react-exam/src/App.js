// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ImageCarousel from './Components/ImageCarousel'; 
import Accordion from './Components/Accordion';
import { Questions } from './Components/Questions';
import Quote from './Components/Quote';
import Search from './Components/Search';
import Video from './Components/Video';
import Bmi from './Components/Bmi';
import Home from './Components/Home';
import Accordion1 from './Components/Accordion1';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/image carousel' element={<ImageCarousel />} />
          <Route path='/accordion' element={<Accordion1 />} />
          <Route path='/quote' element={<Quote />} />
          <Route path='/search' element={<Search />} />
          {/* <Route path='/video' element={<Video />} /> */}
          <Route path='/bmi' element={<Bmi />} />
        </Routes>
    
    </div>
    
  );
}

export default App;
