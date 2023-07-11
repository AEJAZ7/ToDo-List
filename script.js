let addtodobutton=document.getElementById("addtodo");
let todocontainer=document.getElementById("to-docontainer");
let inputfile=document.getElementById("input-file");


addtodobutton.addEventListener("click",function(){
    var paragraph =document.createElement("p");
    paragraph.classList.add();
    paragraph.innerText=inputfile.value;
    todocontainer.appendChild(paragraph);
    inputfile.value = " ";
    paragraph.addEventListener("click",function(){

        paragraph.style.textDecoration ="line-through"
    })
    paragraph.addEventListener("dblclick",function(){
     todocontainer.removeChild(paragraph)

    })
})