const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");


function showNotes()
{
    notesContainer.innerHTML = localStorage.getItem("notes")
}

 showNotes();

function updateStorage(){

    localStrorage.setItem("notes",notesContainer.notesContainer);
}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className  = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).append(img);
})

notesContainer.addEventListener("click", function(e){
      
    if(e.target.tagName ==="IMG"){
       e.target.parentElement.remove();
       updateStorage()
    }
    else if(e.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
           nt.onKeyup = function(){
            updateStorage();
           }
        })
    }
})


