// ekjs, istatistik modülüdür. Deneyseldir.
var ek = {}

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


ek.istatistik = {
    ortalama: (dizi) => {
        let toplam = 0;
        for (let i = 0; i < dizi.length; i++) {
            toplam += dizi[i];
        }
        return toplam / dizi.length;
    },
    medyan: (dizi) => {
        let medyan = 0;
        let diziUzunlugu = dizi.length;
        dizi.sort((a, b) => a - b);
        if (diziUzunlugu % 2 == 0) {
            medyan = (dizi[diziUzunlugu / 2 - 1] + dizi[diziUzunlugu / 2]) / 2;
        } else {
            medyan = dizi[(diziUzunlugu - 1) / 2];
        }
        return medyan;
    },
    mod: (dizi) => {
        let mod = 0;
        let modDegeri = 0;
        let sayac = 0;
        for (let i = 0; i < dizi.length; i++) {
            for (let j = 0; j < dizi.length; j++) {
                if (dizi[i] == dizi[j]) {
                    sayac++;
                }
            }
            if (sayac > modDegeri) {
                modDegeri = sayac;
                mod = dizi[i];
            }
            sayac = 0;
        }
        return mod;
    },

    varyans: (dizi) => {
        let varyans = 0;
        let ortalama = ek.istatistik.ortalama(dizi);
        for (let i = 0; i < dizi.length; i++) {
            varyans += Math.pow(dizi[i] - ortalama, 2);
        }
        return varyans / dizi.length;
    },
    standartSapma: (dizi) => {
        return Math.sqrt(ek.istatistik.varyans(dizi));
    },
}

ek.init();
console.log(ek.istatistik.ortalama([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.medyan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.mod([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.varyans([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.standartSapma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));