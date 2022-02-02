import Head from "next/head";
import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children, title, keywords}) {
    return (
        <div>
            <div className=" flex flex-col justify-between h-screen backdrop-blur-md">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content={keywords} />
            </Head>

            <Header/>
            <main> 
                {children}
            </main>
            <Footer/>
            <div className="fixed h-screen w-screen flex justify-center z-40">
                    <div className="top-0" >
                        <Image src="/images/under-construction.png"
                        height={152}
                        width={250}
                        alt="Under Construction"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: "Up Town Jamaican Recipes",
    keywords: 'jamaica, jamaican recipes, food, uptown'
} 