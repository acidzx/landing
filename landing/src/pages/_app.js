import "@/styles/globals.css";

import { motion } from "framer-motion";
// import { AppProps } from "next/app";

// import { ThemeProvider } from "next-themes";

import { useEffect } from "react";
import analytics from "@/utility/analytics";
import Head from "next/head";
import Layout from "@components/layout";

export const scrollIntoTheView = (id) => {
  if (typeof window !== "undefined") {
    let element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    analytics.page();
    // this will fire the Page Track function on every new router change.
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: { opacity: 1 },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </>
  );
}
