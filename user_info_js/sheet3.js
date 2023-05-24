// 기능 1. sexBtn click 기능
// 기능 2. sexBtn click에 따라 userSex저장 및 profile img 변경
// 기능 3. sexBtn click 해야 다음가능
let userSex = 0;

const manBtn = document.querySelector("#manBtn");
const womanBtn = document.querySelector("#womanBtn");
const profileImgMan = document.querySelectorAll(".manImg");
const profileImgWoman = document.querySelectorAll(".womanImg");

const SEXBTN_CLICKED = "BtnClicked"
const GHOST_CLASS = "ghost";

function onDaum3Click(event){ 
  event.preventDefault();
  sheet3.classList.add(HIDDEN_CLASS);
  sheet4.classList.remove(HIDDEN_CLASS);
}

function goDaum3(){
  daum3.classList.add(GODAUM_CLASS);
  daum3.onclick = onDaum3Click;
}

function onManBtnClick(event){
  event.preventDefault();
  event.target.classList.add(SEXBTN_CLICKED);
  womanBtn.classList.remove(SEXBTN_CLICKED);
  userSex = "man"; //userSex 저장
  profileImgMan.forEach((item)=>{
    item.classList.remove(GHOST_CLASS);
  })
  profileImgWoman.forEach((item)=>{
    item.classList.add(GHOST_CLASS);
  })
  goDaum3();
}
function onWomanBtnClick(event){
  event.preventDefault();
  event.target.classList.add(SEXBTN_CLICKED);
  manBtn.classList.remove(SEXBTN_CLICKED);
  userSex = "woman"; //userSex 저장
  profileImgWoman.forEach((item)=>{
    item.classList.remove(GHOST_CLASS);
  })
  profileImgMan.forEach((item)=>{
    item.classList.add(GHOST_CLASS);
  })
  goDaum3();
}

manBtn.addEventListener("click", onManBtnClick);
womanBtn.addEventListener("click", onWomanBtnClick);



