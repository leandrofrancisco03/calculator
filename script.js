function love() {
    var name1 = document.getElementById("NameOne").value;
    var name2 = document.getElementById("NameTwo").value;
    if (name1.length <= 2) {
        alert("Ingresa al menos 3 caracteres");
    }
    if (name2.length <= 2) {
        alert("Ingresa al menos 3 caracteres");
    }
    else {
        var random = Math.floor(Math.random() * 100);
        document.getElementById("print").innerHTML = name1 + " y " + name2 + " = " + random + "%" + " compatible";
    }
    if (random <= 10 || random <= 50) {
        document.getElementById("statement").innerHTML = "Buena relación";
    }
    else if (random <= 51 || random <= 100) {
        document.getElementById("statement").innerHTML = "Relación encantadora";
    }
}