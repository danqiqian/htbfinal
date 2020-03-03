console.log("hello");
//var connects = [document.getElementsByClassName('mt2')];
var connects = document.querySelectorAll('[data-control-name="people_connect"]');
console.log(connects);

//connects[i].innerText="I will ignore you";
for(var i=0;i<connects.length;i++){
connects[i].click();
}

//connects.push(connects[0].nextSibling);