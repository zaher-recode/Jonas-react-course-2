import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

function Steps({ step, handlePrevious, handleNext }) {
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

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    setStep(step + 1);
  }

  function handlePrevious() {
    setStep(step - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && <Steps step={step} handleNext={handleNext} handlePrevious={handlePrevious} />}
    </>
  );
}
