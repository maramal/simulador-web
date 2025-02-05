import { Suspense } from "react";
import ContactForm from "./contact-form";

export default function ContactUsPage() {
    return (
        <Suspense>
            <ContactForm />
        </Suspense>
    )
}