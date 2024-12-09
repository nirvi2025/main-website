import {NextConfig} from 'next';

const nextConfig:NextConfig = {
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
