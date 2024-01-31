'use client'
import View from './view.js';
import Card2 from './card2.js';
import { useState } from 'react';
const Card = () => {

let [count, setCount]=useState(0);
  return (
    <>
    <View />
    <div className="card1 mt-4">
      <h3 className="inline font-semibold">Fruits & vegetables</h3>
      <div class="w-10 border border-orange-500 bg-orange-500 mt-2"></div>
      <div className=" border border-1  border-[rgba(173,213,102)] rounded-md mt-5">
        <h1 className="bg-gradient-to-r from-[rgba(255,255,255)] to-[rgba(173,213,102)] text-[#476F00] h-10 p-2">
          Har Din Sasta!
        </h1>

<div className="med:flex mt-2 mx-10 gap-[22%]">
        <div className="flex">
          <div className='med:w-[40%] h-[40%]'>
            <img
              src="https://www.bigbasket.com/media/uploads/p/l/10000089_19-fresho-coccinia.jpg"
              className="med:pt-5"
            ></img>
          </div>


          <div className="flex flex-col justify-center med:text-lg med:py-12 med:pl-14 small:text-xs small:p-4">
            <h2>Coccinia</h2>
            <p><b>₹36.00</b> &nbsp;<h5 className='line-through inline-block text-[#909090]'>₹40</h5></p>
          </div>
        </div>


        <section className="flex med:w-[100%] med:gap-14 med:pt-[10px] small:w-[50%]">
          <div className="med:py-14 med:pl-14 med:pr-0 small:p-0 ">
          <div className="flex hover:shadow-xl shadow-black border border-stone-400 hover:border-2 med:gap-10 med:w-[100%] px-3 rounded-md small:w-[90%] ">
            <button className='hover:bg-red-500 w-10 h-7 mt-1.5 rounded-md' onClick={()=>setCount(count-1 )}>-</button>
            <h2 className="m-2">{count}</h2> 
            <button className='hover:bg-red-500 w-10 h-7 mt-1.5 rounded-md' onClick={()=>setCount(count + 1)}>+</button>
          </div>


          <div className='med:mt-2 med:text-xs text-center text-stone-500 small:text-[8px]'>
            <button>Delete |&nbsp;</button>

            <button> Save for Later</button>
          </div>
          </div>
          <div className='flex flex-col med:pt-[17%] med:text-[15px] small:pt-0 small:text-xs'>
            <h1><b>₹36
              </b></h1><br />
            <p className="text-stone-500">Saved: ₹34</p>
          </div>
        </section>
        </div>    
      </div>
    </div>
    <Card2 />
    </>
  );
};

export default Card;

