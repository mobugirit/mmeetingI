const sheet0 = document.querySelector("#sheet0");
const sheet1 = document.querySelector("#sheet1");
const sheet2 = document.querySelector("#sheet2");
const sheet3 = document.querySelector("#sheet3");
const sheet4 = document.querySelector("#sheet4");
const sheet5 = document.querySelector("#sheet5");
const sheet6 = document.querySelector("#sheet6");
const sheet7 = document.querySelector("#sheet7");
const sheet8 = document.querySelector("#sheet8");
const sheet9 = document.querySelector("#sheet9");
const sheet10 = document.querySelector("#sheet10");
const sheet11 = document.querySelector("#sheet11");

const izun1 = document.querySelector("#izun1");
const izun2 = document.querySelector("#izun2");
const izun3 = document.querySelector("#izun3");
const izun4 = document.querySelector("#izun4");
const izun5 = document.querySelector("#izun5");
const izun6 = document.querySelector("#izun6");
const izun7 = document.querySelector("#izun7");
const izun8 = document.querySelector("#izun8");
const izun9 = document.querySelector("#izun9");
const izun10 = document.querySelector("#izun10");
const izun11 = document.querySelector("#izun11");
const daum0 = document.querySelector("#daum0");
const daum1 = document.querySelector("#daum1");
const daum2 = document.querySelector("#daum2");
const daum3 = document.querySelector("#daum3");
const daum4 = document.querySelector("#daum4");
const daum5 = document.querySelector("#daum5");
const daum6 = document.querySelector("#daum6");
const daum7 = document.querySelector("#daum7");
const daum8 = document.querySelector("#daum8");
const daum9 = document.querySelector("#daum9");
const daum10 = document.querySelector("#daum10");

const HIDDEN_CLASS = "hidden";

function onIzun1Click(event){
  event.preventDefault();
  sheet1.classList.add(HIDDEN_CLASS);
  sheet0.classList.remove(HIDDEN_CLASS);
}
function onIzun2Click(event){
  event.preventDefault();
  sheet2.classList.add(HIDDEN_CLASS);
  sheet1.classList.remove(HIDDEN_CLASS);
}
function onIzun3Click(event){
  event.preventDefault();
  sheet3.classList.add(HIDDEN_CLASS);
  sheet2.classList.remove(HIDDEN_CLASS);
}
function onIzun4Click(event){
  event.preventDefault();
  sheet4.classList.add(HIDDEN_CLASS);
  sheet3.classList.remove(HIDDEN_CLASS);
}
function onIzun5Click(event){
  event.preventDefault();
  sheet5.classList.add(HIDDEN_CLASS);
  sheet4.classList.remove(HIDDEN_CLASS);
}
function onIzun6Click(event){
  event.preventDefault();
  sheet6.classList.add(HIDDEN_CLASS);
  sheet5.classList.remove(HIDDEN_CLASS);
}
function onIzun7Click(event){
  event.preventDefault();
  sheet7.classList.add(HIDDEN_CLASS);
  sheet6.classList.remove(HIDDEN_CLASS);
}
function onIzun8Click(event){
  event.preventDefault();
  sheet8.classList.add(HIDDEN_CLASS);
  sheet7.classList.remove(HIDDEN_CLASS);
}
function onIzun9Click(event){
  event.preventDefault();
  sheet9.classList.add(HIDDEN_CLASS);
  sheet8.classList.remove(HIDDEN_CLASS);
}
function onIzun10Click(event){
  event.preventDefault();
  sheet10.classList.add(HIDDEN_CLASS);
  sheet9.classList.remove(HIDDEN_CLASS);
}
function onIzun11Click(event){
  event.preventDefault();
  sheet11.classList.add(HIDDEN_CLASS);
  sheet10.classList.remove(HIDDEN_CLASS);
}
function onDaum0Click(event){
  event.preventDefault();
  sheet0.classList.add(HIDDEN_CLASS);
  sheet1.classList.remove(HIDDEN_CLASS);
}

izun1.onclick = onIzun1Click;
izun2.onclick = onIzun2Click;
izun3.onclick = onIzun3Click;
izun4.onclick = onIzun4Click;
izun5.onclick = onIzun5Click;
izun6.onclick = onIzun6Click;
izun7.onclick = onIzun7Click;
izun8.onclick = onIzun8Click;
izun9.onclick = onIzun9Click;
izun10.onclick = onIzun10Click;
izun11.onclick = onIzun11Click;
daum0.onclick = onDaum0Click;
