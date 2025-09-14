window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; // stop the function from running
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
})


// this is used for the key 
function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing')
    console.log(e.propertyName);
    
}


const keys = document.querySelectorAll('.key');
console.log(keys);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));