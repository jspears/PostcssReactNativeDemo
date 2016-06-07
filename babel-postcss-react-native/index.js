
var  source  = require( '../postcss-react-native/dist/source').default;
var plugin = require('../postcss-react-native/dist/index').default;
var postcss = require('postcss');

var installed = false;

const defaultOptions = {
    extensions: ['.css']
};

function install(options) {
    if (installed) {
        return
    }

    var fs = require('fs');
    var Module = require('module');
    var _require = Module.prototype.require;


    if ('string' === typeof options) {
        options = {
            extensions: options.split(/\,\s*/)
        }
    }

    const opts = Object.assign({}, defaultOptions, options);

    opts.extensions.forEach(function (ext) {
        Module._extensions[ext] = function (module, filename) {
            postcss(plugin({
                toStyleSheet: function (json, css) {
                    module._compile(source(json), filename);
                }
            })).process(fs.readFileSync(filename, 'utf8'), {from: filename, to: filename + '.js'});
        };
    });

    Module.prototype.require = function (filename) {
        if ('!' === filename.slice(-1)) {
            filename = filename.slice(0, -1);
        }
        return _require.call(this, filename);
    };

    installed = true;
    return {
        visitor: {}
    }
}

module.exports = install