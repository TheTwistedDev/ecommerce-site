import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({ banner: {discount, largeText1, largeText2, saleTime, smallText, midText,description, buttonText, image, product} }) => {
  return (
    <div className="w-11/12 mx-auto mt-24 text-white bg-red-600 rounded-2xl">
      <div className="py-10 ml-10 lg:grid-cols-3 lg:grid sm:flex sm:flex-col sm:items-center">
        {/* left */}
        <div className="col-span-1">
          <p>{discount}</p>
          <h3 className="text-6xl font-bold">{largeText1}</h3>
          <h3 className="text-6xl font-bold">{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
      {/* center */}
      <div className="col-span-1">
      <img  src={urlFor(image)} 
            alt="headphones" 
            width="250" 
            height="250"
            className=""/>
      </div>
      {/* right */}
      <div className="col-span-1">
        <p>{smallText}</p>
        <h3 className="text-6xl font-bold">{midText}</h3>
        <p className="mt-4">{description}</p>
        <Link href={`/product/${product}`}>
          <button type="button" className="p-2 mt-8 font-medium text-red-600 duration-200 bg-white rounded-xl hover:scale-105">{buttonText}</button>
        </Link>
      </div>
    </div>
    </div>
      
  )
}
export default FooterBanner