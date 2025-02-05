"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useToast } from "@/hooks/use-toast";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(1, "El nombre del sitio es obligatorio"),
    description: z.string().optional(),
    domainName: z.string().regex(
        /^(?:(?:https?:\/\/)?(?:www\.)?)(?=[A-Za-z])[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}(?:\/)?$/,
        { message: "La URL no es válida" }
    ),
});

export default function SiteForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            domainName: "",
        },
    });

    async function handleSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);

        let domainName = values.domainName;
        if (!/^https?:\/\//i.test(values.domainName)) {
            domainName = "https://" + values.domainName;
        }

        const domainUrl = new URL(domainName);

        const existingSiteResponse = await fetch(`/api/sites/${domainUrl.host}`);
        const existingSiteData = await existingSiteResponse.json();
        if (existingSiteData?.site !== null) {
            router.push(`/${domainUrl.host}`);
            return;
        }

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description as string);
        formData.append("domainName", domainUrl.host);

        try {
            const response = await fetch("/api/sites", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error("El sitio no pudo ser creado. Intente nuevamente");
            }

            const data = await response.json();
            if (!data.ok) {
                throw new Error(data.message);
            }

            toast({
                title: "Sitio creado correctamente",
            });

            form.reset();
            router.push(`/${domainUrl.host}`);
        } catch (err) {
            if (err instanceof Error) {
                toast({
                    title: "Error",
                    description: err.message,
                    variant: "destructive",
                });
            }
        } finally {
            setIsLoading(false);
        }
    }

    if (!isMounted) {
        return null;
    }

    return (
        <div className="space-y-6">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="w-full space-y-6"
                    noValidate
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Nombre del Sitio</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isLoading}
                                        aria-label="Nombre del sitio"
                                        className="border border-blue-300 focus:ring-2 focus:ring-blue-500"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Descripción</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isLoading}
                                        aria-label="Descripción del sitio"
                                        className="border border-green-300 focus:ring-2 focus:ring-green-500"
                                    />
                                </FormControl>
                                <FormDescription className="text-sm text-gray-500">
                                    Slogan o lema de la empresa
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="domainName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Dominio</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isLoading}
                                        aria-label="Dominio del sitio web"
                                        className="border border-purple-300 focus:ring-2 focus:ring-purple-500"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        aria-label="Crear sitio"
                        disabled={isLoading}
                        variant="default"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                        {isLoading ? "Creando sitio..." : "Crear sitio"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
