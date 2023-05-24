// 기능 1. userAge 실시간으로 말풍선하고 아래 ageResult에 반영
// 기능 2. range 건드리면 다음 가능
// 기능 3. range.value 20일때만 ageLimit 보이기

let windowWidth = window.matchMedia("screen and (min-width: 479px)");

const userAgeInput = document.querySelector(".ageRange");
const ageResult = document.querySelector(".ageResult");
const profileAge = document.querySelectorAll(".text.profileAge");
const profileAgeS = document.querySelectorAll(".texts.profileAge")
const ageLimit = document.querySelector(".ageLimit");
let userAge = 0;

function onDaum5Click(event){ 
  event.preventDefault();
  sheet5.classList.add(HIDDEN_CLASS);
  sheet6.classList.remove(HIDDEN_CLASS);
}

function goDaum5(){
  daum5.classList.add(GODAUM_CLASS);
  daum5.onclick = onDaum5Click;
}

function marginCal(userAge) {
  if (windowWidth.matches) {
    return (userAge-20)*320/15 + 2;
  }
  else{
    return (userAge-20)*275/15 + 2;
  }
}

function paintAge() {
  userAge = parseInt(userAgeInput.value);

  ageResult.innerText = userAge;
  ageResult.style.marginLeft = marginCal(userAge);

  profileAge.forEach((item)=>{
    item.innerText = `${userAge}살!`;
  })
  profileAgeS.forEach((item)=>{
    item.innerText = `${userAge}살`;
  })

  ageLimit.classList.add(HIDDEN_CLASS);
  goDaum5();
  
  if(userAge === 20){ageLimit.classList.remove(HIDDEN_CLASS);}
}

userAgeInput.oninput = paintAge;