"use client";

import React from "react";
import { useSite } from "@/context/site-context";
import { Code, Server, Cloud, Shield } from "lucide-react";

interface Service {
    title: string;
    description: string;
    icon: React.ElementType;
}

export const services: Service[] = [
    {
        title: "Consultoría Integral",
        description: `Transformamos desafíos en oportunidades mediante asesoría personalizada y soluciones a medida.`,
        icon: Code,
    },
    {
        title: "Innovación Tecnológica",
        description:
            "Implementamos las últimas tecnologías para mejorar la eficiencia y competitividad de tu negocio, garantizando un servicio de calidad.",
        icon: Cloud,
    },
    {
        title: "Estrategia y Planificación",
        description:
            "Diseñamos estrategias efectivas que impulsan el crecimiento y aseguran resultados sostenibles, adaptadas a tus necesidades.",
        icon: Shield,
    },
    {
        title: "Soporte y Mantenimiento",
        description:
            "Brindamos soporte continuo y mantenimiento proactivo para que tus sistemas funcionen siempre al máximo rendimiento.",
        icon: Server,
    },
];

export default function ServicesPage() {
    const { site } = useSite();

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4">
            {/* Encabezado SEO y accesible */}
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Nuestros servicios
                </h1>
                <p className="text-lg text-gray-600">
                    En {site.name} nos dedicamos a impulsar tu éxito con soluciones integrales y personalizadas.
                </p>
            </header>

            {/* Sección de servicios */}
            <section className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <article
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105"
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon className="w-12 h-12 text-blue-600" aria-hidden="true" />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 text-center">{service.description}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
