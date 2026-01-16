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
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);

      if (oneOfRule) {
        const babelLoader = oneOfRule.oneOf.find(
          (rule) => rule.loader && rule.loader.includes('babel-loader')
        );

        if (babelLoader) {
          // Remove the exclude for @mui and @emotion packages
          const originalExclude = babelLoader.exclude;
          babelLoader.exclude = function(modulePath) {
            // Allow @mui and @emotion packages to be transpiled
            if (/@mui/.test(modulePath) || /@emotion/.test(modulePath)) {
              return false;
            }
            // Use original exclude for everything else
            if (!originalExclude) {
              return false;
            }
            if (typeof originalExclude === 'function') {
              return originalExclude(modulePath);
            }
            if (originalExclude.test) {
              return originalExclude.test(modulePath);
            }
            return false;
          };
        }
      }

      return webpackConfig;
    }
  }
};
