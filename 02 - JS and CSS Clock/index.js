const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hand = document.querySelector(".hand");


const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  const minutes = now.getMinutes();
  const minDegrees = (minutes / 60 * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  const hours = now.getHours();
  const hourDegrees = (hours / 12 * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  // if (secondDegrees === 90 || minDegrees === 90 || hourDegrees === 90) {
  //   hand.style.transition = 'all 0s';
  // }
}
window.onload = setInterval(setDate, 1000);
