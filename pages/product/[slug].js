import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Product from '../../components/Product'
import { useState } from 'react'

const ProductDetails = ({ product, products}) => {
    const { image, name, description, price } = product
    const [index, setIndex] = useState(0)
  return (
    <div>
        <div>
           <div className="flex">
               <div className="flex flex-col">
                <div>
                    <img src={urlFor(image && image[index])} 
                    width={500}
                    height={500}
                    className="mx-12 bg-gray-200 rounded-2xl"
                        />
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                    {image?.map((item, i) => (
                        <img src={urlFor(item)}
                                width={100}
                                height={100}
                                className="duration-200 bg-gray-200 cursor-pointer rounded-2xl hover:scale-105"
                                onClick={() => setIndex(i)}
                            />
                    ))}
                </div> 
               </div>
               <div>
                   <h1 className="mt-16 text-3xl font-bold text-slate-600">{name}</h1>
                   <div className="flex items-center">
                       <div className="flex mr-2 text-red-600">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                       </div>
                       <p className="text-slate-400">
                           (20)
                        </p>
                   </div>
                   <h4 className="font-bold text-slate-600">Details: </h4>
                   <p className="text-slate-500">{description}</p>
                   <p className="my-4 text-xl font-bold text-red-600">${price}</p>
                   <div className="flex flex-col">
                       <h3 className="font-bold text-slate-600">Quantity: </h3>
                       <p className="grid grid-cols-3 my-2 border divide-x divide-black shadow-sm">
                           <span className="flex items-center justify-center my-3 text-slate-700" onClick=""><AiOutlineMinus className="cursor-pointer" /></span>
                           <span className="flex items-center justify-center text-slate-700" onClick="">0</span>
                           <span className="flex items-center justify-center text-slate-700" onClick=""><AiOutlinePlus className="cursor-pointer" /></span>
                       </p>
                   </div>
                   <div className="flex flex-col mt-10 space-y-10">
                       <button type="button" className="p-3 font-bold text-red-600 duration-200 border border-red-600 hover:scale-105" onClick="">Add to Cart</button>
                       <button type="button" className="p-3 font-bold text-white duration-200 bg-red-600 hover:scale-105" onClick="">Buy Now</button>
                   </div>
               </div>
           </div>
           <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-slate-600">You may also like</h2> 
                <div className="flex mt-24 space-x-4">
                    {products.map((item) => (
                        <Product key={item._id} product={item} />
                    ))}
                </div>  
           </div>
        </div>
    </div>
  )
}
export default ProductDetails

export const getStaticPaths = async () => {
    const query = `*[_type == 'product'] {
        slug {
            current
        }
    }`
    const products = await client.fetch(query)
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)
    return {
      props: { product, products }
    }
  }