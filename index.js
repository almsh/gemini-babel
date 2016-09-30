module.exports = function(gemini, options) {
    if (options.plugins && options.plugins.isArray()) {
        options.plugins.push('babel-plugin-react-require');
    } else {
        options.plugins = ['babel-plugin-react-require'];
    }

    require('babel-register')(options);
    require('ignore-styles');
};
