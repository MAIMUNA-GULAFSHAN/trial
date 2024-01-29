import Card from './card';
import Checkbtn from './checkoutbutton';
const Comp = () => {
  return (
      <div className=' flex flex-col gap-3 justify-center px-[15%]'>
    <section className='bg-black flex justify-between items-center p-[2%] rounded-md'>
        <right>
       <h1 className="text-white">Subtotal (1 item) : 9.00</h1>
        <h3 className="text-lime-500 font-bold bg-gradient-to-r from-gray-900 to-stone-600 rounded-md">Savings: ₹4.00</h3>
    </right>
    <left>
     <Checkbtn />
    </left>

    </section>

    <section>
      <Card/>
    </section>
    </div >
    
  )
}

export default Comp