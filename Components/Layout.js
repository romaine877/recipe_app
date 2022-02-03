import Head from "next/head";
import React from "react";
import ConstructionOverlay from "./ConstructionOverlay";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col justify-between">
        <Head>
          <title>The BEST cookshop Uptown</title>
          <link rel="icon" href="/favicon.ico" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="The BEST cookshop Uptown" />
          <meta
            name="keywords"
            content="cook, shop, cookshop, uptown, food, jamaica"
          />
          <meta name="author" content="Romaine Halstead" />
        </Head>
        <Navbar />
        {children}
      </div>
      <ConstructionOverlay/>
    </>
  );
}
