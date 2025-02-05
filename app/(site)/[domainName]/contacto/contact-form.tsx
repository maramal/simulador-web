"use client";

import { Mail, MapPin } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,

} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useSite } from "@/context/site-context";

// Esquema de validación con Zod
const formSchema = z.object({
    name: z.string().min(1, {
        message: 'El nombre es obligatorio'
    }),
    email: z
        .string()
        .min(1, {
            message: "El correo es obligatorio"
        })
        .email("El correo electrónico es inválido"),
    message: z.string().min(1, {
        message: "El mensaje es obligatorio"
    })
});

export default function ContactForm() {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const { site } = useSite()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    async function onSubmit() {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            toast({
                title: 'El formulario ha sido enviado con éxito',
                description: `Nos contactaremos a la brevedad, gracias por comunicarte con ${site.name}`
            })
            form.reset()
        }, 2000)
    }

    return (
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors">
            {/* Contenedor general */}
            <div className="container mx-auto px-4 py-10 md:py-16">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Contáctanos
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Envíanos tus consultas, estamos para ayudarte.
                    </p>
                </div>

                {/* Grid responsivo (2 columnas en md en adelante) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Columna de información de contacto */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/whatsapp.png"
                                alt="WhatsApp Icon"
                                width={20}
                                height={20}
                            />
                            <div className="text-gray-700 dark:text-gray-300">
                                <Link href="https://wa.me/+59892552793" target="_blank">+598 92 552 793</Link>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="text-blue-600 dark:text-blue-400" />
                            <div className="text-gray-700 dark:text-gray-300">
                                <Link href="mailto:info@late.uy" target="_blank">info@{site.domainName}</Link>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="text-blue-600 dark:text-blue-400" />
                            <div className="text-gray-700 dark:text-gray-300">
                                Martín García 1602 Apto. 474, 11800 - Montevideo, Uruguay
                            </div>
                        </div>
                    </div>

                    {/* Columna del formulario */}
                    <div>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-md shadow-md"
                            >
                                {/* Campo de nombre */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="dark:text-gray-100">
                                                Nombre
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isLoading}
                                                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-600 dark:text-red-400" />
                                        </FormItem>
                                    )}
                                />

                                {/* Campo de correo */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="dark:text-gray-100">
                                                Correo electrónico
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    {...field}
                                                    disabled={isLoading}
                                                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-600 dark:text-red-400" />
                                        </FormItem>
                                    )}
                                />

                                {/* Campo de mensaje */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="dark:text-gray-100">Mensaje</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    rows={6}
                                                    disabled={isLoading}
                                                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-600 dark:text-red-400" />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                                    disabled={isLoading}
                                    aria-label="Enviar formulario"
                                >
                                    Enviar
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
