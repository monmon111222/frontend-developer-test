module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/css/global.scss";`, //注意
      },
    },
  },
}
