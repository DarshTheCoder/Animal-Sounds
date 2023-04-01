function startClassification()
{
    
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SzJ97u2X9/model.json',modelReady);
}
function modelReady()
{
classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.error(error);

    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()* 255)+1;
        random_number_g=Math.floor(Math.random()* 255)+1;
        random_number_b=Math.floor(Math.random()* 255)+1;
        document.getElementById("Animal_name").innerHTML='I Can Hear '+results[0].label;
        document.getElementById("Animal_accuracy").innerHTML='Accuracy Is '+(results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("Animal_name").style.color="rgb("+random_number_r+','+random_number_g+','+random_number_g+")";
        document.getElementById("Animal_accuracy").style.color="rgb("+random_number_r+','+random_number_g+','+random_number_g+")";

img=document.getElementById("animal_photo");
        if(results[0].label='Background Noise')
        {
 img.src="Background.png";
        }
        else if(results[0].label='Lion')
        {
            img.src="lion.png";
        }
        else if(results[0].label='Dog')
        {
            img.src="Dog.png";
        }
        else{
            img.src="Cat.png";
        }
    }
}