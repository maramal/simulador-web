"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Site } from "@prisma/client";
import SiteProvider from "@/context/site-context";
import { NavigationBar } from "@/components/navigation-bar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const defaultLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const [site, setSite] = useState<Site | null>(null);
    const [isMounted, setIsMounted] = useState(false)
    const { domainName } = useParams<{ domainName: string }>();

    async function getSite() {
        const response = await fetch(`/api/sites/${domainName}`);
        const data = await response.json();
        if (!data?.site) {
            notFound();
        }
        setSite(data.site);
    }
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        getSite();
    }, [domainName]);

    if (!isMounted) return null

    if (!site)
        return (
            <div
                role="status"
                className="min-h-screen flex items-center justify-center bg-white"
            >
                <svg
                    className="animate-spin h-10 w-10 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                </svg>
                <span className="sr-only">Cargando sitio...</span>
            </div>
        );

    return (
        <>
            <NavigationBar site={site} links={defaultLinks} />
            {/* Se provee el sitio a todos los hijos a través del contexto */}
            <SiteProvider site={site}>{children}</SiteProvider>
            <Footer site={site} links={defaultLinks} />
            <Toaster />
        </>
    );
}
