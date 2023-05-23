// 기능 1. input 작성 후 blur -> userName 저장 및 profileNameWrite
// 기능 2. userName.length > 0 이면 다음 가능

const userNameInput = document.querySelector("#userNameInput");
const profileName = document.querySelectorAll(".profileName");
let userName = "";

const daum4 = document.querySelector("#daum4");

function noDaum4() {
  daum4.classList.remove(GODAUM_CLASS);
  daum4.onclick = "";
}

function onDaum4Click(event){ 
  event.preventDefault();
  sheet4.classList.add(HIDDEN_CLASS);
  sheet5.classList.remove(HIDDEN_CLASS);
}

function goDaum4() {
  daum4.classList.add(GODAUM_CLASS);
  daum4.onclick = onDaum4Click;
}

function profileNameWrite(event) {
  event.preventDefault();
  userName = event.target.value;
  profileName.forEach((item) => {
    item.innerText = userName;
  })
  if(userName !== ""){
    goDaum4();
  }
  else{
    noDaum4();
  }
}

userNameInput.addEventListener("blur", profileNameWrite);