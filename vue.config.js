
const path = require('path');

module.exports = {

  transpileDependencies: [
    'birpc',

  ],
  configureWebpack: {
    resolve: {
      
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
};
