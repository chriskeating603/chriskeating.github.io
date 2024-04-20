module.exports = function override(config, env) {
    // do stuff with the webpack config...
    const devServer = config.devServer || {};
    const setupMiddlewares = (middlewares) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // Your middleware setup here...

      return middlewares;
    };

    config.devServer = { ...devServer, setupMiddlewares };
    return config;
  };