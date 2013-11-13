var rl = require('readline');

var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question('how many servings of fruits or vegetables do you eat each day? ', function(servings) {
    var message = '';
    if (servings < 5) {
        message = 'Since you are only eating ' + servings +
                ' right now, you might want to start eating ' + (5 - servings) + ' more.';
    }
    else {
        message = 'Excellent, your diet is right on track.';
    }

    console.log(message);

    process.exit();
});