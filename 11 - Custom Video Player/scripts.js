const player = document.querySelector('.player');

const controls = {
  toggle: player.querySelector('.toggle'),
  video: document.querySelector('.viewer'),
  skip: document.querySelectorAll('[data-skip]'),
};

const videoPlayPause = () => {
  controls.video[controls.video.paused ? 'play' : 'pause']();
};

const updateButton = () => {
  controls.toggle.innerText = controls.video.paused ? '►' : '❚❚';
};

const skipTime = event => {
  controls.video.currentTime += +event.target.dataset.skip;
}

controls.toggle.addEventListener('click', videoPlayPause);
controls.video.addEventListener('click', videoPlayPause);

controls.video.addEventListener('play', updateButton);
controls.video.addEventListener('pause', updateButton);

controls.skip.forEach(button => button.addEventListener('click', skipTime))
