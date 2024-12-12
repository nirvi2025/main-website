'use client';

import { useState, useEffect } from 'react';

const Chatbot = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/674d36de4304e3196aeb3961/1ie2pslge";
        script.setAttribute("crossorigin", "*");

        // Handle script loading
        script.onload = () => setLoading(false);

        // Handle script errors
        script.onerror = () => {
            setLoading(false);
            setError(true);
        };

        document.head.appendChild(script);

        // Cleanup on component unmount
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div
            className="fixed bottom-5 right-5 z-50"
            aria-live="polite"
            role="status"
            aria-label="Chatbot loading status"
        >
            {loading && !error && (
                <div
                    className="w-64 h-20 p-4 rounded-lg shadow-lg bg-gray-200 animate-pulse"
                    aria-label="Loading chatbot interface"
                >
                    <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                </div>
            )}

            {error && (
                <div
                    className="w-64 p-4 rounded-lg shadow-lg bg-red-100 text-red-600"
                    role="alert"
                    aria-label="Chatbot failed to load"
                >
                    <p className="font-bold">Error Loading Chatbot</p>
                    <p>Please try refreshing the page.</p>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
