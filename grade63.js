const config = require('./config');
const request = require('request');
const sound = require('sound-play');
const opn = require('opn');

let inter = setInterval(check(config.endpointUrl, () => {
    clearInterval(inter);
    opn(config.endpointUrl);
    sound.play(config.alertSound, config.alertSoundVolume);
}), config.checkingTime * 1000);

function check(url, success) {
    return () => request(url, (err, res, body) => (res.statusCode === 200) ? success() : '');
}