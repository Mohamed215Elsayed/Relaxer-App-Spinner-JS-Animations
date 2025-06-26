const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;//the total duration of the animation (7.5 seconds)
const breatheTime = (totalTime / 5) * 2;//the duration of the "breathe in" and "breathe out" phases (3 seconds)
const holdTime = totalTime / 5;//the duration of the "hold" phase (1.5 seconds)

breathAnimation();//the main function that handles the breathing animation effect

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';//Adds the class "grow" to the container element, which likely triggers a CSS animation that makes the container grow.

  setTimeout(() => {//Waits for breatheTime (3 seconds) using setTimeout().
    text.innerText = 'Hold';

    setTimeout(() => {//Waits for holdTime (1.5 seconds) using setTimeout().
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);

  }, breatheTime);
}
// This will repeat the animation every 7.5 seconds
setInterval(breathAnimation, totalTime);
