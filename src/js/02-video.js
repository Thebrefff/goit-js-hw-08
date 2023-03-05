import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import '../css/common.css';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = data => {
  localStorage.setItem(TIME_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)) || 0);
