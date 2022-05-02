import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price} }) => {
  return (
    <div className="duration-200 cursor-pointer hover:scale-105">
        <Link href={`/product/${slug.current}`}>
            <div>
                <img 
                src={urlFor(image && image[0])} 
                alt=""
                width={250}
                height={250}
                className="bg-gray-200 rounded-3xl"
                />
                <div className="mt-2 font-medium">
                    <p>{name}</p>
                    <p className="font-extrabold">${price}</p>
                </div>
            </div>
        </Link>

    </div>
  )
}
export default Product