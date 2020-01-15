module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false
    }
  },
  configureWebpack: {
    devServer: {
      headers: {
        "X-Frame-Options": "sameorigin"
      }
    }
  },
  transpileDependencies: ["quasar"]
};
