//https://teachablemachine.withgoogle.com/models/lStXL6J3S/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('//https://teachablemachine.withgoogle.com/models/x5RjP0o-O/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear = ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy = ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        if (results[0].label == "cow") {
            img.src = 'brown-Guernsey-cow.webp';
        } else if (results[0].label == "cat") {
            img.src = 'download.jfif';
        } else if (results[0].label == "dog") {
            img.src = 'download(1),jfif';
        } else {
            img.src = 'download(2).jfif';
        }
    }
}