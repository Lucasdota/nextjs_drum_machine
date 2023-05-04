import React, { useState } from 'react';
import Buttons from '@/components/Buttons';
import Controls from '@/components/Controls';
import Head from 'next/head';

export default function Home() {
  const [power, setOnOff] = useState(true);

  return (
    <>
      <Head>
      <title>React Drum Machine | Built in Nextjs and TailwindCSS</title>       
          <meta name="description" content="A React drum pad machine with some cool tweak options. Built using Nextjs and TailwindCSS." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/music.png" />
      </Head>
      <main id="main" className="w-screen h-screen bg-neutral-600 flex justify-center items-center">
        <title className="absolute hidden">A Drum Machine! Play it with the keys Q, W, E, A, S, D, Z, X and C</title>
        <div id="drum-machine" className="w-[350px] md:w-[680px] bg-neutral-400 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-5 border-4 border-amber-500 ">
          <Buttons power={power} />
          <Controls power={power} setOnOff={setOnOff} />
        </div>
        <p className="text-neutral-100 tracking-wider absolute bottom-3 md:right-5">A Front End Project - by Lucasdt</p>
      </main>
    </>
    
  )
}
