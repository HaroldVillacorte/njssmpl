var os = require('os');
var message = 'This is a script running on node.js' + process.version +
        ' on a ' + os.type() + '-based operating system. File change.';
console.log(message);