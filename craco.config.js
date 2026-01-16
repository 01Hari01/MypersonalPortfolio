const path = require('path');

module.exports = {
  babel: {
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-logical-assignment-operators',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
    ]
  },
  webpack: {
    configure: (webpackConfig) => {
      // Find the oneOf array that contains the babel-loader rule
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);

      if (oneOfRule) {
        // Add a new rule for @mui and @emotion packages before the file-loader
        oneOfRule.oneOf.unshift({
          test: /\.(js|mjs|jsx)$/,
          include: [
            path.resolve(__dirname, 'node_modules/@mui'),
            path.resolve(__dirname, 'node_modules/@emotion'),
            path.resolve(__dirname, 'node_modules/@babel/runtime')
          ],
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              presets: [
                [
                  require.resolve('babel-preset-react-app'),
                  {
                    runtime: 'automatic',
                  },
                ],
              ],
              plugins: [
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-logical-assignment-operators',
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                ['@babel/plugin-proposal-private-methods', { loose: true }],
                ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false,
            },
          },
        });
      }

      return webpackConfig;
    }
  }
};
