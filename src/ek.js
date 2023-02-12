// ekjs, istatistik ve matematik modülüdür. Deneyseldir.
const {istatistik} = require("./lib/ek.istatistik");
const {matematik} = require("./lib/ek.matematik");

var ek = {
    istatistik: istatistik,
    matematik: matematik
}

ek.init = function() {
    console.log(`
        %cekjs.init`,
    `
        color: #fff; 
        background: #000; 
        padding: 5px 10px; 
        border-radius: 5px;
        font-size: 1.6rem;
        font-family: monospace;`
    );
}

ek.init();
/*
console.log("Dizi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")
console.log("Ortalama: " + ek.istatistik.ortalama([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("Medyan: " + ek.istatistik.medyan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("Mod: " + ek.istatistik.mod([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("Varyans: " + ek.istatistik.varyans([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("Standart Sapma: " + ek.istatistik.standartSapma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log("Pi Sayısı: " + ek.matematik.pi);
console.log("E Sayısı: " + ek.matematik.e);

console.log("5 sayısının faktoriyeli: " + ek.matematik.faktoriyel(5));
console.log("5 sayısının 2 sayısına göre kombinasyonu: " + ek.matematik.kombinasyon(5, 2));
console.log("5 sayısının 2 sayısına göre permutasyonu: " + ek.matematik.permutasyon(5, 2));
console.log("5 sayısı asal mı: " + ek.matematik.asalSayi(5));
console.log("60 sayısının asal çarpanları: " + ek.matematik.asalCarpanlar(60)); 
*/