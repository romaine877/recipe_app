import Layout from "../Components/Layout"
import Image from "next/image"
export default function NotFoundPage() {
    return (
        <Layout>

            <div className="flex flex-col items-center content-center mt-5">
                <Image src='/images/logo.jpg' width={100} height={100} alt="logo"/>
                <h3 className="text-5xl font-bold">Wah Gwaan Yahsuh?</h3>
                <p className="text-lg mt-3">This page does not exist</p>
            </div>

        </Layout>
    )
}
