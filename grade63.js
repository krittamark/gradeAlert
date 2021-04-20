const config = require('./config');
const axios = require('axios');
const sound = require('sound-play');
const open = require('opn');

let inter = setInterval(check(config.endpointUrl, () => {
  clearInterval(inter);
  open(config.endpointUrl);
  sound.play(config.alertSound, config.alertSoundVolume);
}), config.checkingTime * 1000);


function check(url, success) {
  return () => {
    axios.get(url)
      .then(res => success())
      .catch(err => '');
  }
}