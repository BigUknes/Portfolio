// Auteur : [Ghellab Rayan] - Mission 9

function testqcm() {
    var score = 0;

    if (document.querySelector('input[name="q1"][value="a"]').checked) { score++; }
    if (document.querySelector('input[name="q2"][value="b"]').checked) { score++; }
    if (document.querySelector('input[name="q3"][value="b"]').checked) { score++; }
    if (document.querySelector('input[name="q4"][value="c"]').checked) { score++; }
    if (document.querySelector('input[name="q5"][value="b"]').checked) { score++; }
    if (document.querySelector('input[name="q6"][value="a"]').checked) { score++; }
    if (document.querySelector('input[name="q7"][value="b"]').checked) { score++; }
    if (document.querySelector('input[name="q8"][value="c"]').checked) { score++; }
    if (document.querySelector('input[name="q9"][value="c"]').checked) { score++; }

    var q10a = document.getElementById("q10_a").checked;
    var q10b = document.getElementById("q10_b").checked;
    var q10c = document.getElementById("q10_c").checked;
    
    if (q10a && q10b && !q10c) { score++; }

    var txt = "Score : " + score + "/10";
    alert(txt);
    document.getElementById("resultat").innerHTML = txt;
}

function afficherCorrige() {
    var fenetre = window.open("", "", "width=400,height=400");
    fenetre.document.write("<h3>Corrigé</h3><ul><li>Q1: A</li><li>Q2: B</li><li>Q3: B</li><li>Q4: C</li><li>Q5: B</li><li>Q6: A</li><li>Q7: B</li><li>Q8: C</li><li>Q9: C</li><li>Q10: Firefox, Chrome</li></ul><button onclick='window.close()'>Fermer</button>");
}

function effacerReponses() {
    document.getElementById("monFormulaire").reset();
    document.getElementById("resultat").innerHTML = "";
}