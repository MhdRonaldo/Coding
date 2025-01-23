const nama = "Kodo Ch";
let usia = 15;

let biodata = document.getElementById("biodata")
    console.log(biodata)

function isibiodata() {
    let Generasi;

    if (usia > 9 && usia < 17) {
        Generasi = "Remaja"
    }
    else if (usia > 0 && usia < 10) {
        Generasi = "Anak-Anak"
    }
    else if (usia > 17 && usia < 46) {
        Generasi = "Dewasa"
    }
    else if (usia > 46) {
        Generasi = "Sudah Tua"
    }
    return console.log("Anda", Generasi);
}
    
console.log(nama);
console.log(usia);

biodata ();