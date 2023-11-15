import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_KEY = 'videoplayer-current-time';
const getValue = localStorage.getItem(LS_KEY);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LS_KEY, JSON.stringify(data.seconds));
  }, 1000)
);

if (getValue) {
  player.setCurrentTime(JSON.parse(getValue));
}
