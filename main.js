let myInput = document.getElementById("input"),

myDiv = document.getElementById("div"),
myNumButt = document.getElementsByClassName('num');

let operant1=0,
    operator='',
    operant2=0,
    active =0;
for(let i=0;i<myNumButt.length;i++){
  myNumButt[i].addEventListener('click',function(){
      insert(this.value);
      
  })
}

document.getElementById("divi").addEventListener('click', function() {
  if (active === 1) {
    equal();
    active = 0;
  }else{
    operant1 = Number(document.form.textview.value);
    document.form.textview.value ='';
  }
  
  active = 1;
  opener = 'd'
  
});

document.getElementById("mul").addEventListener('click', function() {
  if (active === 1) {
    equal();
  }else {
    operant1 = Number(document.form.textview.value);
    document.form.textview.value = '';
  }
 
  active = 1;
  opener ='m'
});

document.getElementById("sud").addEventListener('click', function() {
  if (active === 1) {
    equal();
  }else {
    operant1 = Number(document.form.textview.value);
    document.form.textview.value = '';
  }

  active = 1;
  opener = 'S'
});

document.getElementById("sum").addEventListener('click', function() {
  if (active === 1) {
    equal();
  }else {
    operant1 = Number(document.form.textview.value);
    document.form.textview.value = '';
  }
  active = 1;
  opener = 's'
});

document.getElementById("c").addEventListener('click',function () {
    document.form.textview.value = "";
    operant1 = 0,
    operator = '',
    operant2 = 0,
    active = 0
  
})

document.getElementById("ds").addEventListener("click", function() {
   document.form.textview.value= document.form.textview.value / 3.5;
});
document.getElementById("sd").addEventListener("click", function() {
  document.form.textview.value = document.form.textview.value * 3.5;
});
document.getElementById("es").addEventListener("click", function() {
  document.form.textview.value = document.form.textview.value * 3.91;
});
document.getElementById("se").addEventListener("click", function() {
  document.form.textview.value = document.form.textview.value / 3.91;
});


function insert(num){
   document.form.textview.value=document.form.textview.value+num;
}
function equal(){
  operant2 =Number(document.form.textview.value);
  let result;
  if(opener ==='d'){
    result = operant1/operant2
  }else if(opener ==='m'){
    result = operant1*operant2
  }else if (opener === 'S') {
    result = operant1-operant2
  }else if (opener === 's') {
    result = operant1+operant2
  }
  document.form.textview.value= result.toFixed(4);
}
document.getElementById("equal").addEventListener('click',equal);

function back(){
  var exp=document.form.textview.value;
  document.form.textview.value=exp.substring(0,exp.length-1);
}
