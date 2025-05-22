import { useState } from 'react';
import Steps from './steps';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}>
        &times;
      </button>
      {isOpen && <Steps />}
    </>
  );
}
