var amtLetters, el, iterations, typeLetter;

el = document.getElementsByClassName('typed-sentence')[0];

amtLetters = el.innerHTML.length;
	
iterations = 0;

typeLetter = function() {
  var newWidth;
  iterations += 1;
  newWidth = iterations * .6;
  el.style.width = newWidth + 'em';
  if (iterations <= amtLetters) {
    return window.requestAnimationFrame(typeLetter);
  }
};

window.requestAnimationFrame(typeLetter);