import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest, 
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

    return NextResponse.json({ site })
}