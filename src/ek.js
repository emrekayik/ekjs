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
    init: (elm) => {
        const elm = document.querySelector(elm);
        elm.innerHTML
    },
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
}

ek.init();
//console.log(ek.istatistik.ortalama([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
