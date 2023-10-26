import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function get(req: NextApiRequest, res: NextApiResponse) {
    try {
        const wallets = await prisma.walletAddresses.findMany();

        res.status(200).json(wallets);
    } catch (error) {
        console.log(error);
    }
}