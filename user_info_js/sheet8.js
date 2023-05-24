// 기능 1. input 작성 후 blur -> userUniv 저장 및 profileUnivWrite
// 기능 2. userUniv.length > 0 이면 다음 가능
// 기능 3. input 에서 enter 누르면 blur

const userUnivInput = document.querySelector("#userUnivInput");
const profileUniv = document.querySelectorAll(".profileUniv");
let userUniv = "";

function noDaum4() {
  daum8.classList.remove(GODAUM_CLASS);
  daum8.onclick = "";
}

function onDaum8Click(event){ 
  event.preventDefault();
  sheet8.classList.add(HIDDEN_CLASS);
  //sheet9.classList.remove(HIDDEN_CLASS);
}

function goDaum8() {
  daum8.classList.add(GODAUM_CLASS);
  daum8.onclick = onDaum8Click;
}

function profileUnivWrite(event) {
  event.preventDefault();
  userUniv = event.target.value;
  profileUniv.forEach((item) => {
    item.innerText = userUniv;
  })
  if(userUniv !== ""){
    goDaum8();
  }
  else{
    noDaum8();
  }
}

userUnivInput.onkeydown = thisBlur;
userUnivInput.addEventListener("blur", profileUnivWrite);