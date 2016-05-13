function game(map) {
    var j = 0;
    setInterval(function () {
        if (j > map.length - 1) {
            pronounce_command('YES WIN!');
            pronounce_command('WELL DONE');
        }
        var command = action_for(map[j]);
        if (command) {
            pronounce_command(command);
        }
        // on_key(LEFT, (evt) => if(currentCommand == 'LEFT') { error -= 1; } else { error += 0.9; pronounce_command('NO! LEFT!')})
    }, 2000);
}
;
function pronounce_command(command) {
    var synth = speechSynthesis;
    var voices = synth.getVoices();
    var z = new SpeechSynthesisUtterance(command);
    for (var _i = 0, voices_1 = voices; _i < voices_1.length; _i++) {
        var v = voices_1[_i];
        if (v.name == 'english') {
            z.voice = v;
            break;
        }
    }
    synth.speak(z);
}
function action_for(direction) {
    if (direction < -1) {
        return 'LEFT!';
    }
    else if (direction < 0) {
        return 'left please';
    }
    else if (direction > 0 && direction < 1) {
        return 'riight';
    }
    else if (direction > 1) {
        return 'RIGHT!';
    }
    else {
        return 'go';
    }
}
