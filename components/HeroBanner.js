import Link from "next/link"
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="bg-gray-300 ">
      <div className="flex flex-col pt-20 pl-10 pb-60">
        <p className="text-lg">{heroBanner.smallText}</p>
        <h3 className="text-6xl font-bold">{heroBanner.midText}</h3>
        <h1 className="font-bold text-white text-9xl">{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="absolute self-center w-min h-min"/>
        <div>
          <Link href={`product/${heroBanner.product}`}>
            <button type="button" className="pt-2 pb-2 pl-4 pr-4 text-white bg-red-600 rounded-xl">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-end mr-60 ">
          <h5 className="pb-4 font-bold text-cyan-900">Description</h5>
          <p className="pb-8 font-light">{heroBanner.description}</p>
        </div>
     
    </div>
  )
}
export default HeroBanner