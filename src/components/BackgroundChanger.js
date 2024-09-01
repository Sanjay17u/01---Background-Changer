import React, { useState } from 'react'

function BackgroundChanger() {

    const [color, setColor] = useState('#ffffff')
    const [textColor, ] = useState('#000000');

    const handleColorChange = (event) => {
        const newColor = event.target.value
        setColor(newColor)
        document.documentElement.style.setProperty('--background-color', newColor);
    };

    const handleTextColorChange = (event) => {
        const newTextColor = event.target.value
        setColor(newTextColor)
        document.documentElement.style.setProperty('--text-color', newTextColor);
    };

    return (
      <>
  
        <div className="container-body" >
          <label htmlFor="textColor">Text Changer</label>
          <input type="color" id='textColor' name='textColor' value={textColor} onChange={handleTextColorChange} />
          <label htmlFor="bodyColor">Color Changer</label>
          <input type="color" id='bodyColor' name='bodyColor' value={color} onChange={handleColorChange} />
        </div>    
      
      </>
    );
  }

  export default BackgroundChanger