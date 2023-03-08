import React  from 'react';
import Button from '../button/Button';
import './buttonBox.css';

export default function ButtonBox({setDisplayText,displayText}) {
  
    

    const handleButtonClick = (text) => {
        if(text === "AC"){
            setDisplayText("");
        }
        else if (text === '=') {
          try 
          {
            const result = eval(displayText);
            setDisplayText(result.toString());
          }
           catch (error) {
            console.log(error);
            setDisplayText('Error');
          }
        } 
        else {
          setDisplayText(displayText + text);
        }
      };

  return (
    <div id="buttonBox">
      <Button text="AC" onClick={ () => handleButtonClick('AC')} />
      <Button text="/" onClick={ () => handleButtonClick('/') }/>
      <Button text="X" onClick={() => handleButtonClick('*')} />
      <Button text="-" onClick={() => handleButtonClick("-")} />
      <Button text="+" onClick={() => handleButtonClick('+')} />
      <Button text="." onClick={() => handleButtonClick('.')} />
      <Button text="7" onClick={() => handleButtonClick('7')} />
      <Button text="8" onClick={() => handleButtonClick('8')} />
      <Button text="9" onClick={() => handleButtonClick('9')} />
      <Button text="4" onClick={() => handleButtonClick('4')} />
      <Button text="5" onClick={() => handleButtonClick('5')} />
      <Button text="6" onClick={() => handleButtonClick('6')} />
      <Button text="1" onClick={() => handleButtonClick('1')} />
      <Button text="2" onClick={() => handleButtonClick('2')} />
      <Button text="3" onClick={() => handleButtonClick('3')} />
      <Button text="0" onClick={() => handleButtonClick('0')} />
      <Button text="=" onClick={() => handleButtonClick('=')} />
    </div>
  );
}
