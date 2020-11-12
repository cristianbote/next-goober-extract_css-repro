const { readFileSync, readdirSync } = require('fs');
const path = require('path');

const exported = readdirSync(path.resolve(__dirname, 'export'));

console.log('Testing:\n', exported.join('\n'))

exported.forEach(filename => {
    if (filename.slice(-5) === '.html' && filename.slice(0, 3) !== '404') {
        const contents = readFileSync(path.resolve(__dirname, 'export', filename));
        if (contents.indexOf('.go') === -1) {
            console.log('ⓧ ' + filename)
        } else {
            console.log('✓ ' + filename)
        }
    }
})