const countBlock = document.getElementById('countValue'),
      resetCount = document.getElementById('countReset'),
      countInput = document.getElementById('countInput'),
      countSetBtn = document.getElementById('countSetBtn'),
      countDecrement = document.getElementById('countDecrement'),
      countIncrement = document.getElementById('countIncrement');


if (localStorage.getItem('count') == undefined) {
  localStorage.setItem('count', 0);
}

let countValue = parseInt(localStorage.getItem('count'));

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
      console.log('error');
      break;
  }
  localStorage.setItem('count', countValue)
  countBlock.innerHTML = countValue;
}

countIncrement.addEventListener("click", function(event) {
  incrementAndDecrement('plus');
});

countDecrement.addEventListener("click", function(event) {
  incrementAndDecrement('minus');
});

countInput.addEventListener("keypress", function(event){
  if(event.charCode >= 48 && event.charCode <= 57 == false) {
    event.preventDefault();
  }
});

countSetBtn.addEventListener("click", function(){
  if ((countInput.value != "") && (countInput.value >= 0)) {
    countBlock.innerText = countInput.value;
    countValue = parseInt(countInput.value);
    localStorage.setItem('count', countValue)
  }
})

countReset.addEventListener("dblclick", function(){
  if (countValue != 0) {
    countBlock.innerText = 0;
    countValue = 0;
    localStorage.clear();
  }
})