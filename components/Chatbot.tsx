'use client';
import { useEffect } from "react";

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/674d36de4304e3196aeb3961/1ie2pslge";
        // script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default Chatbot;
