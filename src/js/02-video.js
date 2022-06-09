import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const KEY_VIDEOPLAYER = "videoplayer-current-time";
 
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



 player.on('timeupdate', throttle(setPlayerTimer, 1000));

 function setPlayerTimer(e) {
  localStorage.setItem(KEY_VIDEOPLAYER, e.seconds);
}

player.setCurrentTime(localStorage.getItem(KEY_VIDEOPLAYER));

