import Link from "next/link"

const HeroBanner = () => {
  return (
    <div className="bg-gray-300 ">
      <div className="flex flex-col pt-20 pl-10 pb-60">
        <p className="text-lg">SMALL TEXT</p>
        <h3 className="font-bold text-6xl">MID TEXT</h3>
        <img src="" alt="headphones" />
        <div>
          <Link href="product/ID">
            <button type="button" className="text-white rounded-xl bg-red-600 pl-4 pr-4 pt-2 pb-2">BUTTON TEXT</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-end mr-60 ">
          <h5 className="font-bold text-cyan-900 pb-4">Description</h5>
          <p className="font-thin pb-8">DESCRIPTION</p>
        </div>
     
    </div>
  )
}
export default HeroBanner