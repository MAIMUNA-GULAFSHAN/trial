import React from 'react'

const View = () => {
  return (
    <div className='flex w-[95%] justify-between text-[#909090] font-semibold mt-3'>
        <div >Items (3 item)</div>
        <div className='flex w-[30%] justify-between'>
            <h3>Quantity</h3>
            <h3>Sub-total</h3>
        </div>
    </div>
  )
}

export default View