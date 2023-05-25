// 기능 1. 실시간으로 몇자 작성했는지 보여주기
// 기능 2. textarea 를 건들기만 했어도 다음 가능
// 기능 3. textarea.value userintro 로 저장

const userIntroInput = document.querySelector(".introduceinput");
const introlength = document.querySelector(".introlength");

let userIntro = "";

function lengthWrite(event){
  userIntro = event.target.value;
  introlength.innerText = `${userIntro.length} / 150 자`;
}

function onDaum9Click(event){ 
  event.preventDefault();
  sheet9.classList.add(HIDDEN_CLASS);
  sheet10.classList.remove(HIDDEN_CLASS);
}

function goDaum9(event) {
  daum9.classList.add(GODAUM_CLASS);
  daum9.onclick = onDaum9Click;
}

userIntroInput.onkeydown = lengthWrite;
userIntroInput.onblur = goDaum9;