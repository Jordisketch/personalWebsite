import './dark.scss'
import React, { useState } from 'react';



const Darkmode = () => {

    const [colorchanger, setColorChanger] = useState(0);

    const changeColor = (event) => {
        setColorChanger(colorchanger + 1);
        if (colorchanger % 2 == 0) {
            document.getElementById('bot').style.backgroundColor = 'grey';
            document.querySelector('html').style.backgroundColor = 'black';
        } else {
            document.getElementById('bot').style.backgroundColor = 'black';
            document.querySelector('html').style.backgroundColor = 'white';
            document.querySelector('h1,h2,h3').style.color = 'white';
        }


    }


    return (

        <div>


            <button id='bot' onClick={() => changeColor()}>
                <h1>Ligth/Dark</h1>
            </button>

        </div>


    );



}

export default Darkmode;