"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { Site } from "@prisma/client";

interface SiteContextType {
    site: Site;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function useSite() {
    const context = useContext(SiteContext);
    if (!context) {
        throw new Error("useSite must be used within a SiteProvider");
    }
    return context;
}

interface SiteProviderProps {
    site: Site;
    children: ReactNode;
}

export default function SiteProvider({ site, children }: SiteProviderProps) {
    return (
        <SiteContext.Provider value={{ site }}>
            {children}
        </SiteContext.Provider>
    );
}
