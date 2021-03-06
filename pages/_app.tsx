import type { ReactElement, ReactNode } from "react";
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { BlogLayout } from "../components";
import "../styles/globals.css";
import "../styles/globals.scss";
// import "../styles/style.css";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
