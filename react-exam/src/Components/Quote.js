import React, { useState, useEffect } from 'react';
import './Quote.css';

const RandomQuoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/quotes');
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomQuote = data.results[randomIndex];
      setQuotes(randomQuote.content);
      setQuote(randomQuote.author);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleNextQuote = () => {
    setLoading(true);
    fetchRandomQuote();
  };

  return (
    <div className='Random_Quote'>
      <div className='generator'>
        <h1>Random Quote Generator</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='random'>
            <p className='line'>{quotes}</p>
            <p className='line1'>- {quote}</p>
          </div>
        )}
        <button className='next_Quote' onClick={handleNextQuote} disabled={loading}>
          Next Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
