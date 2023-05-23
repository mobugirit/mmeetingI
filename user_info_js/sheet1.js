// 기능 1. mbtiresult
// 기능 2. radio를 한번이라도 click해야 다음가능
// 기능 3. 다음 클릭 시 profileMbti 저장 및 표시
const radioInputs = document.querySelectorAll(".mbtiradioinput");
const daum1 = document.querySelector("#daum1");

const GODAUM_CLASS = "goDaum"

let userMbti1;
let userMbti2;
let userMbti3;
let userMbti4;
let userMbti;

function onDaum1Click(event){
  event.preventDefault();
  sheet1.classList.add(HIDDEN_CLASS);
  sheet2.classList.remove(HIDDEN_CLASS);
  userMbti1 = document.querySelector("#EIresult").innerText;
  userMbti2 = document.querySelector("#SNresult").innerText;
  userMbti3 = document.querySelector("#TFresult").innerText;
  userMbti4 = document.querySelector("#JPresult").innerText;
  userMbti = userMbti1 + userMbti2 + userMbti3 + userMbti4;
  const profileMbti = document.querySelectorAll(".profileMbti");
  profileMbti.forEach((item) => {
    item.innerText = userMbti;
  })
}

function goDaum1(){
  daum1.classList.add(GODAUM_CLASS);
  daum1.onclick = onDaum1Click;
}

radioInputs.forEach((radio)=>{
  radio.addEventListener("click",function() {
    const resultId = this.name + "result";
    const result = document.querySelector(`#${resultId}`);

    const radioValue = this.value;

    if (radioValue === "oxxxx") {
      result.innerText = this.name[0];
    }else if (radioValue === "xoxxx") {
      result.innerText = this.name[0].toLowerCase();
    }else if (radioValue === "xxoxx") {
      result.innerText = "?";
    }else if (radioValue === "xxxox") {
      result.innerText = this.name[1].toLowerCase();
    }else {
      result.innerText = this.name[1];
    }
    goDaum1();
  })
})