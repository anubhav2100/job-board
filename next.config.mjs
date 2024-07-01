const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'anubhav-job-board.s3.amazonaws.com',
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds : true,
    },
  };
  
  export default nextConfig;
