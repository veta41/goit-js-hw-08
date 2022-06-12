// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const VIDEOPLAYER_KEY = "videoplayer-current-time";
 
 const iframe = document.querySelector('#vimeo-player');
     const player = new Vimeo.Player(iframe);

     const playerStart = parseFloat(localStorage.getItem(VIDEOPLAYER_KEY))

     player.setCurrentTime(playerStart);


 player.on('timeupdate', throttle(setPlayerTimer, 1000));

 

 function setPlayerTimer({seconds}) {
  localStorage.setItem(VIDEOPLAYER_KEY, seconds);
}



