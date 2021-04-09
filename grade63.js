const request = require('request');
const sound = require('sound-play');
const url = 'http://academic.skr.ac.th/grade/skr63_1/';
let inter = setInterval(check(url, () => {
    clearInterval(inter);
    sound.play("alert.mp3", 0.1);
}), 5000);

function check(url, success) {
    return () => {
            request(url, function(err, res, body) {
            if (res.statusCode === 200) {
                success();
            }
        })
    };
}