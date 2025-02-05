"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { services } from "@/app/(site)/[domainName]/servicios/page";

const CarouselSection: React.FC = () => {
    // Inicializamos Embla con autoplay y loop infinito
    const [emblaRef] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    return (
        <section
            aria-label="Nuestros Servicios"
            className="w-full h-screen relative overflow-hidden"
        >
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="embla__slide flex-shrink-0 w-full h-screen p-4"
                            >
                                <div className="flex flex-col items-center justify-center h-full">
                                    {/* Ícono representativo del servicio */}
                                    <div className="flex items-center justify-center mb-8">
                                        <Icon
                                            className="w-24 h-24 text-blue-600"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {/* Título y descripción */}
                                    <div className="max-w-3xl text-center">
                                        <h3 className="text-3xl font-bold mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CarouselSection;
