(function(){
    function playSound(e) {
        const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const message = document.getElementById('info');
        console.log(message);
        //if (!sound) return; stop function if not get the right key
        if (!sound) {
            message.innerHTML = 'Please hit the key above';
            return;
        } else {
            sound.currentTime = 0;
            sound.play();
            key.classList.add('playing');
            message.innerHTML = 'Sounds Awesome, yo~';
        }
    }
    function removeAnimation(e) {
      if(e.propertyName !== 'transform') return;
      this.classList.remove('playing');
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeAnimation));
    window.addEventListener('keydown', playSound);
})();
