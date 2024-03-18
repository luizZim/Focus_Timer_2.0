import state from './state.js';
import * as el from './elements.js';
import * as sound from './sounds.js';
import * as timer from './timer.js';


export function toggleRunning(){
 state.isRunning = document.documentElement.classList.toggle('running');

  timer.countdown();
  sound.buttonPressAudio.play();
}

export function reset(){
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();
  sound.buttonPressAudio.play();
}

export function set(){
  el.minutes.setAttribute('contenteditable', true);
  el.minutes.focus();
  sound.buttonPressAudio.play();
}
export function plus(){
  let minutes = Number(el.minutes.textContent);
  minutes += 5
  sound.buttonPressAudio.play()
  state.seconds = 0
  minutes = minutes > 60 ? 60 : minutes 
  timer.updateDisplay(minutes);
}

export function minus(){
 let minutes = Number(el.minutes.textContent);
  minutes -= 5
  sound.buttonPressAudio.play()
  timer.updateDisplay(minutes);

  if(minutes < 0){
    reset()
    return
  }
  
}

export function toggleFlorestMusic(){
  el.treeCard.classList.toggle('card-active');
  state.isFlorestMute = document.documentElement.classList.toggle('music-on');
  if(state.isFlorestMute){
    sound.florestAudio.play();
    return;
  }
  sound.florestAudio.pause();
  
}

export function toggleRainMusic(){
  el.rainCard.classList.toggle('card-active');
  state.isRainMute = document.documentElement.classList.toggle('music-on');
  if(state.isRainMute){
    sound.rainAudio.play();
    return;
  }
  sound.rainAudio.pause();
}

export function toggleStoreMusic(){
  el.coffeShopCard.classList.toggle('card-active');
  state.isCoffeShopMute = document.documentElement.classList.toggle('music-on');
  if(state.isCoffeShopMute){
    sound.storeAudio.play();
    return;
  }
  sound.storeAudio.pause();
}

export function toggleFireMusic(){
  el.fireCard.classList.toggle('card-active');
  state.isFireMute = document.documentElement.classList.toggle('music-on');
  if(state.isFireMute){
    sound.fireAudio.play();
    return;
  }
  sound.fireAudio.pause();
}