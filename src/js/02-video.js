// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const VIDEOPLAYER_KEY = "videoplayer-current-time";
 
 const iframe = document.querySelector('#vimeo-player');
     const player = new Vimeo.Player(iframe);



 player.on('timeupdate', throttle(setPlayerTimer, 1000));

 

 function setPlayerTimer({seconds}) {
  localStorage.setItem(VIDEOPLAYER_KEY, seconds);
}

const playerStart = localStorage.getItem(VIDEOPLAYER_KEY)
player.setCurrentTime(playerStart)
.then(function (seconds) {
 console.log(seconds); 
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          
          break;

      default:
         
          break;
  }
});



