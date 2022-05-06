import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
  
  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
  }, [])

  return (
    <div className="w-9/12 m-auto my-24 bg-gray-200 rounded-2xl">
      <div className="flex flex-col items-center p-24 space-y-4">
        <p className="text-green-600 ">
          <BsBagCheckFill size={50}/>
        </p>
        <h2 className="text-3xl font-extrabold text-slate-600">Thank You For Your Order!</h2>
        <p className="">Check your email for the receipt.</p>
        <p className="">
          If you have any questions, please email
          <a className="ml-2 font-medium text-red-600" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="p-3 font-medium text-white duration-200 bg-red-600 w-96 rounded-xl hover:scale-105">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}
export default success