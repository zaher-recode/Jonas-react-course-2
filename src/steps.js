import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

export default function Steps() {
  const [step, setStep] = useState(1);

  function handleNext() {
    setStep((currentStep) => currentStep + 1);
  }

  function handlePrevious() {
    setStep((currentStep) => currentStep - 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>
      <div className="buttons">
        <button style={step === 1 ? {} : { backgroundColor: '#7950f2', color: 'white' }} onClick={step === 1 ? null : handlePrevious}>
          Previous
        </button>
        <button style={step === 3 ? {} : { backgroundColor: '#7950f2', color: 'white' }} onClick={step === 3 ? null : handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
