/**
 * Create event listener to play the audio when press the key, considering: 
 * - It should change the style
 * - It should not wait the audio to finish before response on another press
 */
window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  key.classList.add('playing');
});
/**
 * Create event listener to remove the transition 
 */
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',(e) => {
  if (e.propertyName !== 'transform') return ;
  key.classList.remove('playing');
}))
