// 기능 1. 하나라도 click 해야 다음 가능
// 기능 2. userResidence 저장 및 profileResidence 반영

const residenceRadios = document.querySelectorAll(".residenceradio");
const profileResidence = document.querySelectorAll(".profileResidence");

let userResidence = "";

function onDaum7Click(event){ 
  event.preventDefault();
  sheet7.classList.add(HIDDEN_CLASS);
  sheet8.classList.remove(HIDDEN_CLASS);
  
  profileResidence.forEach((item)=>{
    item.innerText = userResidence;
  })
}

function goDaum7(event){
  daum7.classList.add(GODAUM_CLASS);
  daum7.onclick = onDaum7Click;
}

residenceRadios.forEach((radio)=>{
  radio.addEventListener("click", function() {
    userResidence = this.value;
    goDaum7();
  });
})

