console.log("JavaScript is working!")




const bgMusic = new Audio('Audio/bgmusic.mp3')

const soundBtn = document.querySelector('#sound-btn')
soundBtn.addEventListener('click', () => {

  
  if(bgMusic.paused){
    bgMusic.volume = 0.1 // change volume of music
    bgMusic.loop = true // make music repeat if ends
    bgMusic.play();
    soundBtn.name = 'volume-up'
  }else{
    bgMusic.pause()
    soundBtn.name = 'volume-mute'
  }
  
});



