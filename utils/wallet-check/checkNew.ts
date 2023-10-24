// checking new wallets
export function checkNew(wallets: any, address: string) {
    let newWallet = false;

    // @ts-ignore
    const found = wallets.find(wallet => wallet.walletAddress === address);

    found === undefined ? newWallet = true : newWallet = false;

    return newWallet;
}