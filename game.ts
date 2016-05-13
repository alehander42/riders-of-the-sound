
declare var speechSynthesis;
declare var SpeechSynthesisUtterance;

function game(map: number[]) {
    var j = 0;
    setInterval(() => {
        if (j > map.length - 1) {
            pronounce_command('YES WIN!');
            pronounce_command('WELL DONE');
        }
        let command = action_for(map[j]);
        if (command) {
            pronounce_command(command);
        }
        // on_key(LEFT, (evt) => if(currentCommand == 'LEFT') { error -= 1; } else { error += 0.9; pronounce_command('NO! LEFT!')})
    }, 2000);
};

function pronounce_command(command: string) {
    var synth = speechSynthesis;
    var voices = synth.getVoices();
    var z = new SpeechSynthesisUtterance(command);
    for (var v of voices) {
        if (v.name == 'english') {
            z.voice = v;
            break;
        }
    }
    synth.speak(z);    
}

function action_for(direction: number): string {
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
             