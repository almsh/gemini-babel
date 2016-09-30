module.exports = function(gemini, options) {
    options.plugins.push('babel-plugin-react-require');
    require('babel-register')(options);
    require('ignore-styles');
};
