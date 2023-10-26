import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import usePageLoad from "../utils/useLoading";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)

  // }, []);

  // useEffect(() => {
  //   const start = () => {
  //     console.log("start");
  //     setLoading(true);
  //   }
  //   const end = () => {
  //     console.log("end");
  //     setLoading(false);
  //   }

  //   Router.events.on('routeChangeStart', start);
  //   Router.events.on('routeChangeComplete', end)
  //   Router.events.on('routeChangeError', end)

  //   return () => {
  //     Router.events.off('routeChangeStart', start)
  //     Router.events.off('routeChangeComplete', end)
  //     Router.events.off('routeChangeError', end)
  //   }
  // }, []);
  // useEffect(() => {
  //   const start = () => {
  //     console.log("start");
  //     setLoading(true);
  //   };
  //   const end = () => {
  //     console.log("findished");
  //     setLoading(false);
  //   };
  //   Router.events.on("routeChangeStart", start);
  //   Router.events.on("routeChangeComplete", end);
  //   Router.events.on("routeChangeError", end);
  //   return () => {
  //     Router.events.off("routeChangeStart", start);
  //     Router.events.off("routeChangeComplete", end);
  //     Router.events.off("routeChangeError", end);
  //   };
  // }, []);

  const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleChangeStart = (url: string) => {
            if (url === "<root_to_show_loading>") {
                setIsLoading(true);
            }
        };

        const handleChangeEnd = (url: string) => {
            if (url === "<root_to_show_loading") {
                setIsLoading(false);
            }
        };

        router.events.on("routeChangeStart", handleChangeStart);
        router.events.on("routeChangeComplete", handleChangeEnd);
        router.events.on("routeChangeError", handleChangeEnd);
    }, []);
  return (
    <>
      {isLoading ? (
      <p>Loading</p>
    ) : (
      <ThirdwebProvider
      clientId={process.env.CLIENT_ID}
      // sdkOptions={{
      //   gasless: {
      //     openzeppelin: {
      //       relayerUrl: "https://api.defender.openzeppelin.com/autotasks/37ac3e97-b426-40b2-b0f4-ab374ea93172/runs/webhook/d9e2c4ea-2ed0-4015-a9b3-e2c43a8c0316/M53AcGh6MXj7ToUwFabcuk",
      //     }
      //   }
      // }}
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
    )}
    </>
  );
}

export default MyApp;
