const image_div = document.getElementsByClassName("image");

function dragstart(event) {
    const event_id = event.target.id;
    
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
  
    let target = event.target.id;//div2
    let source =  event.dataTransfer.getData("id");//div1
      
    let target_el = document.getElementById(target);
    console.log(target_el)
  
    let source_el = document.getElementById(source);
    console.log(source_el)
  
	  let tem = target; 
    target_el.id = source; 
    source_el.id = tem;   
     
   
}

for (let i = 0; i < image_div.length; i++) {
    image_div[i].addEventListener("drop", drop);
}











