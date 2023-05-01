document.body.onload = addElement();
var my_div = newDiv = null;

  function addElement() {
    var newDiv = document.createElement("div");
    newDiv.classList.toggle('klava')
    newDiv.setAttribute('id','qwe')
    // newDiv.innerHTML = "<h1>Привет!</h1>";
    my_div = document.getElementById("a1");
    document.body.insertBefore (newDiv, my_div);git
  }
///////////////////////////////////////////////////////////////////////////////////////

let keyb = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

// document.onkeypres = function (event){
//     keyb.push(event.key);
//     console.log(keyb);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////

function v27() {
let v28 = '';
for (let i=0; i < keyb.length; i++){
  if (i==13){v28 += '<div class="fix"></div>';}
  if (i==26){v28 += '<div class="fix"></div>';}
  if (i==37){v28 += '<div class="fix"></div>';}

v28 += '<div  id="b1" class="btn" data="'+keyb[i]+'">'+ String.fromCharCode(keyb[i]) +'</div>';
}
document.querySelector("#qwe").innerHTML = v28;
}v27();

///////////////////////////////////////////////////////////////////////////////////////////////////////////
document.onkeypress = function (event){
   
    // console.log(event.code);
    // console.log(event.keyCode);
    document.querySelectorAll('#qwe .btn').forEach(function(element){
    element.classList.remove('push');
    });
    document.querySelector('#qwe .btn[data="' + event.keyCode + '"]').classList.add('push')
}
document.querySelectorAll('#qwe .btn').forEach(function(element){
  element.onclick = function(event){
    document.querySelectorAll('#qwe .btn').forEach(function(element){
      element.classList.remove('push');
      });
      let code = this.getAttribute('data')
      this.classList.add('push')
  }})


  // let keyb = [];

  // document.onkeypress = function (event){
  //     keyb.push(event.key);
  //     console.log(keyb);
  // }