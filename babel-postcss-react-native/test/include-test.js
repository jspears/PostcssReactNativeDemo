import {expect} from 'chai';
import {resolve, join} from 'path';
import {readFileSync} from 'fs';


function transform(path, configuration = {}) {
    // remove css modules transform plugin (simulates clean processes)
    delete require.cache[resolve(__dirname, '../../index.js')];
    const babel = require('babel-core');
    return babel.transformFileSync(resolve(__dirname, path), {
        plugins: [
            'transform-strict-mode',
            'transform-es2015-parameters',
            'transform-es2015-destructuring',
            'transform-es2015-modules-commonjs',
            'transform-object-rest-spread',
            'transform-es2015-spread',
            'transform-export-extensions',
            ['../../index.js', configuration]
        ]
    });
}

describe('babel-postcss-react-native', function () {
    it('should load import1', ()=> {
        const result = transform('fixtures/import1.js').code;
        console.log(result);
    });
});