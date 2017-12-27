module.exports = {
  type: 'react-component',
  npm: {
    esModules: false,
    umd: false,
  },
  babel: {
    cherryPick: ['lodash'],
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '~': './src',
          dva: 'dva-react-router-3',
        },
      }],
    ],
  },
};
