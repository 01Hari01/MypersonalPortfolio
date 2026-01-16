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
      const babelLoader = webpackConfig.module.rules.find(
        (rule) => rule.oneOf
      ).oneOf.find((rule) => rule.loader && rule.loader.includes('babel-loader'));

      if (babelLoader) {
        babelLoader.include = [
          babelLoader.include,
          /node_modules\/@mui/,
          /node_modules\/@emotion/,
          /node_modules\/@babel\/runtime/
        ];
      }

      return webpackConfig;
    }
  }
};
