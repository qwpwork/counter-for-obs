//    Объект "название счетчика"
const countHeader = {
  countTitle: 'Count',

  titleUpdate() {
    localStorage.setItem('countTitle', this.countTitle);
    countText.innerText = this.countTitle;
    inputForTitle.value = this.countTitle;
  },

  titleSetOnLoad() {
    if (localStorage.getItem('countTitle') == undefined) {
      //countTitle уже == 'Count', поэтому инициализировать здесь не надо
      localStorage.setItem('countTitle', this.countTitle);
      this.titleUpdate();
    }
    else {
      this.countTitle = localStorage.getItem('countTitle');
      this.titleUpdate();
    }
  },

  setTitle(newValue) {
    this.countTitle = newValue;
    this.titleUpdate();
  }
}

//    Объект "число счетчика"
const countNumber = {
  countValue: 0,

  countUpdate() {
    localStorage.setItem('countValue', this.countValue);
    countValue.innerText = this.countValue;
    inputForValue.value = this.countValue;
  },

  increment() {
    this.countValue++;
    this.countUpdate();
  },

  decrement() {
    if (this.countValue > 0) {
      this.countValue--;
      this.countUpdate();
    }
  },

  countSetOnLoad() {
    if (localStorage.getItem('countValue') == undefined) {
      //countValue уже 0, поэтому инициализировать здесь не надо
      localStorage.setItem('countValue', this.countValue);
      this.countUpdate();
    }
    else {
      this.countValue = parseInt(localStorage.getItem('countValue'));
      this.countUpdate();
    }
  },

  reset() {
    this.countValue = 0
    this.countUpdate();
  },

  setValue(newValue) {
    this.countValue = newValue;
    this.countUpdate();
  }
}

//Объект "Цвет текста"
const textColor = {
  textColor: '#fff',

  textColorUpdate() {
    localStorage.setItem('textColor', this.textColor);
    inputForTextColor.value = this.textColor;
    countText.style.color = this.textColor;
    countValue.style.color = this.textColor;
  },

  textColorSetOnLoad() {
    if (localStorage.getItem('textColor') == undefined) {
      localStorage.setItem('textColor', this.textColor);
      this.textColorUpdate();
    }
    else {
      this.textColor = localStorage.getItem('textColor');
      this.textColorUpdate();
    }
  },

  textColorSet(newValue) {
    this.textColor = newValue;
    this.textColorUpdate();
  }
}

//Объект "Цвет фона"
const backgroundColor = {
  bgColor: '#00ff00',

  bgColorUpdate() {
    localStorage.setItem('bgColor', this.bgColor);
    inputForBgColor.value = this.bgColor;
    countWrapper.style.background = this.bgColor;
  },

  bgColorSetOnLoad() {
    if (localStorage.getItem('bgColor') == undefined) {
      localStorage.setItem('bgColor', this.bgColor);
      this.bgColorUpdate();
    }
    else {
      this.bgColor = localStorage.getItem('bgColor');
      this.bgColorUpdate();
    }
  },

  bgColorSet(newValue) {
    this.bgColor = newValue;
    this.bgColorUpdate();
  }
}

//    Константы для числа
const countValue    = document.getElementById('countValue'),
      decrementBtn  = document.getElementById('countDecrement'),
      incrementBtn  = document.getElementById('countIncrement'),
      resetBtn      = document.getElementById('countReset'),
      inputForValue = document.getElementById('countInput');

//    Константы для названия счетчика
const countText     = document.getElementById('countText'),
      inputForTitle = document.getElementById('inputForTitle');

//    Константы для цвета
const countWrapper      = document.getElementById('countWrapper'),
      inputForTextColor = document.getElementById('inputForTextColor'),
      inputForBgColor   = document.getElementById('inputForBgColor');

// Прослушиватели 
window.addEventListener('DOMContentLoaded', function() {
  countHeader.titleSetOnLoad();
  countNumber.countSetOnLoad();
  textColor.textColorSetOnLoad();
  backgroundColor.bgColorSetOnLoad();
});

decrementBtn.addEventListener('click', function(event) {
  countNumber.decrement();
});

window.addEventListener('keypress', function(event) {
// Хоткеи на счетчик
  switch(event.key) {
    case "+":
      countNumber.increment();
      break;
    case "-":
      countNumber.decrement();
      break;
    default:
      break;
  }
})

incrementBtn.addEventListener('click', function() {
  countNumber.increment();
});

resetBtn.addEventListener('dblclick', function() {
  countNumber.reset();
});

inputForValue.addEventListener('input', function(event) {
  this.value.replace(/\D/g, '');
  countNumber.setValue(inputForValue.value);
});

inputForTitle.addEventListener('input', function() {
  countHeader.setTitle(inputForTitle.value);
});

inputForTextColor.addEventListener('input', function() {
  textColor.textColorSet(inputForTextColor.value);
});

inputForBgColor.addEventListener('input', function() {
  backgroundColor.bgColorSet(inputForBgColor.value);
});
