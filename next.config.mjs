/** @type {import('next').NextConfig} */
 import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
       unoptimized: true,
    },

};
 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

export default nextConfig;
