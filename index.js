module.exports = function(gemini, options) {
    require('@babel/register')(options);
    require('ignore-styles');
};
