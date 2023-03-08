import React, { useState } from 'react';
import ButtonBox from '../buttonBox/ButtonBox'
import Display from '../display/Display'
import "./box.css"

export default function Box() {

    const [displayText, setDisplayText] = useState('');
    console.log(displayText);

  return (
    <div id="calcultor">
        <Display text={displayText} />
        <ButtonBox setDisplayText={setDisplayText} displayText={displayText} />
    </div>
  )
 
}
