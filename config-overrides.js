

// const { override } = require("customize-cra");

// module.exports = override((config) => {
//   config.resolve.fallback = {
//     ...config.resolve.fallback,
//     zlib: false, // Use an empty module for 'zlib'
//   };
//   return config;
// });

const { override } = require('customize-cra');

module.exports = override((config) => {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        http: require.resolve('stream-http'),
    };
    return config;
});
