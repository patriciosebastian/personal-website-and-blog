import Head from "next/head";
import React from "react";
import HomeLayout from "../components/HomeLayout";

export default function Index() {
  return (
    // <body className="body">
    <main className="main h-full box-border scroll-smooth m-0 p-0 font-poppins">
      <section className="section">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          {/* <link rel="stylesheet" href="./home/style.css" /> */}
          <title>Patricio Salazar's Portfolio</title>
        </Head>
        <div className="div">
          <p className="p">Patricio Salazar</p>
          <h1 className="h1">Frontend Developer</h1>
          <p className="p">Coming Soon</p>
          <a className="a" href="http://localhost:3000/blog" target="_blank">
            <span className="span cta">Visit My Blog </span>
            <img
              className="img arrow"
              src="./img/east_white_24dp.svg"
              alt="arrow pointing east"
            />
          </a>
        </div>
      </section>
    </main>
    // </body>
  );
}

Index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
