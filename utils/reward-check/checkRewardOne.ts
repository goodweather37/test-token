export const checkRewardOne = (wallets: any) => {
    let claimed = false;

    for (let i = 0; i < wallets.length; i++) {
        if (wallets.length === 0) {
            claimed = false;
        } else if (wallets[i].reward1 === 1) {
            claimed = true;
        } else {
            claimed = false;
        }
    }

    return claimed;
}