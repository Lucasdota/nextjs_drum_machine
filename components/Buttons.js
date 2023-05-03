import React, { useEffect } from "react";

export default function Buttons({power}) { 
    useEffect(() => {
        document.addEventListener("keydown", detectKeyDown, true);
        document.getElementById("heater").checked = true;
    }, []);

    const detectKeyDown = (e) => {
        const key = String.fromCharCode(e.keyCode).toUpperCase();
        const buttons = document.querySelectorAll(".drum-pad");     
        buttons.forEach((button) => {
            if (key === button.textContent) {
                button.click();     
            }
        })
    };

    function playAudio(id) {
        const audios = document.querySelectorAll(".clip");   
        audios.forEach((audio) => {
            if (audio.id === id) {
                audio.currentTime = 0;
                audio.play();
            }
        })     
    };

    function btnAnimation(btn) {
        btn.classList.replace("drop-shadow-[0px_2px_2px_rgb(252_211_77)]", "drop-shadow-[1px_1px_1px_rgb(50,50,50)]");
        btn.classList.replace("drop-shadow-[0px_2px_2px_black]", "drop-shadow-[1px_1px_1px_black]");
        btn.classList.toggle("translate-y-0.5");
        setTimeout(() => {
        btn.classList.replace("drop-shadow-[1px_1px_1px_rgb(50,50,50)]", "drop-shadow-[0px_2px_2px_rgb(252_211_77)]");
        btn.classList.replace("drop-shadow-[1px_1px_1px_black]", "drop-shadow-[0px_2px_2px_black]");
        btn.classList.toggle("translate-y-0.5");
        }, 100);
    };

    function displayText(desc) {
        const displayP = document.getElementById("display");  
        const fixedDesc = desc.replace(/-/g, " ");
        if (power) {
            displayP.textContent = fixedDesc;
        } else {
            displayP.textContent = "";
        }
    };
    
    return (
        <div className="grid grid-rows-3 grid-cols-3 gap-[9px] row-start-1 row-end-2 col-start-1 col-end-2 md:col-end-4 md:m-7 m-3">

            <button id="Heater-1"
                onClick={() => {
                    const btn = document.querySelector(".heater-1");
                    const desc = document.querySelector(".heater-1").id;
                    btnAnimation(btn);
                    displayText(desc);
                    playAudio("Q");
                }}
                className="drum-pad heater-1 text-lg md:w-[108px] md:h-[80px] font-bold rounded-lg drop-shadow-[0px_2px_2px_rgb(252_211_77)] bg-neutral-500 row-start-1 row-end-2 col-start-1 col-end-2">
                    Q
                <audio id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" className="clip" />
            </button>   

            <button id="Heater-2" onClick={() => {
                const btn = document.querySelector(".heater-2");
                const desc = document.querySelector(".heater-2").id;
                btnAnimation(btn);
                displayText(desc);
                playAudio("W");
                }}
                className="drum-pad heater-2 row-start-1 row-end-2 col-start-2 col-end-3 heater-2 text-lg md:w-[108px] md:h-[80px] font-bold rounded-lg drop-shadow-[0px_2px_2px_rgb(252_211_77)] bg-neutral-500">
                    W
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3" id="W" className="clip"/>
            </button>  

            <button id="Heater-3" onClick={() => {
                const btn = document.querySelector(".heater-3");
                const desc = document.querySelector(".heater-3").id;
                btnAnimation(btn);
                displayText(desc);
                playAudio("E");
                }}
                className="drum-pad heater-3 row-start-1 row-end-2 col-start-3 col-end-4 heater-3 text-lg md:w-[108px] md:h-[80px] font-bold rounded-lg drop-shadow-[0px_2px_2px_rgb(252_211_77)] bg-neutral-500">
                E
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mp3" id="E" className="clip"/>
            </button> 

            <button id="Heater-4" onClick={() => {
                const btn = document.querySelector(".heater-4");
                const desc = document.querySelector(".heater-4").id;
                btnAnimation(btn);
                displayText(desc);
                playAudio("A");
                }}
                className="drum-pad heater-4 row-start-2 row-end-3 col-start-1 col-end-2 heater-4 text-lg md:w-[108px] md:h-[80px] font-bold  rounded-lg drop-shadow-[0px_2px_2px_rgb(252_211_77)] bg-neutral-500">
                A
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mp3" id="A" className="clip"/>
            </button> 

            <button id="Clap" onClick={() => {
                const btn = document.querySelector(".clap");
                const desc = document.querySelector(".clap").id;
                btnAnimation(btn);
                displayText(desc);
                playAudio("S");
                }}
                className="drum-pad clap row-start-2 row-end-3 col-start-2 col-end-3 clap text-lg md:w-[108px] md:h-[80px] font-bold  rounded-lg drop-shadow-[0px_2px_2px_rgb(252_211_77)] bg-neutral-500">
                S
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mp3" id="S" className="clip"/>
            </button>   

            <button id="Open-HH" onClick={() => {
                const btn = document.querySelector(".open-hh");
                const desc = document.querySelector(".open-hh").id;
                btnAnimation(btn);
                displayText(desc);
                playAudio("D");
                }}
                className="drum-pad open-hh row-start-2 row-end-3 col-start-3 col-end-4 open-hh text-lg md:w-[108px] md:h-[80px] font-bold  rounded-lg drop-shadow-[0px_2px_2px_rgb(252_211_77)] bg-neutral-500">
                D
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3" id="D" className="clip"/>
            </button>   

            <button id="Kick-n'-Hat" onClick={() => {
                const btn = document.querySelector(".kick-n-hat");
                const desc = document.querySelector(".kick-n-hat").id;
                btnAnimation(btn);
                displayText(desc);
                playAudio("Z");
                }}
                className="drum-pad kick-n-hat row-start-3 row-end-4 col-start-1 col-end-2 kick-n'-Hat text-lg md:w-[108px] md:h-[80px] font-bold  rounded-lg drop-shadow-[0px_2px_2px_rgb(252_211_77)] bg-neutral-500">
                Z
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3" id="Z" className="clip"/>
            </button>   

            <button id="Kick" onClick={() => {
                const btn = document.querySelector(".kick");
                const desc = document.querySelector(".kick").id;
                btnAnimation(btn);
                displayText(desc);
                playAudio("X");
                }}
                className="drum-pad kick row-start-3 row-end-4 col-start-2 col-end-3 kick text-lg md:w-[108px] md:h-[80px] font-bold  rounded-lg drop-shadow-[0px_2px_2px_rgb(252_211_77)] bg-neutral-500">
                X
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mp3" id="X" className="clip"/>
            </button>   

            <button id="Closed-HH" onClick={() => {
                const btn = document.querySelector(".closed-hh");
                const desc = document.querySelector(".closed-hh").id;
                btnAnimation(btn);
                displayText(desc);
                playAudio("C");
                }}
                className="drum-pad closed-hh row-start-3 row-end-4 col-start-3 col-end-4 closed-hh text-lg md:w-[108px] md:h-[80px] font-bold  rounded-lg drop-shadow-[0px_2px_2px_rgb(252_211_77)] bg-neutral-500">
                C
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mp3" id="C" className="clip"/>
            </button>  

        </div>
    )    
}