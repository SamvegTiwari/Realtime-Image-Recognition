function setup(){
 Canvas=createCanvas( 300,300);
 Canvas.position(500,400);
 video=createCapture(VIDEO);
 video.hide();
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ai0eJmlQF/model.json", model_loaded)
}

function model_loaded(){
console.log("model loaded!!!!!!!!!")    
}



function draw(){
image(video,0,0,300,300); 
classifier.classify(video, Got_results)
}

function Got_results(error, results){
if(error){
 console.error(error);
}
else{
 console.log(results);  
 document.getElementById("Object_span").innerHTML=results[0].label;
 document.getElementById("Accuracy_span").innerHTML=results[0].confidence.toFixed(3);
}
}