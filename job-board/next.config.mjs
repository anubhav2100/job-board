const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'anubhav-job-board.s3.amazonaws.com',
        },
      ],
    },
  };
  
  export default nextConfig;