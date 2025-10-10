function moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");
    
    var somme = Number(n1) + Number(n2) + Number(n3);
    var moyenne = somme / 3;

    var doc = document.getElementById("affichage").contentDocument;
    doc.open();

    doc.write(`
    <link rel="stylesheet" type="text/css" href="iframe.css">
`);

    doc.write("Voici la moyenne des notes : " + moyenne + "<br>");

    if (moyenne < 10) doc.write("Redoublant");

    else if (moyenne < 12) doc.write("Admis – Passable !");
    
    else if (moyenne < 14) doc.write("Admis – bien !");
    
    else doc.write("Admis – Très bien !");

    doc.close();
}





function temp() {
    var t1 = prompt("Donner la temperature (en C°):");

    var doc = document.getElementById("affichage").contentDocument;
    
    doc.open();

    doc.write(`
    <link rel="stylesheet" type="text/css" href="iframe.css">
`);

    if (t1 < 10) doc.write("Froid");

    else if (t1 < 25) doc.write("Normal");

    else doc.write("Chaud");
    
    doc.close();
}





function comparaison() {

    var c1 = prompt("Donner le premier nombre :");
    var c2 = prompt("Donner le deuxieme nombre :");

    var doc = document.getElementById("affichage").contentDocument;
    doc.open();

    doc.write(`
    <link rel="stylesheet" type="text/css" href="iframe.css">
`);


    if (c1 > c2) {
        doc.write("le plus petit est " + c2 + " et le plus grand est " + c1);

    } else {
        doc.write("le plus petit est " + c1 + " et le plus grand est " + c2);

    }
    doc.close();
     }