import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        walletAddress,
        reward1, reward2, reward3, 
        reward4, reward5, reward6, 
        reward7, reward8, reward9,
        reward10, reward11, reward12,
        reward13, reward14, reward15,
        reward16, reward17, reward18,
        reward19, reward20, reward21,
        reward22, reward23, reward24,
        reward25, reward26
    } = req.body;

    try {
        await prisma.walletAddresses.create({
            data: {
                walletAddress,
                // @ts-ignore
                reward1, reward2, reward3, 
                reward4, reward5, reward6, 
                reward7, reward8, reward9,
                reward10, reward11, reward12,
                reward13, reward14, reward15,
                reward16, reward17, reward18,
                reward19, reward20, reward21,
                reward22, reward23, reward24,
                reward25, reward26
            }
        });

        res.status(200).json({message: "Created"});
    } catch (error) {
        res.status(400).json({message: error});
    }
}