import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import "../styles/globals.css";
import { useEffect } from "react";
import { Router } from "next/router";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start);
    Router.events.on('routeChangeComplete', NProgress.done)
    Router.events.on('routeChangeError', NProgress.done)

    return () => {
      Router.events.off('routeChangeStart', NProgress.start)
      Router.events.off('routeChangeComplete', NProgress.done)
      Router.events.off('routeChangeError', NProgress.done)
    }
  }, []);
  
  return (
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
  );
}

export default MyApp;
