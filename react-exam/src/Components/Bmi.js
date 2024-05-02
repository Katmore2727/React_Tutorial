import React, { useState, useMemo } from 'react';
import './Bmi.css';

const BMI_Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100; // Convert height from cm to meters
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2)); // Round to 2 decimal places
  };

  const bmiInterpretation = useMemo(() => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 24.9 && bmi < 29.9) return 'Overweight';
    if (bmi >= 29.9) return 'Obese';
    return '';
  }, [bmi]);

  return (
    
    <div className='Bmi_Calculator'>
      <h1>BMI Calculator</h1>
      <div className='input-group'>
        <label>Weight (kg):</label>
        <input
          type='number'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder='Enter weight in kilograms'
        />
      </div>
      <div className='input-group'>
        <label>Height (cm):</label>
        <input
          type='number'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder='Enter height in centimeters'
        />
      </div>
      <button className='calculate' onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className='result'>
          <h2>Your BMI:</h2>
          <p>{bmi}</p>
          <p className='interpretation'>{bmiInterpretation}</p>
        </div>
      )}
    </div>
  );
};

export default BMI_Calculator;
