import Image from "next/image";
import Layout from "../Components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div className="container mx-auto p-20">
        <div className="flex flex-col-reverse lg:flex-row justify-between mb-10">
          <div className=" lg:w-1/2 mt-5 pr-5">
            <h1 className="text-3xl lg:text-7xl font-bold leading-tight text-center md:text-left">
              Let's Start <br /> Cooking With Popular Recipes
            </h1>
            <p className="text-xl font-semibold text-slate-500 py-5 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex flex-col m-2 md:flex-row">
              <Link href="/recipes">
                <button className="mb-4 md:mb-0 md:mr-4 bg-green-600 rounded-lg py-2 px-5 text-gray-50 transition ease-in hover:scale-110 hover:bg-yellow-400 hover:text-gray-900">
                  Get Cooking
                </button>
              </Link>
              <Link href="/about">
                <button className="md:mr-4 border-4 border-yellow-400 rounded-lg py-2 px-5 text-gray-900 transition ease-in hover:scale-110 hover:border-green-600">
                  Explore Menu
                </button>
              </Link>
            </div>
          </div>
          <div>
            <Image src="/images/food.png" width={600} height={600} />
          </div>
        </div>
        
        <div className="my-16">
          <h2 className="text-3xl font-bold text-center my-5">
            Popular Recipes
          </h2>
          <p className="text-center text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          
        <div className="my-16 flex flex-col md:flex-row md:justify-evenly items-center">
          <div className=" w-64 text-center p-5 pb-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition ease-in bg-white my-10 m-5">
            <Image src="/images/steak.png" width={200} height={200}></Image>
            <h3 className="text-xl font-bold text-center my-5">
              Steak
            </h3>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" w-64 text-center p-5 pb-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition ease-in bg-white my-10 m-5">
            <Image src="/images/fried-chicken.png" width={200} height={200}></Image>
            <h3 className="text-xl font-bold text-center my-5">
              Fried Chicken
            </h3>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" w-64 text-center p-5 pb-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition ease-in bg-white my-10 m-5">
            <Image src="/images/salad.png" width={200} height={200}></Image>
            <h3 className="text-xl font-bold text-center my-5">
              Steak
            </h3>
            <p className="text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
}
