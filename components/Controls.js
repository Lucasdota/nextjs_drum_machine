import React from "react";
import { MusicNotesPlus, SpeakerSimpleX, SpeakerSimpleHigh, HandsClapping, PianoKeys } from "@phosphor-icons/react";

export default function Controls({power, setOnOff}) {

    function handleClick() {
        const powerBtn = document.getElementById("power");
        const innerSwitch = document.getElementById("inner-switch");
        const buttons = document.querySelectorAll(".drum-pad");
        const audios = document.querySelectorAll(".clip");
        const display = document.getElementById("display-container");
        if (power) {
            powerBtn.classList.remove("drop-shadow-[0px_0px_2px_rgb(253_230_138)]", "border-amber-300");
            powerBtn.classList.add("border-zinc-500");
            innerSwitch.classList.remove("bg-amber-500");
            innerSwitch.classList.add("float-right", "bg-zinc-500");
            display.classList.remove("drop-shadow-[0px_0px_2px_rgb(253_230_138)]");
            display.classList.toggle("border-zinc-500");
            buttons.forEach((button) => {
                button.classList.toggle("drop-shadow-[0px_2px_2px_rgb(252_211_77)]");
                button.classList.toggle("drop-shadow-[0px_2px_2px_black]");
            });
            audios.forEach((audio) => {
                audio.muted = true;
            });
            document.getElementById("display").textContent = "";
            setOnOff(false);
        } else {
            powerBtn.classList.add("drop-shadow-[0px_0px_2px_rgb(253_230_138)]", "border-amber-300");
            powerBtn.classList.remove("border-zinc-500");
            innerSwitch.classList.add("bg-amber-500");
            innerSwitch.classList.remove("float-right", "bg-zinc-500");
            display.classList.add("drop-shadow-[0px_0px_2px_rgb(253_230_138)]", "border-amber-300");
            display.classList.toggle("border-zinc-500");
            buttons.forEach((button) => {
                button.classList.toggle("drop-shadow-[0px_2px_2px_black]");
                button.classList.toggle("drop-shadow-[0px_2px_2px_rgb(252_211_77)]");
            });
            audios.forEach((audio) => {
                audio.muted = false;
            });
            setOnOff(true);
        }
    }

    function changeVolume(event) {
        const volume = event.target.value;
        const display = document.getElementById("display");
        display.textContent = "Volume: " + volume;
        const audios = document.querySelectorAll(".clip");
        audios.forEach((audio) => {
            audio.volume = volume / 100;
        });
    }

    function switchToHeater() {
        const display = document.getElementById("display");
        display.textContent = "Heater Kit";
        document.querySelector("audio#Q").src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
        document.querySelector("audio#W").src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
        document.querySelector("audio#E").src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
        document.querySelector("audio#A").src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
        document.querySelector("audio#S").src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
        document.querySelector("audio#D").src = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
        document.querySelector("audio#Z").src = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
        document.querySelector("audio#X").src = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
        document.querySelector("audio#C").src = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
        document.querySelector(".heater-1").id = "Heater-1";
        document.querySelector(".heater-2").id = "Heater-2";
        document.querySelector(".heater-3").id = "Heater-3";
        document.querySelector(".heater-4").id = "Heater-4";
        document.querySelector(".clap").id = "Clap";
        document.querySelector(".open-hh").id = "Open-HH";
        document.querySelector(".kick-n-hat").id = "Kick-n'-Hat";
        document.querySelector(".kick").id = "Kick";
        document.querySelector(".closed-hh").id = "Closed-HH";
    }

    function switchToPiano() {
        const display = document.getElementById("display");
        display.textContent = "Smooth Piano Kit";
        document.querySelector("audio#Q").src = "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3";
        document.querySelector("audio#W").src = "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3";
        document.querySelector("audio#E").src = "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3";
        document.querySelector("audio#A").src = "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3";
        document.querySelector("audio#S").src = "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3";
        document.querySelector("audio#D").src = "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
        document.querySelector("audio#Z").src = "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3";
        document.querySelector("audio#X").src = "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3";
        document.querySelector("audio#C").src = "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3";
        document.querySelector(".heater-1").id = "Chord-1";
        document.querySelector(".heater-2").id = "Chord-2";
        document.querySelector(".heater-3").id = "Chord-3";
        document.querySelector(".heater-4").id = "Shaker";
        document.querySelector(".clap").id = "Open-HH";
        document.querySelector(".open-hh").id = "Closed-HH";
        document.querySelector(".kick-n-hat").id = "Punchy-Kick";
        document.querySelector(".kick").id = "Side-Stick";
        document.querySelector(".closed-hh").id = "Snare";
    }

    return (       
        <div className="row-start-2 md:row-start-1 row-end-3 md:row-end-2 col-start-1 md:col-start-4 col-end-2 md:col-end-6 flex flex-col justify-center items-center gap-4 font-bold"> 

            <div className="flex flex-col justify-center items-center ">
                Power
                <button aria-label="Power on: click to switch between states, turning on and off the sound." id="power" onClick={handleClick} className="w-14 h-6 bg-black p-1 drop-shadow-[0px_0px_2px_rgb(253_230_138)] border-amber-300 border">
                    <div id="inner-switch" className="mx-1 w-[16px] h-full bg-amber-500"></div>
                </button>
            </div>

            <i alt="music note icon"><MusicNotesPlus size={28} weight="fill" className="float-right" /></i>

            <div id="display-container" className="w-2/3 h-11 bg-neutral-400 border drop-shadow-[0px_0px_2px_rgb(253_230_138)] border-amber-300 flex justify-center items-center">
                <p aria-label="displays the previous sound played" id="display"></p>
            </div>

            <label for="volume-bar" id="volume-container" className="flex gap-2 justify-center items-center">
                <SpeakerSimpleX size={20} weight="fill" alt="muted speaker icon" />
                <input aria-label="Control the volume" id="volume-bar" className="hover:opacity-100 opacity-70 w-full h-1 rounded-lg bg-neutral-300 shadow-[1px_1px_3px_black]" type="range" onChange={changeVolume} />
                <SpeakerSimpleHigh size={20} weight="fill" alt="loud speaker icon" />
            </label>

            <fieldset id="switch-container" className="flex justify-center items-center md:mb-0 mb-5">
                <label for="heater" className="mr-3 flex justify-center items-center">
                    <input aria-label="Select heater kit" className="checked:drop-shadow-lg" id="heater" type="radio" value="heater" name="switch" onClick={switchToHeater} />
                </label> 
                <label for="piano" className="ml-3 flex justify-center items-center gap-2">
                    <input aria-label="Select smooth piano kit" className="checked:drop-shadow-lg" id="piano" type="radio" value="piano" name="switch" onClick={switchToPiano} />
                </label>
            </fieldset>
        </div>
    )
}