import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const response = {
        ok: false,
        message: ''
    }

    const formData = await req.formData()

    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const domainName = formData.get("domainName") as string

    try {
        const site = await prisma.site.create({
            data: {
                name,
                description,
                domainName
            }
        })
        
        if (!site.id) {
            throw new Error('No se pudo crear el sitio. Intente nuevamente')
        }

        response.ok = true

        return Response.json(site)
    } catch (err) {
        if (err instanceof Error) {
            response.message = err.message
        }
    } finally {
        return Response.json(response)
    }
}