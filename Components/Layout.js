import Head from "next/head";
import Header from "./Header";

export default function Layout({children, title, keywords}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header/>
            <main className="bg-gray-200"> 
                {children}
            </main>
        </div>
    )
}

Layout.defaultProps = {
    title: "Up Town Jamaican Recipes",
    keywords: 'jamaica, jamaican recipes, food, uptown'
} 