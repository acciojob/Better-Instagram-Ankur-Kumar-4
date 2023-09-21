const image_div = document.getElementsByClassName("image");

function dragstart(event) {
    const event_id = event.target.id;
    const prev_img = event.target;
    console.log(prev_img)
    event.dataTransfer.setData("pre_img", prev_img);
    event.dataTransfer.setData("id", event_id);
}

for (let i = 0; i < image_div.length; i++) {
    image_div[i].addEventListener("dragstart", dragstart);
}

function dragover(event) {
    event.preventDefault();
}

for (let i = 0; i < image_div.length; i++) {
    image_div[i].addEventListener("dragover", dragover);
}

function drop(event) {
    const drag_image = event.target;
    const prev_image = event.dataTransfer.getData("pre_img");
    console.log(prev_image)
    drag_image.id = event.dataTransfer.getData("id");
     
  
    
}

for (let i = 0; i < image_div.length; i++) {
    image_div[i].addEventListener("drop", drop);
}
