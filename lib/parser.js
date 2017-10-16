const fs = require('fs');

exports.parseFile = function(path, cb) {
    fs.readFile(path, 'utf8', (err, content) => {
        if(err)
            cb(err);

        let parsedString = content.replace(/\/\/>(.+)/, 'check($1)');
        cb(err, parsedString);
    });
};