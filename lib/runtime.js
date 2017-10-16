const parser = require('./parser');

function check() {
    console.log(arguments);
}

exports.execFile = function(path) {
    parser.parseFile(path, (err, parsedFile) => {
        console.log(parsedFile);
        eval(parsedFile);
    });
};