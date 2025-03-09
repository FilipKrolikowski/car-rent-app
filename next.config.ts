import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sixt.com",
        port: "",
        pathname: "/fileadmin2/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
