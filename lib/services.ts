import { Code, Server, Cloud, Shield } from "lucide-react"

interface Service {
    title: string
    description: string
    icon: React.ElementType
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
]