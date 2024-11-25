// script.js
function mostrarImatge(imatge) {
    const granImatge = document.getElementById("granImatge");
    granImatge.style.display = 'block';
    granImatge.querySelector("img").src = imatge.src;
}

const seccions = document.querySelectorAll("section");

seccions.forEach(function(seccio) {
    seccio.addEventListener("mouseover", function() {
        seccio.style.backgroundColor = "#f0f0f0";
        seccio.style.color = "#333";
        const parrafOcult = seccio.querySelector("p");
        if (parrafOcult) {
            parrafOcult.style.display = "block";
        }
    });

    seccio.addEventListener("mouseout", function() {
        seccio.style.backgroundColor = "";
        seccio.style.color = "";
        const parrafOcult = seccio.querySelector("p");
        if (parrafOcult) {
            parrafOcult.style.display = "none";
        }
    });
});

let tempsInici = Date.now();
let tempsFinal = 0;

window.addEventListener("beforeunload", function() {
    tempsFinal = Date.now();
    let tempsTranscorregut = (tempsFinal - tempsInici) / 1000; // en segons
    alert(`Has passat ${tempsTranscorregut} segons a la pàgina.`);
});
