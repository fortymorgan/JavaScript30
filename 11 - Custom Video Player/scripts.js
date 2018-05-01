const player = document.querySelector('.player');

const controls = {
  toggle: player.querySelector('.toggle'),
  video: document.querySelector('.viewer'),
  skipButtons: document.querySelectorAll('[data-skip]'),
  sliders: document.querySelectorAll('.player__slider'),
  progressBar: document.querySelector('.progress__filled')
};

const videoPlayPause = () => {
  controls.video[controls.video.paused ? 'play' : 'pause']();
};

const updateButton = () => {
  controls.toggle.innerText = controls.video.paused ? '►' : '❚❚';
};

const skipTime = event => {
  controls.video.currentTime += +event.target.dataset.skip;
};

const rangeUpdate = event => {
  controls.video[event.target.name] = event.target.value;
};

const progressBarRender = () => {
  const percentage = controls.video.currentTime / controls.video.duration * 100;
  controls.progressBar.style['flex-basis'] = `${percentage}%`;
};

controls.toggle.addEventListener('click', videoPlayPause);
controls.video.addEventListener('click', videoPlayPause);

controls.video.addEventListener('play', updateButton);
controls.video.addEventListener('pause', updateButton);

controls.skipButtons.forEach(button => button.addEventListener('click', skipTime));

controls.sliders.forEach(slider => slider.addEventListener('input', rangeUpdate));

controls.video.addEventListener('timeupdate', progressBarRender);
