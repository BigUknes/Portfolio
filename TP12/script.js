function moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");
    
    var somme = Number(n1) + Number(n2) + Number(n3);
    var moyenne = somme / 3;

    document.write("Voici la moyenne des notes : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    }

    else if (moyenne < 12) {
        document.write("Admis – Passable !");
    }

    else if (moyenne < 14) {
        document.write("Admis – bien !");
    }

    else {
        document.write("Admis – Très bien !");
    }
}

function temp() {
    var t1 = prompt("Donner la temperature (en C°):");


    if (moyenne < 10) {
        document.write("Froid");
    }

    else if (moyenne < 25) {
        document.write("Normal");
    }

    else {
        document.write("Chaud");
    }
}

function comparaison() {
    var c1 = prompt("Donner le premier nombre :");
    var c2 = prompt("Donner le deuxieme nombre :");

    if (c1>c2) {
        document.write("le plus grand est " + c1);
    }

    else {
        document.write("le plus grand est " + c2);
    }

 }