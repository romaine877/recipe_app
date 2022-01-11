import Image from 'next/image'
import Layout from '../Components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Home() {
  const router = useRouter()
  return (
    <Layout>
      <div className='container mx-auto p-20'>
        <div className='flex flex-col-reverse lg:flex-row justify-between'>
          <div className=' lg:w-1/2 mt-5 pr-5'>
            <h1 className='text-3xl lg:text-7xl font-bold leading-tight'>
          Let's Start <br/> Cooking With Popular Recipes
        </h1>
        <p className='text-xl font-semibold text-slate-500 py-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex flex-col m-2 md:flex-row">

        <Link href='/recipes'>
        <button className='mb-4 md:mb-0 md:mr-4 bg-green-600 rounded-lg py-2 px-5 text-gray-50 transition ease-in hover:scale-110 hover:bg-yellow-400 hover:text-gray-900'>Get Cooking</button>
        </Link>
        <Link href='/about'>
        <button className='md:mr-4 border-4 border-yellow-400 rounded-lg py-2 px-5 text-gray-900 transition ease-in hover:scale-110 hover:border-green-600'>Explore Menu</button>
        
        </Link>
          </div>


          </div>
        <div>
        <Image src='/images/food.png'  width={600} height={600}/>
        </div>
        </div>
        
        
        

     </div>
    </Layout>
  )
}
