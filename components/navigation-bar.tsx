// src/components/NavigationBar.tsx
"use client";
import React, { useState } from "react";
import { Site } from "@prisma/client";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import Link from "next/link";

interface NavigationBarProps {
    site: Site;
    links: { name: string; href: string }[];
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ site, links }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="w-full bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Izquierda: Título del sitio, completamente a la izquierda */}
                    <div className="flex items-center flex-shrink-0">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                            {site.name}
                        </h1>
                    </div>

                    {/* Centro: Enlaces de navegación (visible en desktop) */}
                    <div className="hidden md:flex md:space-x-8 md:items-center">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={`/${site.domainName}${link.href}`}
                                className="text-gray-700 dark:text-gray-300 transition-transform duration-200 hover:scale-105 hover:text-blue-500"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Derecha: Botón "Volver al simulador" para desktop */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Volver al simulador"
                        >
                            Volver al simulador
                        </Link>
                    </div>

                    {/* Móvil: Solo se muestra el botón de menú (hamburger) */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-700 dark:text-gray-300 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <XIcon className="w-6 h-6" />
                            ) : (
                                <MenuIcon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú móvil (visible en pantallas pequeñas) */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={`/${site.domainName}${link.href}`}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Último ítem: Botón "Volver al simulador" */}
                        <Link
                            href="/"
                            className="block px-3 py-2 mt-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                            aria-label="Volver al simulador"
                        >
                            Volver al simulador
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
