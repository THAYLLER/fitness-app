module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@components': './src/components',
          '@assets': './src/assets',
          '@services': './src/services',
        },
      },
    ],
    'babel-plugin-styled-components',
  ],
}; 