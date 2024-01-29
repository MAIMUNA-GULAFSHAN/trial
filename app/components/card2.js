import React from 'react'

const Card2 = () => {
  return (
    <>
    <div className="card1 mt-4">
      <h3 className="inline font-semibold">Fruits & vegetables</h3>
      <div class="w-10 border border-orange-500 bg-orange-500 mt-2"></div>
      <div className=" border border-1  border-[rgba(173,213,102)] rounded-md mt-5">
        <h1 className="bg-gradient-to-r from-[rgba(255,255,255)] to-[rgba(173,213,102)] text-[#476F00] h-10 p-2">
          Har Din Sasta!
        </h1>

<div className="flex justify-between  mt-2 mx-10">
        <div className="flex">
          <div>
          <img src="https://www.bigbasket.com/media/uploads/p/l/10000164_14-fresho-radish-white.jpg"
              className="h-40 w-30"
            ></img>
          </div>


          <div className="flex flex-col justify-center p-12">
            <h2>Radish</h2>
            <p><b>₹40.00</b>&nbsp;<h5 className='line-through inline-block text-[#909090]'>₹50</h5></p>
          </div>
        </div>


        <section className="flex">
          <div className="p-14">
          <div className="flex border border-stone-400 gap-10 px-3 rounded-md ">
            <button className='hover:bg-red-500 w-10 h-7 mt-1.5 rounded-md'>-</button>
            <h2 className="m-2">2</h2> 
            <button className='hover:bg-red-500 w-10 h-7 mt-1.5 rounded-md'>+</button>
          </div>


          <div className='mt-2 text-xs text-center text-stone-500'>
            <button>Delete |&nbsp;</button>
            <button> Save for Later</button>
          </div>
          </div>
          <div className='flex flex-col pt-[20%]'>
            <h1><b>₹40
              </b></h1>
            <p className="text-stone-500">Saved: ₹10</p>
          </div>
        </section>
        </div>    
      </div>
    </div>
    </>
  )
}

export default Card2

