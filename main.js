function começa() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classificador = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/i-kRohH5r/model.json", resultado);
}
function resultado() {
    classificador.classify(puga);
}
function puga(error, resultados) {
    if (error) {
        console.error(error);
    }
    else {
        document.getElementById("som").innerHTML = "estou ouvindo:" + resultados[0].label;
        document.getElementById("precisão").innerHTML = "precisão:" + (resultados[0].confidence * 100).toFixed(2) + "%";
        alien1 = document.getElementById("alien-1");
        alien2 = document.getElementById("alien-2");
        alien3 = document.getElementById("alien-3");
        alien4 = document.getElementById("alien-4");
        if (resultados[0].label == "mmmmmm") {
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.gif";
        }else if (resultados[0].label == "riso") {
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.gif";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.png";
        }else if (resultados[0].label == "Background Noise") {
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.gif";
            alien4.src = "aliens-04.png";
        }else if (resultados[0].label == "palmas") {
            alien1.src = "aliens-01.gif";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.png";
        }
    }
}