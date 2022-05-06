import Link from "next/link"
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="bg-gray-300 ">
     
     <div className="lg:grid-cols-3 lg:grid sm:flex sm:flex-col sm:items-center">
      {/* left */}  
      <div className="col-span-1 p-4 mx-auto my-auto">
          <p className="text-lg">{heroBanner.smallText}</p>
          <h3 className="text-6xl font-bold">{heroBanner.midText}</h3>
          <h1 className="font-bold text-white text-9xl">{heroBanner.largeText1}</h1>
          <div className="mt-4">
            <Link href={`product/${heroBanner.product}`}>
              <button type="button" className="pt-2 pb-2 pl-4 pr-4 text-white duration-200 bg-red-600 rounded-xl hover:scale-105">{heroBanner.buttonText}</button>
            </Link>
          </div>
        </div>
      {/* center */}
      <div className="col-span-1">
        <img src={urlFor(heroBanner.image)} alt="headphones" className=" w-min h-min"/>
      </div>
      {/* right */}
      <div className="flex flex-col items-center col-span-1">
            <h5 className="pb-2 font-bold text-cyan-900">Description:</h5>
            <p className="mb-4 font-light">{heroBanner.description}</p>
        </div>
     </div>
    </div>
  )
}
export default HeroBanner