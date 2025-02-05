"use client";

import React from "react";
import { useSite } from "@/context/site-context";

export default function AboutUsPage() {
    const { site } = useSite();

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
                    <p className="text-lg md:text-xl">
                        En {site.name}, combinamos experiencia y pasión para ofrecer soluciones que transforman ideas en realidades.
                    </p>
                </div>
            </section>

            {/* Contenido principal */}
            <section className="container mx-auto px-4 py-12">
                {/* Primera fila: Imagen y texto - Nuestra Historia */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Imagen con background */}
                    <div
                        className="h-64 bg-cover bg-center bg-no-repeat rounded-lg shadow-md image-placeholder"
                    ></div>
                    {/* Texto descriptivo */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
                        <p className="text-gray-700 mb-4">
                            Desde nuestros inicios, {site.name} ha forjado una sólida reputación basada en la excelencia y la innovación. Cada proyecto ha sido una oportunidad para aprender y crecer, adaptándonos a las necesidades de un mercado en constante evolución.
                        </p>
                        <p className="text-gray-700">
                            Nuestro compromiso es ofrecer soluciones integrales que respondan a los desafíos actuales, garantizando calidad y resultados medibles.
                        </p>
                    </div>
                </div>

                {/* Segunda fila: Texto y otra imagen - Nuestra Misión */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
                    {/* Texto descriptivo */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
                        <p className="text-gray-700 mb-4">
                            En {site.name} nos proponemos ser el aliado estratégico que impulse el crecimiento y la transformación digital de nuestros clientes.
                        </p>
                        <p className="text-gray-700">
                            Nos dedicamos a desarrollar soluciones innovadoras y personalizadas, siempre orientadas a generar resultados sostenibles y a construir relaciones basadas en la confianza y la transparencia.
                        </p>
                    </div>
                    {/* Imagen con background */}
                    <div
                        className="h-64 bg-cover bg-center bg-no-repeat rounded-lg shadow-md image-placeholder"
                    ></div>
                </div>
            </section>
        </main>
    );
}
