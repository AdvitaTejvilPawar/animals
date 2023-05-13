//https://teachablemachine.withgoogle.com/models/zhNomQjZY/

function startClassifier()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zhNomQjZY/model.json')

}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error , results)
{
if (error) {
    console.error(error);
} else {
    console.log(results);

    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;

    document.getElementById("sound_name").innerHTML = "I can Hear - "+ results[0].label;
    document.getElementById("accuracy ").innerHTML= "Accuracy - "+ (results[0].confidence*100).toFixed(2)+"%"
    document.getElementById("accuracy ").style.color = "rgb("+r+","+g+","+b+")"
    document.getElementById("sound_name").style.color = "rgb("+r+","+g+","+b+")"

    if(results[0].label=="barking"){
        img1.src='580540_mjznrj.webp'
       
    }else  if(results[0].label=="meowing"){
        img2.src='"07CAT-STRIPES-mediumSquareAt3X-v2.jpeg'
    } else  if(results[0].label=="mooing"){
        img3.src='download.jpeg'
      
}
}
}
