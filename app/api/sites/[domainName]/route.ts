import prisma from "@/lib/prisma";
import { NextApiRequest } from "next";

export async function GET(
    req: NextApiRequest, 
    { 
        params 
    }: {
        params: Promise<{ domainName: string }>
    }) {
    const { domainName } = await params

    const site = await prisma.site.findUnique({
        where: {
            domainName
        }
    })

    return Response.json({ site })
}