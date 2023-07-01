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
    proxy: 'https://attendance-production-ce48.up.railway.app/'
  }
}
