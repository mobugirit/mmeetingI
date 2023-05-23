// 기능 1. 누를 때마다 색깔 변경
// array에 hopembti 담기
// 기능 2. array.Lenth > 0 일때만 다음가능

let hopeMbtis = [];

const HOPEMBTI_CLICKED = "BtnClicked"
const daum2 = document.querySelector("#daum2");

function noDaum2(){
  daum2.classList.remove(GODAUM_CLASS);
  daum2.onclick = "";
}

function onDaum2Click(event){ 
  event.preventDefault();
  sheet2.classList.add(HIDDEN_CLASS);
  sheet3.classList.remove(HIDDEN_CLASS);
}

function goDaum2(){
  daum2.classList.add(GODAUM_CLASS);
  daum2.onclick = onDaum2Click;
}

function ifGoDaum2(){
  if(hopeMbtis.length === 0){
    noDaum2();
  }
}

function hopeMbtiClickedAgain(event){
  
  event.target.classList.remove(HOPEMBTI_CLICKED);
  event.target.onclick = hopeMbtiClicked;
  hopeMbtis = hopeMbtis.filter((mbti)=> mbti!==event.target.id);
  ifGoDaum2();
  notAllSelect();
  //console.log(hopeMbtis);
}

function hopeMbtiClicked(event){
  
  event.target.classList.add(HOPEMBTI_CLICKED);
  event.target.onclick = hopeMbtiClickedAgain;
  hopeMbtis.push(event.target.id);
  goDaum2();
  //console.log(hopeMbtis);
}

const hopeMbtiBtns = document.querySelectorAll(".hopembtigrid a");
hopeMbtiBtns.forEach((btn)=>{
  btn.onclick = hopeMbtiClicked;
})

// 기능 3. allselect

const allSelect = document.querySelector(".allselectbtn");

/* 전체선택을 다시누르면 비우기 기능 
function allSelectClickedAgain(event){
  event.preventDefault();
  event.target.classList.remove(HOPEMBTI_CLICKED);
  hopeMbtiBtns.forEach((btn)=>{
    if(hopeMbtis.includes(btn.id)){
      console.log(btn);
      btn.click();
    }
  })
  allSelect.onclick = allSelectClicked;
} */

function notAllSelect(){
  allSelect.classList.remove(HOPEMBTI_CLICKED);
}

function allSelectClicked(event){
  event.preventDefault();
  event.target.classList.add(HOPEMBTI_CLICKED);
  hopeMbtiBtns.forEach((btn)=>{
    if(hopeMbtis.includes(btn.id) === false){
      btn.click();
    }
  })
  //allSelect.onclick = allSelectClickedAgain;
  //console.log(hopeMbtis);
}

allSelect.onclick = allSelectClicked;