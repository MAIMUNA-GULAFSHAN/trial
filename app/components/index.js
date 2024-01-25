import Checkbtn from './checkoutbutton';
const Comp = () => {
  return (
    <>
    <section className='bg-black flex justify-between px-[4%] w-[60%] rounded-md'>
        <right className='m-3'>
       <h1 className="text-white">Subtotal (1 item) : 9.00</h1>
        <h3 className="text-lime-500 font-bold bg-gradient-to-r from-gray-900 to-stone-600 rounded-md">Savings: 4.00</h3>
    </right>
    <left>
     <Checkbtn />
    </left>
    </section>
    </>
  )
}

export default Comp