
var my_div = newDiv = null;
var len = newLen =  null;
var kas = newKas = null;

var tab = newTab = null;
var ca = newCa = null;

document.body.onload = addElement();
  function addElement() {
    var newKas = document.createElement("textarea");
    var newDiv = document.createElement("div");
    var newLen = document.createElement("div");

    var newTab = document.createElement("div");
    var newCa = document.createElement("div");


    newDiv.classList.toggle('klava')
    newLen.classList.toggle('by')
    newKas.classList.toggle('kas')
    newDiv.setAttribute('id','qwe')
    newKas.innerHTML = "Клавиатуру буду ещё доделывать 04-05-23, если будет возможность посмотреть ещё раз 04-05-23, отпишите пожалуйста об этом. Клавиатура создана в операционной системе Windows. Для переключения языка отдельная кнопка EN/BY. Для ввода/удаления букв в эту область нужно поставить курсор в нужное место. Проверить работоспособность by раскладки можно и на русской раскладке не будут подсвечиваться три буквы щ,и,ъ.";
    
    newTab.classList.toggle('by')
    newTab.setAttribute('id','tab')

    newCa.classList.toggle('by')
    newCa.setAttribute('id','ca')



    document.body.appendChild (newKas)
    document.body.insertBefore (newDiv, my_div);
    document.body.insertBefore (newLen, len);
   
    document.body.insertBefore (newTab, tab);
    document.querySelector('#tab').innerText = 'tab';
   
    document.body.insertBefore (newCa, ca);
    document.querySelector('#ca').innerText = 'caps lock';

   
  }
///////////////////////////////////////////////////////////////////////////////////////

let keybEng = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
let keybBy = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1118, 1079, 1093, 39, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1110, 1090, 1100, 1073, 1102, 46];
let keyb=keybEng;
const by = document.querySelector('.by')///тег селектор
by.innerText = 'EN'
by.addEventListener('click', function(){
  if(keyb === keybBy) {
    keyb = keybEng
    by.innerText = 'EN'
  } else {
    keyb = keybBy
    by.innerText = 'BY'
  }
 v27()
 btnClick()
  by.classList.toggle('push')
}
)
//////////////////////////////////////////////////////////////////////////////////////////////////
function v27() {
let v28 = '';
for (let i=0; i < keyb.length; i++){
  if (i==13){v28 += '<div class="fix"></div>';}
  if (i==26){v28 += '<div class="fix"></div>';}
  if (i==37){v28 += '<div class="fix"></div>';}

v28 += '<div  class="btn" data="'+keyb[i]+'">'+ String.fromCharCode(keyb[i]) +'</div>';
}
document.querySelector("#qwe").innerHTML = v28;
}v27();

///////////////////////////////////////////////////////////////////////////////////////////////////////////
document.onkeypress = function (event){
   
    document.querySelectorAll('#qwe .btn').forEach(function(element){
    element.classList.remove('push');
    });
    document.querySelector('#qwe .btn[data="' + event.keyCode + '"]').classList.add('push')
}
const onClickHandler = (event) => {


}
const btnClick = () => {
  document.querySelectorAll('#qwe .btn').forEach(function(element){
    element.onclick = function(event){
      onClickHandler(event)
      document.querySelectorAll('#qwe .btn').forEach(function(element){
        element.classList.remove('push');
        });
        let code = this.getAttribute('data')
        this.classList.add('push')
    }})
} 
btnClick()



// let keyHard = [];
// document.onkeypress = function (event){
// keyHard.push(event.code);
// console.log(keyHard);
//     }



//   // let keyb = [];

//   // document.onkeypress = function (event){
//   //     keyb.push(event.charCode);
//   //     console.log(keyb);
//   // }
///////////////////////////////////
/////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////
///////////////////////////////////
////////////////////////////////////

