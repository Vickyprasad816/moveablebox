import React, { useState } from 'react'
import './Box.css';
export default function Box() {
  const containerSize={ width:499,height:499}
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveBox = (direction) => {
    switch (direction) {
      case 'left':
        setPosition((prev) => ({ ...prev, left: prev.left - 50 }));
        break;
      case 'right':
        setPosition((prev) => ({ ...prev, left: prev.left + 50 }));
        break;
      case 'top':
        setPosition((prev) => ({ ...prev, top: prev.top - 50 }));
        break;
      case 'bottom':
        setPosition((prev) => ({ ...prev, top: prev.top + 50 }));
        break;
      default:
        break;
    }
  };
  const Buttondisabled = {
    left: position.left <= 0,
    right: position.left >= containerSize.width - 50,
    top: position.top <= 0,
    bottom: position.top >= containerSize.height - 50,

  }
  return (
    <div className="App">
      <div className="container">
        <div 
          className="block"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        ></div>
      
      </div>
    
    <div className='box'>
        <button onClick={() => moveBox('left')} disabled={Buttondisabled.left} className='Left'>Left</button>
        <button onClick={() => moveBox('top')} disabled={Buttondisabled.top} className='Top'> Up</button>
        <button onClick={() => moveBox('right')} disabled={Buttondisabled.right} className='Right'>Right</button>
        <button onClick={() => moveBox('bottom')} disabled={Buttondisabled.bottom} className='Bottom'>Bottom</button>
        </div>
    </div>
   
  )
}
