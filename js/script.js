const countBlock = document.getElementById('countValue'),
      resetCount = document.getElementById('countReset'),
      countInput = document.getElementById('countInput'),
      countSetBtn = document.getElementById('countSetBtn'),
      setTextColor = document.getElementById('inputForTextColor'),
      setBgColor = document.getElementById('inputForBgColor'),
      setTitle = document.getElementById('inputForCountTitle'),
      countDecrement = document.getElementById('countDecrement'),
      countWrapper = document.getElementById('countWrapper'),
      countDescription = document.getElementById('countDescription'),
      countIncrement = document.getElementById('countIncrement');


if (localStorage.getItem('count') == undefined) {
  localStorage.setItem('count', 0);
}

let countValue = parseInt(localStorage.getItem('count'));
countInput.value = countValue;

countBlock.innerHTML = countValue;

function incrementAndDecrement(option) {
  switch (option) {
    case 'plus': 
      countValue += 1;
      break;
    case 'minus':
      if (countValue > 0) {
        countValue -= 1;
      }
      break;
    default:
      console.log('unknown operation');
      break;
  }
  localStorage.setItem('count', countValue)
  countBlock.innerHTML = countValue;
  countInput.value = countValue;
}

countIncrement.addEventListener("click", function(event) {
  incrementAndDecrement('plus');
});

countDecrement.addEventListener("click", function(event) {
  incrementAndDecrement('minus');
});

countInput.addEventListener("input", function(event){
  countBlock.innerHTML = countInput.value;
  countValue = parseInt(countInput.value);
  localStorage.setItem('count', countValue);
});

setTextColor.addEventListener("input", function(){
  countDescription.style.color = setTextColor.value;
  countBlock.style.color = setTextColor.value;
});

setBgColor.addEventListener("input", function(){
  countWrapper.style.background = setBgColor.value;
});

setTitle.addEventListener("input", function(){
  countDescription.innerHTML = setTitle.value;
});

countReset.addEventListener("dblclick", function(){
  if (countValue != 0) {
    countValue = 0;
    localStorage.clear();
    countBlock.innerText = 0;
    countInput.value = countValue;
  }
});