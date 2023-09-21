const image_div = document.getElementsByClassName("image");
let sourceImageId = null;

function dragstart(event) {
    sourceImageId = event.target.id;
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
    event.preventDefault();
    const targetImage = event.target;
    const targetImageId = targetImage.id;

    
    event.target.id = sourceImageId;
    document.getElementById(sourceImageId).id = targetImageId;

    
    sourceImageId = null;
}

for (let i = 0; i < image_div.length; i++) {
    image_div[i].addEventListener("drop", drop);
}
