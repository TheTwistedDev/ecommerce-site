import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './Cart'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <div className="flex justify-between my-2">
        <p className="m-2 text-lg text-gray-500">
            <Link href="/">
                Example Ecommerce-Site
            </Link>
        </p>
        <button type="button" onClick={() => setShowCart(true)} className="flex mr-5 cursor-pointer duration-400 hover:scale-110">
            <AiOutlineShopping className="self-center w-8 h-8 text-gray-500" />
            <span className="absolute w-5 mt-1 ml-5 text-sm text-white bg-red-600 rounded-full">{totalQuantities}</span>
        </button>

        {showCart && <Cart /> }
    </div>
  )
}
export default Navbar