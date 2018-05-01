const player = document.querySelector('.player');

const controls = {
  toggle: player.querySelector('.toggle'),
  video: document.querySelector('.viewer'),
};

const videoPlayPause = event => {
  controls.video[controls.video.paused ? 'play' : 'pause']();
}

controls.toggle.addEventListener('click', videoPlayPause);
controls.video.addEventListener('click', videoPlayPause);