import logo from './logo.svg';
import './App.css';
import ImageCarousel from './Components/ImageCarousel'; 
import Accordion from './Components/Accordion';
import { Questions } from './Components/Data';

function App() {
  return (
    <div className="App">
     <ImageCarousel></ImageCarousel>


     <div className="container1">
      <h1>Frequently Asked Questions</h1>
      {Questions.map((element) => (
        <Accordion
          key={element.id}
          question={element.question}
          answer={element.answer}
        ></Accordion>
      ))};
    </div>
    </div>
    
  );
}

export default App;
