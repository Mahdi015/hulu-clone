/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papereact.com",
      "image.tmdb.org",
      "e7.pngegg.com",
      "api.themoviedb.org",
    ],
  },
};

module.exports = nextConfig;
