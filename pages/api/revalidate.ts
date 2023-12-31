import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' })
    }
     
    try {
      const paths = (req.body?.paths).split(',');
      const revalidatedPaths = [];
      paths.forEach(async (path: any) => {
        await res.revalidate(path);
        revalidatedPaths.push({ revalidated: true, path: path });
      });
      return res.json({ revalidated: true, paths });
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating');
    }
  }