// src/next.config.js
module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@styles'] = path.resolve(
        __dirname,
        'src/styles'
      );
    }
    return config;
  },
};
