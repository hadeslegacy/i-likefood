
function setup() {
  canvas = createCanvas(320, 320);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded() {
console.log('3218739812739812739812739812euqwheh279cnf29h98ndwehq78a');
}

function draw() {
image(video, 0, 0, 300, 300);  
classifier.classify(video, gotResult);
}
var previous_result = '';

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    if((results[0].confidence > 0.5) && (previous_result != results[0].label))
    {
      console.log(results);
      previous_result = results[0].label;
      var synth = window.speechSynthesis;
      speak_data = 'Object detected is - '+results[0].label;
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_ibject_name").innerHTML = results[0].confidence.toFixed(3);
    }
  }
}








//<body background="background.jpg">
//<center>
//<h3 class="btn btn-primary heading">Real Time Image Identification App
  //<hr>
 // <center>
  
   // <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 heading_div">
      //We are using Mobilenet as a Model  
     // <br>
      //  <div class="btn heading_div2">
        //Mobilenet model is trained on <br> more then 1.3 million images 
        //</div>



