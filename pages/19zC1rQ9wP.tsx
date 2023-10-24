import { prisma } from "../lib/prisma";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image"
import locobukz from "../assets/locobukz.png";

import { checkEligibilityMain } from "../utils/wallet-check/checkEligibilityMain";
import Claim from "../components/ClaimLocobukz";

// @ts-ignore
const Home: NextPage = ({ wallets}) => {
  const reward = 19;
  const rewardType = "locobukz";
  const address = useAddress();

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

export async function getStaticProps() {
  const wallets = await prisma.walletAddresses.findMany();

  return {
    props: { 
      wallets: JSON.parse(JSON.stringify(wallets))
     }
  }
}
