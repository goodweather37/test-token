// signature minting 
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NextApiRequest, NextApiResponse } from "next";
import { TOKEN_CONTRACT_ADDRESS } from "../../const/addresses";

export default async function server(
    req: NextApiRequest,
    res: NextApiResponse
){
    try {
        const { claimerAddress, rewardType } = JSON.parse(req.body);

        if(!process.env.PRIVATE_KEY) {
            throw new Error("No private key found in .env file");
        };

        const sdk = ThirdwebSDK.fromPrivateKey(
            process.env.PRIVATE_KEY, 
            "mumbai"
        );

        const prizeContract = await sdk.getContract(
            TOKEN_CONTRACT_ADDRESS
        );

        // const payload = {
        //     to: claimerAddress
        // };

        let signedPayload;

        if (rewardType === "locobox") {
            signedPayload = await prizeContract.erc20.signature.generate({to: claimerAddress, quantity: 10});
        } else if (rewardType === "mission") {
            signedPayload = await prizeContract.erc20.signature.generate({to: claimerAddress, quantity: 5});
        } else {
            signedPayload = await prizeContract.erc20.signature.generate({to: claimerAddress, quantity: 1});
        }

        res.status(200).json({
            signedPayload: JSON.parse(JSON.stringify(signedPayload)),
        });

    } catch (error) {
        res.status(500).json({error: `Server error ${error}`})
    }
}