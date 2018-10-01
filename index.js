/*var browserfsPath = require('./browserfs');
var browserifyConfig = {
    // Override Browserify's builtins for buffer/fs/path.
    builtins: Object.assign({}, require('browserify/lib/builtins'), {
        "buffer": require('./shims/buffer.js'),
        "fs": require("./shims/fs.js"),
        "path": require("./shims/path.js")
    }),
    insertGlobalVars: {
        // process, Buffer, and BrowserFS globals.
        // BrowserFS global is not required if you include browserfs.js
        // in a script tag.
        "process": function () { return "require('browserfs/dist/shims/process.js')" },
        'Buffer': function () { return "require('buffer').Buffer" },
        "BrowserFS": function() { return "require('" + browserfsPath + "')" }
    }
};*/

module.exports = require('./browserfs');