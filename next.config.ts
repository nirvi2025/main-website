import {NextConfig} from 'next';

const nextConfig:NextConfig = {
    // productionBrowserSourceMaps: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.nirvy.com'
            },
        ],
    },
};

export default nextConfig;
