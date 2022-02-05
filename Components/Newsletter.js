import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="rounded-3xl bg-red-300">
      <div className="relative ">
        
        <div className="m-5 flex flex-col  p-10 text-center space-y-3">
          <h1 className="text-3xl font-bold z-50 text-white">Join our newsletter to get yearly updates.</h1>
          <p className="z-50 text-white">
            We will send you a weekly newsletter with recipes, news and more.
          </p>
          <form className="z-50 flex flex-col items-center space-y-3">
            <input
              className="p-2 rounded-lg border-2 border-gray-300"
              type="email"
              placeholder="Your email"
            />
            <button className="w-36 mb-4 md:mb-0 bg-green-600 rounded-lg py-2 px-5 text-gray-50 transition ease-in hover:scale-110 hover:bg-yellow-400 hover:text-gray-900">
                  Sign Up
                </button>
          </form>
        </div>
        <div className="-z-10">
        <Image src="/images/newsletter.jpg" layout="fill" objectFit="cover" alt="newsletter" />
        </div>
        
      </div>
    </div>
  );
}
