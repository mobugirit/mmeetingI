// 기능 1. hopeagemin 에서 enter 치면 hopeagemax focus
// 기능 2. hopeage min/max 둘다 숫자입력 받아야 다음 가능
// 기능 3. min<20 이면 min=20, max>35 이면 max=35 으로 자동 조정

const hopeAgeMinInput = document.querySelector("#hopeAgeMinInput");
const hopeAgeMaxInput = document.querySelector("#hopeAgeMinInputNext");

let hopeAgeMin = 0;
let hopeAgeMax = 0;

function thisBlur(event) {
  if(event.keyCode === 13){
    event.target.blur();
  }
}

function focusNext(event) {
  if (event.keyCode === 13){
    const next = document.querySelector(`#${event.target.id}Next`);
    next.focus();
  }
}

hopeAgeMinInput.onkeydown = focusNext;
hopeAgeMaxInput.onkeydown = thisBlur;

let goMin = false;
let goMax = false;

const daum6 = document.querySelector("#daum6");

function onDaum6Click(event){ 
  event.preventDefault();
  sheet6.classList.add(HIDDEN_CLASS);
  sheet7.classList.remove(HIDDEN_CLASS);
}

function goDaum6() {
  daum6.classList.add(GODAUM_CLASS);
  daum6.onclick = onDaum6Click;
}

function getHopeAgeMin(event) {
  event.preventDefault();
  if(event.target.value < 20) {
    event.target.value = 20;
  }
  if(event.target.value > 35) {
    event.target.value = 35;
  }
  hopeAgeMin = event.target.value;

  goMin = true;
  if(goMin && goMax){
    goDaum6();
  }
}

function getHopeAgeMax(event) {
  event.preventDefault();
  if(event.target.value < 20) {
    event.target.value = 20;
  }
  if(event.target.value > 35) {
    event.target.value = 35;
  }
  hopeAgeMax = event.target.value;

  goMax = true;
  if(goMin && goMax){
    goDaum6();
  }
}

hopeAgeMinInput.addEventListener("blur", getHopeAgeMin);
hopeAgeMaxInput.addEventListener("blur", getHopeAgeMax);
