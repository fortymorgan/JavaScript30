const player = document.querySelector('.player');

const controls = {
  toggle: player.querySelector('.toggle'),
  video: document.querySelector('.viewer'),
};

const videoPlayPause = () => {
  controls.video[controls.video.paused ? 'play' : 'pause']();
}

const updateButton = () => {
  controls.toggle.innerText = controls.video.paused ? '►' : '❚❚';
}

controls.toggle.addEventListener('click', videoPlayPause);
controls.video.addEventListener('click', videoPlayPause);

controls.video.addEventListener('play', updateButton);
controls.video.addEventListener('pause', updateButton);
