import React, { useState } from 'react';
import './Navbar';
import Navbar from './Navbar';
import './Accordion.css';


function Accordion({ question, answer }) {
    const [display, setDisplay] = useState(false);

    function toggleAnswer() {
        setDisplay(!display);
    }

    return (
        
        <div className='list'>

            {/* <Navbar></Navbar> */}
            <div>
                <div className='question'>
                    <div>{question}</div>
                    <button onClick={toggleAnswer}>Ans</button>
                </div>

                {display && <div className='answer'>{answer}</div>}
            </div>
        </div>
    );
}

export default Accordion;