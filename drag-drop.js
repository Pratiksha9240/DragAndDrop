const images = document.getElementsByClassName("imgBox");

const boxes = document.getElementsByClassName("whiteBox");

for (image of images) {
  image.addEventListener("dragstart", (e) => {
    console.log("Drag started");
    e.target.className += " hold";
    setTimeout(() => {
      e.target.className = "hide";
    }, 0);
  });

  image.addEventListener("dragend", () => {
    console.log("Drag ended");
  });
}

for (box of boxes) {
  box.addEventListener("dragover", () => {
    console.log("DragOver");
  });

  box.addEventListener("dragenter", () => {
    console.log("DragOver");
  });

  box.addEventListener("dragleave", () => {
    console.log("DragOver");
  });

  box.addEventListener("drop", () => {
    console.log("DragOver");
  });
}
