function gomb() {
    var nev = document.getElementById("nev").value;
    var hibauzenet = document.getElementById("hibauzenet");

    // Ellenőrizni, hogy a mező nem üres
    if (nev == "") {
        hibauzenet.style.display = "block";
        hibauzenet.textContent = "Kérlek, adj meg egy nevet!";
        // Formázása
        hibauzenet.style.color = "red";
        hibauzenet.style.fontWeight = "bold";
        return; // Kilépünk, ha üres a mező
        }

    // A köszönések helye ahova hozzáadjuk a szövegeket
    var valaszok = document.getElementById("valaszok");

    // Először töröljük a korábbi köszönéseket, ha voltak
    valaszok.innerHTML = "";

    // Tízszeres köszönés sorszámmal
    for (let i = 1; i <= 10; i++) {
    // Bekezdésként jelenik meg
    var valasz = document.createElement("p");
    valasz.textContent = "Helló" + " " + nev + "-" + [i];
    valaszok.appendChild(valasz);
    valasz.style.color="#3d5a80"
    }
}