import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const VIDEOPLAYER_KEY = "videoplayer-current-time";
 
 const iframe = document.querySelector('#vimeo-player');
     const player = new Player(iframe);

// const player = new Player('vimeo-player');


 player.on('timeupdate', 
 
 throttle(setPlayerTimer, 1000));

 

 function setPlayerTimer({seconds}) {
  localStorage.setItem(VIDEOPLAYER_KEY, seconds);
}

player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_KEY));

