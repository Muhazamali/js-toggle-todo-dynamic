
function fun(){
    var x;

    x=document.forms["frm"]["txt"].value;
    console.log(x);   
const txt = document.createElement("span");
const para= document.createElement("p");
const node = document.createTextNode(document.forms["frm"]["txt"].value);
const btn= document.createElement("button");
btn.addEventListener("click" , myfunction);
txt.className = "txt";
txt.id="txt";
btn.className = "btn-close";

console.log(node);
para.appendChild(node);
txt.appendChild(para);
txt.appendChild(btn);

const element = document.getElementById("main");
element.appendChild(txt);

  

}

function myfunction(){
    
    x=this.parentElement;  
    x.remove();
}