import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

import { AuthContextProvider } from "../context/AuthContext";






export default function Home({ products }) {
  return (
    <AuthContextProvider>
      <div className="bg-gray-100">
        <Head>
          <title>Amazon</title>
        </Head>
        {/* {Header} */}
        <Header />

        <main className="max-w-screen-2xl mx-auto">
          {/* {Banner} */}

          <Banner />

          {/* {ProductFeed} */}

          <ProductFeed products={products} />
          
        </main>
      </div>
    </AuthContextProvider>
  );
}

export async function getStaticProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
    revalidate: 10, // Re-generate the page at most every 10 seconds
  };
}
