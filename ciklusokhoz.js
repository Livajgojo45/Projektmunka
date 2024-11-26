// Elöltesztelő ciklus
nev = prompt("Adjon be egy nevet: ");

let i = 0;
while (i < 11) {
    console.log("Helló" + " " + nev + "-" + i);
    i++;
}

// Hátultesztelő ciklus
nev2 = prompt("Adjon be egy nevet: ");

let j = 0;
do {
    console.log("Helló" + " " + nev2 + "-" + j);
    j++;
} while (j < 11);

// Számláló ciklus
nev3 = prompt("Adjon be egy nevet: ");

for (let k = 0; k < 11; k++) {
    console.log("Helló" + " " + nev3 + "-" + k);
}
