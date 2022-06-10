
import throttle from 'lodash.throttle';


const VIDEOPLAYER_KEY = "videoplayer-current-time";
 
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



 player.on('timeupdate', throttle(setPlayerTimer, 1000));

 function setPlayerTimer(e) {
  localStorage.setItem(VIDEOPLAYER_KEY, e.seconds);
}

player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_KEY));

