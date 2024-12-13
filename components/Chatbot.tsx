'use client';
import { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        const tawkScript = document.createElement("script");
        tawkScript.async = true;
        tawkScript.src = "https://embed.tawk.to/674d36de4304e3196aeb3961/1ie2pslge";
        document.body.appendChild(tawkScript);

        return () => {
            document.body.removeChild(tawkScript);
        };
    }, []);

    return null; // No need for a loading/error UI for the chatbot
};

export default Chatbot;
