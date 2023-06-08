const images = document.getElementsByClassName("imgBox");

const boxes = document.getElementsByClassName("dragBox");

const div = document.querySelector('.notify');

for (image of images) {
  image.addEventListener("dragstart", (e) => {
    console.log("Drag started");
    e.target.className += " hold";
    setTimeout(() => {
      e.target.className = "hide";
    }, 0);
  });

  image.addEventListener("dragend", (e) => {
    console.log("Drag ended");
    e.target.className = 'imgBox'
  });
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
    e.target.append(image)
    // setTimeout(() => {
    //     e.target.className = "imgBox dragBox";
    //   }, 0);
    div.textContent = 'Image dropped successfully'
    div.className = 'notify'

    setTimeout(() => {
        div.className = 'hide'
    }, 2000);

  });
}

function reset(){
    image.className = 'imgBox'
    box.className = 'dragBox'
}