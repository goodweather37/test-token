import { Web3Button, useAddress, useContract } from "@thirdweb-dev/react";
import { TOKEN_CONTRACT_ADDRESS } from "../const/addresses";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import locobukz from "../assets/locobukz.png";
import { useState } from "react";
import { checkNew } from "../utils/wallet-check/checkNew"; 
import { rewardsData } from "../lib/reward-data/reward-init-data";

//@ts-ignore
export default function Claim({ wallets, reward, rewardType }) {
    
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

    const addToDb = (wallets: any) => {
        if (reward === 7) {
            const newData = { ...data, reward7: 1}
    
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
                            const updatedData = { ...wallet, reward7: 1 }
    
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
    
        } else if (reward === 8) {
            const newData = { ...data, reward8: 1}
    
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
                            const updatedData = { ...wallet, reward8: 1 }
    
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
    
        } else if (reward === 9) {
            const newData = { ...data, reward9: 1}
    
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
                            const updatedData = { ...wallet, reward9: 1 }
    
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
    
        } else if (reward === 10) {
            const newData = { ...data, reward10: 1}
    
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
                            const updatedData = { ...wallet, reward10: 1 }
    
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
    
        } else if (reward === 11) {
            const newData = { ...data, reward11: 1}
    
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
                            const updatedData = { ...wallet, reward11: 1 }
    
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
    
        } else if (reward === 12) {
            const newData = { ...data, reward12: 1}
    
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
                            const updatedData = { ...wallet, reward12: 1 }
    
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
    
        } else if (reward === 13) {
            const newData = { ...data, reward13: 1}
    
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
                            const updatedData = { ...wallet, reward13: 1 }
    
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
    
        } else if (reward === 14) {
            const newData = { ...data, reward15: 1}
    
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
                            const updatedData = { ...wallet, reward14: 1 }
    
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
    
        } else if (reward === 15) {
            const newData = { ...data, reward15: 1}
    
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
                            const updatedData = { ...wallet, reward15: 1 }
    
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
            }5
    
        } else if (reward === 16) {
            const newData = { ...data, reward16: 1}
    
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
                            const updatedData = { ...wallet, reward16: 1 }
    
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
    
        } else if (reward === 17) {
            const newData = { ...data, reward17: 1}
    
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
                            const updatedData = { ...wallet, reward17: 1 }
    
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
    
        } else if (reward === 18) {
            const newData = { ...data, reward18: 1}
    
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
                            const updatedData = { ...wallet, reward18: 1 }
    
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
    
        } else if (reward === 19) {
            const newData = { ...data, reward19: 1}
    
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
                            const updatedData = { ...wallet, reward19: 1 }
    
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
    
        } else if (reward === 20) {
            const newData = { ...data, reward20: 1}
    
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
                            const updatedData = { ...wallet, reward20: 1 }
    
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
    
        } else if (reward === 21) {
            const newData = { ...data, reward21: 1}
    
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
                            const updatedData = { ...wallet, reward21: 1 }
    
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
            
        } else if (reward === 22) {
            const newData = { ...data, reward22: 1}
    
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
                            const updatedData = { ...wallet, reward22: 1 }
    
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
    
        } else if (reward === 23) {
            const newData = { ...data, reward23: 1}
    
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
                            const updatedData = { ...wallet, reward23: 1 }
    
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
    
        } else if (reward === 24) {
            const newData = { ...data, reward24: 1}
    
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
                            const updatedData = { ...wallet, reward24: 1 }
    
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
    
        } else if (reward === 25) {
            const newData = { ...data, reward25: 1}
    
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
                            const updatedData = { ...wallet, reward25: 1 }
    
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
    
        } else if (reward === 26) {
            const newData = { ...data, reward: 1}
    
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
                            const updatedData = { ...wallet, reward26: 1 }
    
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
                    
                <h1>Congratulationz <span className={styles.red}>You have found the prize</span><span className={styles.yellow}> and here is your locobuckz</span></h1>
                <div className={styles.imageWrapper}>
                    <Image src={locobukz} alt="locobuckz"/>
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
