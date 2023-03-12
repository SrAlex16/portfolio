const controller = document.querySelector('input[type=range]');
const radialProgress = document.querySelector('.RadialProgress');

const setProgress = (progress) => {
  radialProgress.innerHTML = progress = document.value = 20;
  const value = `${progress}%`;
  radialProgress.style.setProperty('--progress', value)
}

setProgress(radialProgress.value)
