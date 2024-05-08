/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pasgo.vn',
        port: '',
        pathname: "/Upload/anh-chi-tiet/**"
      }
    ]
  },
};

export default nextConfig;
