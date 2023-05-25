// 기능 1. input 에 nextFocus, thisBlur 걸기
// 기능 2. kakaoid, password 정상입력됐으면 다음 가능

const userKakaoIDInput = document.querySelector("#userKakaoID");
const userPasswordInput = document.querySelector("#userKakaoIDNext");

let userKakaoID = "";
let userPassword = "";

let goID = false;
let goPW = false;

userKakaoIDInput.onkeydown = focusNext;
userPasswordInput.onkeydown = thisBlur;

function noDaum10() {
  daum10.classList.remove(GODAUM_CLASS);
  daum10.onclick = "";
}

function onDaum10Click(event){ 
  event.preventDefault();
  sheet10.classList.add(HIDDEN_CLASS);
  sheet11.classList.remove(HIDDEN_CLASS);
}

function goDaum10() {
  daum10.classList.add(GODAUM_CLASS);
  daum10.onclick = onDaum10Click;
}

function getUserPassword(event) {
  event.preventDefault();
  userPassword = event.target.value;
  if(userPassword !== ""){
    goPW = true;
  }
  else{goPW = false;}

  if(goID && goPW){goDaum10();}
  else{noDaum10();}
}

function getUserKakaoID(event) {
  event.preventDefault();
  userKakaoID = event.target.value;
  if(userKakaoID !== ""){
    goID = true;
  }
  else{goID = false;}
  
  if(goID && goPW){goDaum10();}
  else{noDaum10();}
}

userKakaoIDInput.addEventListener("blur", getUserKakaoID);
userPasswordInput.addEventListener("blur", getUserPassword);