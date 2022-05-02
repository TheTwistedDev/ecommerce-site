import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="flex flex-col items-center my-16 font-bold text-slate-600">
        <p>2022 Example Ecommerce-Site All rights reserved</p>
        <p className="flex mt-2 space-x-4 text-4xl">
            <AiFillInstagram className="cursor-pointer"/>
            <AiOutlineTwitter className="cursor-pointer"/>
        </p>
    </div>
  )
}
export default Footer