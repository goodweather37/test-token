// checking eligibility of wallet addresses
export function checkEligibilityMain(wallets: any, address: string, reward: number) {
    let eligible = false;
    if (reward === 1) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward1 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 2) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward2 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 3) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward3 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 4) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward4 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 5) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward5 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 6) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward6 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 7) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward7 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 8) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward8 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 9) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward9 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 10) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward10 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 11) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward11 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 12) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward12 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 13) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward13 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 14) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward14 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 15) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward15 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 16) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward16 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 17) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward17 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 18) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward18 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 19) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward19 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 20) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward20 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 21) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward21 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 22) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward22 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 23) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward23 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 24) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward24 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 25) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward25 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } else if (reward === 26) {
        if (wallets.length === 0) {
            eligible = true;
        } else if (wallets.length > 0) {
            // @ts-ignore
            const found = wallets.find(wallet => wallet.walletAddress === address);
    
            if (found === "undefined") {
                eligible = true;
            } else if (found) {
                if (found.walletAddress === address && found.reward26 === 0) {
                    eligible = true;
                }
            } else {
                eligible = false;
            }
        } else {
            eligible = false;
        }
    } 

    return eligible;    
}