import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  const stringifyData = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, stringifyData);
};

// player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayer() {
  if (JSON.parse(localStorage.getItem(STORAGE_KEY)) === null) {
    return;
  }
  const resumeTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
  player
    .setCurrentTime(resumeTime.seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}

resumePlayer();

