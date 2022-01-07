import Layout from "../Components/Layout";

export default function AboutPage() {
    return (
        
            <Layout title='About UPTOWN'>
                <h3 className="text-5xl font-bold m-4">About Us</h3>
                <div className="shadow-md rounded-lg m-4 p-7 justify-content">
                    <h4 className="text-2xl my-4">Uptown Cook Shop</h4>
                        <p>Built with NextJS</p>
                        <p className="font-bold my-4"> copyright something something</p>
                </div>
            </Layout>
        
    )
}
