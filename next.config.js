/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const name = "https://jiyongnoh.github.io";

const nextConfig = {
  reactStrictMode: true,
  basePath: "/Chatting-Web---Next.js",
  assetPrefix: !debug ? `/${name}/` : "",
};

module.exports = nextConfig;
