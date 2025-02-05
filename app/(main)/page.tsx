import SiteForm from "@/components/site-form";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "Simulador de sitios web por LATE",
  description: "Previsualiza tu futuro sitio",
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 px-4 py-8">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-t-lg">
          <CardTitle className="text-center text-2xl font-bold text-white">
            Ingresa la información sobre tu sitio web
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-white p-6">
          <SiteForm />
        </CardContent>
        <CardFooter className="flex justify-center bg-gray-50 border-t border-gray-200 p-4 rounded-b-lg">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Creado por</span>
            <Link
              href="https://www.late.uy/"
              aria-label="Ir al sitio de LATE"
              className="font-medium text-blue-600 hover:underline"
            >
              <Image
                src="/logo.svg"
                width={80}
                height={50}
                alt="Logo de LATE"
              />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
