import { Web3Button, useAddress, useContract, useDisconnect } from "@thirdweb-dev/react";
import { TOKEN_CONTRACT_ADDRESS } from "../const/addresses";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import locobukz from "../assets/locobukz.png";
import { useState } from "react";
import { checkNew } from "../utils/wallet-check/checkNew"; 
import { rewardsData } from "../lib/reward-data/reward-init-data";

//@ts-ignore
export default function Claim({ wallets, reward, rewardType }) {
    // get address
    const address = useAddress();

    const newWallet = checkNew(wallets, String(address));
    const [claimed, setClaimed] = useState(false);

    // get contract
    const {
        contract: tokenContract
    } = useContract(TOKEN_CONTRACT_ADDRESS);

    // initial data
    const data = {
        walletAddress: address,
        ...rewardsData
    }
    
    // mint token with signature
    const mintWithSignature = async () => {
        try {
            const signedPayloadReq = await fetch(`/api/twserver`, {
                method: "POST",
                body: JSON.stringify({
                    claimerAddress: address,
                    rewardType: rewardType
                })
            });

            const json = await signedPayloadReq.json();

            if (!signedPayloadReq.ok) {
                alert(json.error);
            }

            const signedPayload = json.signedPayload;

            const token = await tokenContract?.erc20.signature.mint(signedPayload);

            alert("Tokens claimed!");

            addToDb(wallets);

            setClaimed(true);

            return token;

        } catch (error) {
            console.error(error);
        }
    }

    const addToDb = async (wallets: any) => {
        if (reward === 1) {
            // new data for new wallet address
        const newData = {...data, reward1: 1}

            if (wallets.length === 0) {
                fetch('api/create', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newData)
                })
            } else {
                if (newWallet) {
                    fetch('api/create', {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(newData)
                                })
                } else {
                    //@ts-ignore
                    wallets.forEach(wallet => {
                        if (wallet.walletAddress === address) {
                            // updated data for existing wallet addresse
                            const updatedData = { ...wallet, reward1: 1 }

                            fetch(`api/update/${wallet.walletAddress}`, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(updatedData)
                            })
                        }
                    })                    
                }
            }
        }
    }

    return (
        <div>
            {!claimed ? (
                <div>
                    
                <h1>Congratulationz <span className={styles.red}>You have found the 1 of a kind LocoBox</span><span className={styles.yellow}> claim your 10 LocoBuckz</span></h1>
                <div className={styles.imageWrapper}>
                    <Image src={locobukz} alt="locobuckz"/>
                    <Image src={locobukz} alt="locobuckz"/>
                    <Image src={locobukz} alt="locobuckz"/>
                    <Image src={locobukz} alt="locobuckz"/>
                    <Image src={locobukz} alt="locobuckz" />
                    <Image src={locobukz} alt="locobuckz" />
                    <Image src={locobukz} alt="locobuckz" />
                    <Image src={locobukz} alt="locobuckz" />
                    <Image src={locobukz} alt="locobuckz" />
                    <Image src={locobukz} alt="locobuckz" />
                </div>
                    <Web3Button
                    className={styles.claimbtn}
                    contractAddress={TOKEN_CONTRACT_ADDRESS}
                     action={() => (
                         mintWithSignature()
                    )}
                 >
                    Claim Locobuckz
                </Web3Button>
                
            </div>
            ) : (
                <div>
                    <p>Thank you for playing</p>
                </div>
            )}
        </div>
    );
};
