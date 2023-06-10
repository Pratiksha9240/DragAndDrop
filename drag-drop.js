const boxes = document.getElementsByClassName("dragBox");

const div = document.querySelector('.notify');


function drag(e){
  console.log("Drag started");
    e.target.className += " hold";
    e.dataTransfer.setData("text", e.target.id);
    setTimeout(() => {
      e.target.className = "hide";
    }, 0);
}

function dragend(e){
  e.target.className = 'imgBox1'

}

for (box of boxes) {
  box.addEventListener("dragover", (e) => {
    e.preventDefault()
    console.log("DragOver has been triggered");
  });

  box.addEventListener("dragenter", (e) => {
    console.log("Dragenter has been triggered");
    e.target.className += ' dashed'
  });

  box.addEventListener("dragleave", (e) => {
    console.log("dragleave has been triggered");
    e.target.className = 'dragBox'
  });

  box.addEventListener("drop", (e) => {
    console.log("drop has been triggered");
    var data = e.dataTransfer.getData("text");
    e.target.append(document.getElementById(data));
    div.textContent = 'Image dropped successfully'
    div.className = 'notify'

    setTimeout(() => {
        div.className = 'hide'
    }, 2000);

  });
}

function reset(){
    location.reload()
}