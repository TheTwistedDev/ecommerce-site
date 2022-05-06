import { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiOutlineShop } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'

export const Cart = () => {
    const cartRef = useRef()
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove} = useStateContext()

    const handleCheckout = async () => {
        const stripe = await getStripe()

        const response = await fetch('/api/stripe', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        })

        if(response.statusCode === 500) return
        
        const data = await response.json()
        toast.loading('Redirecting....')
        stripe.redirectToCheckout({ sessionId: data.id })
    }

  return (
    <div className="absolute top-0 right-0 w-screen h-screen bg-white border-b border-l shadow-lg md:w-7/12 lg:w-4/12" ref={cartRef}>
        <div className="">
            <button className="flex items-center mt-12 ml-8" type="button" onClick={() => setShowCart(false)}>
                <AiOutlineLeft />
                <span className="mx-4 font-medium">Your Cart</span>
                <span className="font-medium text-red-600">({totalQuantities} items)</span>
            </button>
            
            {cartItems.length < 1 && (
                <div className="flex flex-col items-center mt-12">
                    <AiOutlineShopping size={150}/>
                    <h3 className="font-medium"> Your Shopping Cart is Empty</h3>
                    <Link href="/">
                        <button className="px-24 py-2 mt-6 font-medium text-white bg-red-600 rounded-xl"type="button" onClick={() => setShowCart(false)}>
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            )}

            <div>
                {cartItems.length >= 1 && cartItems.map((item) => (
                    <div key={item._id} className="grid grid-cols-2 m-14">
                        <img className="bg-gray-200 rounded-xl"height={150} width={150} src={urlFor(item?.image[0])}/>
                        <div className="">
                            <div className="mb-12 ">
                                <h5 className="ml-6 text-xl font-bold text-slate-500">{item.name}</h5>
                                <h4 className="absolute right-0 pr-10 text-lg font-bold text-slate-500">${item.price}</h4>
                            </div>
                            <div>
                                <p className="grid grid-cols-3 border divide-x divide-black shadow-sm">
                                    <span className="flex items-center justify-center my-3 text-slate-700" onClick={() => toggleCartItemQuantity(item._id, 'decrement')}><AiOutlineMinus className="cursor-pointer" /></span>
                                    <span className="flex items-center justify-center text-slate-700">{item.quantity}</span>
                                    <span className="flex items-center justify-center text-slate-700" onClick={() => toggleCartItemQuantity(item._id, 'increment')}><AiOutlinePlus className="cursor-pointer" /></span>
                                </p>
                            </div>  
                            <button type="button" className="absolute right-0 pr-4 text-red-600" onClick={() => onRemove(item)}><TiDeleteOutline size={25}/></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {cartItems.length >= 1 && (
                <div className="absolute bottom-0 w-full mb-10 space-y-6">
                    <div className="flex">
                        <h3 className="pl-12 text-xl font-bold">Subtotal:</h3>
                        <h3 className="absolute right-0 pr-12 text-xl font-bold">${totalPrice}</h3>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="w-1/2 py-2 text-lg font-bold text-white duration-200 bg-red-600 rounded-xl hover:scale-105" onClick={handleCheckout}>
                            Pay With Stripe
                        </button>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Cart