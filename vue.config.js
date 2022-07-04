// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy: 'https://logi-app.herokuapp.com'
//   }
// })
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://qr-scan3.herokuapp.com/'
  }
}
