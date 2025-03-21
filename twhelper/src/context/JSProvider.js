"use client";

import { useEffect } from "react";

export default function JSProvider({children}) {
    useEffect(()=>{
        //load bootstrap
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
            .then(() => console.log("✅ Bootstrap JS Loaded"))
            .catch((err) => console.error("❌ Bootstrap JS Load Failed", err));
    }, []);

    return <>{children}</>
}