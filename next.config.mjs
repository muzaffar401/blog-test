/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Use 'protocol' (not 'protocols')
          hostname: 'cdn.sanity.io', // Replace with your domain
          port: '', // Leave blank or specify a port if needed
          pathname: '/**', // Match all paths
        },
      ],
    },
  };
  
  export default nextConfig;
  