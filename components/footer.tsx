"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { Site } from "@prisma/client";

interface FooterProps {
    site: Site;
    links: { name: string; href: string }[];
}

const Footer: React.FC<FooterProps> = ({ site, links }) => {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Evitamos problemas de hidratación
        setIsMounted(true);
        setYear(new Date().getFullYear());
    }, []);

    if (!isMounted) return null;

    return (
        <footer className="w-full bg-gray-800 text-white">
            {/* Sección principal */}
            <div className="w-full container mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between">
                {/* Izquierda: Nombre del sitio, centrado verticalmente */}
                <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center md:justify-start items-center">
                    <h2 className="text-lg font-bold">
                        <Link href={`/${site.domainName}`}>{site.name}</Link>
                    </h2>
                </div>
                {/* Centro: Enlaces del sitio en lista vertical */}
                <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center">
                    <ul className="flex flex-col items-center space-y-2">
                        {links.map((link, idx) => (
                            <li key={idx}>
                                <Link href={`/${site.domainName}${link.href}`} className="hover:text-blue-400">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Derecha: Información de contacto en tres columnas */}
                <div className="md:w-1/3 flex justify-center md:justify-end">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {/* Dirección */}
                        <div className="flex flex-col items-center">
                            <MapPin className="w-5 h-5 mb-1" />
                            <span className="text-xs text-center">
                                Martín García 1602 474, 11800 - Montevideo, Uruguay
                            </span>
                        </div>
                        {/* Email */}
                        <div className="flex flex-col items-center">
                            <Mail className="w-5 h-5 mb-1" />
                            <span className="text-xs">
                                <Link
                                    href={`mailto:info@${site.domainName}`}
                                    className="hover:text-blue-400"
                                >
                                    info@{site.domainName}
                                </Link>
                            </span>
                        </div>
                        {/* WhatsApp */}
                        <div className="flex flex-col items-center">
                            <Image
                                src="/whatsapp.png"
                                alt="WhatsApp"
                                width={20}
                                height={20}
                                className="object-contain mb-1"
                            />
                            <span className="text-xs">
                                <Link
                                    href="https://wa.me/+59892553793"
                                    target="_blank"
                                    className="hover:text-blue-400"
                                >
                                    092 552 793
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Subfooter */}
            <div className="w-full bg-gray-800 py-4">
                <div className="container mx-auto px-4 text-center text-sm text-gray-300">
                    <Link href="https://late.uy">LATE</Link> &copy; {year}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
