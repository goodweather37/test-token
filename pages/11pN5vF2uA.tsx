import { prisma } from "../lib/prisma";
import useSWR from 'swr';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image"
import locobukz from "../assets/locobukz.png";

import fetcher from "../utils/fetcher";
import { checkEligibilityMain } from "../utils/wallet-check/checkEligibilityMain";
import Claim from "../components/ClaimLocobukz";

// @ts-ignore
const Home: NextPage = () => {
  const reward = 11;
  const rewardType = "locobukz";
  const address = useAddress();

  // @ts-ignore
  const { data: wallets, error } = useSWR('api/get', fetcher);

  if (error) return <div>failed to load</div>
  if (!wallets) return <div>loading ...</div>

  const eligible = checkEligibilityMain(wallets, String(address), Number(reward));
  
  return (
    <main className={styles.container}>
      {!address ? (
        <div>
          <Image
            src={locobukz}
            className={styles.locobukz}
            alt="Locobuckz Coin"
          />
          <h1>Congratulationz <span className={styles.red}>You've found</span><span className={styles.yellow}> locobuckz</span></h1>
          <p>Please connect your wallet to claim locobuckz</p>
          <ConnectWallet />
        </div>
      ) : (
        <div>
            {eligible ? (
              <Claim wallets={wallets} reward={reward} rewardType={rewardType} />
            ) : (
              <p>You have already claimed the reward, move along sir.</p>
            )}
        </div>
      )}
    </main>
  );
};

export default Home;
