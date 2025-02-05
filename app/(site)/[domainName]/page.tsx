"use client"

import CarouselSection from "@/components/carousel-section";
import { useSite } from "@/context/site-context";

export default function SitePage() {
  const { site } = useSite();

  return (
    <main className="flex flex-col items-center justify-center">
      {/* ----------------- Hero Section ----------------- */}
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown">
            Bienvenido a {site.name}
          </h1>
          <p className="text-lg md:text-2xl animate-fadeInUp delay-200">
            {site.description}
          </p>
        </div>
      </section>

      {/* ----------------- Sección "Acerca de Nosotros" ----------------- */}
      <section className="w-full py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Sobre nosotros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Imagen genérica */}
            <div>
              <div className="w-full h-64 rounded-md image-placeholder bg-gradient-to-br from-gray-300 to-gray-500 animate-pulse" />
            </div>
            {/* Contenido textual */}
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                {site.name} es una empresa comprometida con la excelencia y la innovación.
                Con una sólida trayectoria, ofrecemos soluciones integrales y personalizadas para satisfacer las necesidades de nuestros clientes en diversos sectores.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Nuestro equipo de profesionales trabaja con pasión y dedicación para garantizar resultados de alta calidad.
                La transparencia, la creatividad y el compromiso son los pilares que nos impulsan a superar las expectativas y a construir relaciones duraderas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Sección de Carrusel (Portafolio o Servicios) ----------------- */}
      <CarouselSection />
    </main>
  );
}
