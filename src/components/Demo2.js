import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Demo2 = () => {
  const [y, setY] = useState(0);
  const ref = useRef(0);

  let x = 0;
  const i = useRef();

  useEffect(() => {
    i.current = setInterval(() => { console.log("Samir Hey", Math.random()) }, 2000)
    return () => clearInterval(i.current);
  }, [])

  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
      <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            x = x + 1;
            console.log("X=" + x)
          }
          }>Increase x</button>
        <span className='font-bold text-xl' >let={x}</span>
      </div>
      <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            setY(y + 1);
            console.log("Y=" + y);
          }
          }>Increase y</button>
        <span className='font-bold text-xl' >State ={y}</span>
      </div>


      <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref=" + ref.current);
          }
          }>Increase ref</button>
        <span className='font-bold text-xl' >Ref ={ref.current}</span>
      </div>

      <button className='bg-red-900 p-4 m-4 text-white font-bold rounded-lg'
        onClick={() => {
          clearInterval(i.current);
        }}
      >Stop Printing</button>
    </div>
  )
}

export default Demo2