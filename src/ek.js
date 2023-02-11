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
    /* 
        Ortalama: Dizideki tüm sayıların toplamının eleman sayısına bölünmesiyle elde edilen sayıdır.

        @param dizi: Array
        @return: Number

        Örnek: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 5.5
    */
    ortalama: (dizi) => {
        let toplam = 0;
        for (let i = 0; i < dizi.length; i++) {
            toplam += dizi[i];
        }
        return toplam / dizi.length;
    },
    /*
        Medyan: Dizideki sayıların sıralanmasıyla elde edilen dizinin ortadaki sayıya medyan denir.

        @param dizi: Array
        @return: Number

        Örnek: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 5.5
    */
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
    /*
        Mod: Dizide en çok tekrar eden sayıya mod denir.

        @param dizi: Array
        @return: Number

        Örnek: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 1
    */
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
    /*
        Varyans: Dizideki sayıların ortalama değerinden farkının karesinin ortalamasıdır.

        @param dizi: Array
        @return: Number

        Örnek: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 8.25
    */
    varyans: (dizi) => {
        let varyans = 0;
        let ortalama = ek.istatistik.ortalama(dizi);
        for (let i = 0; i < dizi.length; i++) {
            varyans += Math.pow(dizi[i] - ortalama, 2);
        }
        return varyans / dizi.length;
    },
    /*
        Standart Sapma: Varyansın kareköküdür.

        @param dizi: Array
        @return: Number

        Örnek: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 2.8722813232690143
    */
    standartSapma: (dizi) => {
        return Math.sqrt(ek.istatistik.varyans(dizi));
    },
}

ek.matematik = {
    // Değişkenler
    pi: Math.PI,
    e: Math.E,
    // Fonksiyonlar
    /*
        Faktoriyel: Bir sayının 1'den başlayarak kendisine kadar olan sayıların çarpımıdır.

        @param sayi: Number
        @return: Number

        Örnek: 5 => 120
    */
    faktoriyel: (sayi) => {
        let faktoriyel = 1;
        for (let i = 1; i <= sayi; i++) {
            faktoriyel *= i;
        }
        return faktoriyel;
    },
    /*
        Kombinasyon: Bir kümeden r eleman seçilmesi durumunda oluşan tüm kombinasyonların sayısıdır.

        @param n: Number
        @param r: Number
        @return: Number

        Örnek: 5, 2 => 10
    */
    kombinasyon: (n, r) => {
        return ek.matematik.faktoriyel(n) / (ek.matematik.faktoriyel(r) * ek.matematik.faktoriyel(n - r));
    },
    /*
        Permutasyon: Bir kümeden r eleman seçilmesi durumunda oluşan tüm permutasyonların sayısıdır.
        
        @param n: Number
        @param r: Number
        @return: Number

        Örnek: 5, 2 => 20
    */
    permutasyon: (n, r) => {
        return ek.matematik.faktoriyel(n) / ek.matematik.faktoriyel(n - r);
    },
    /*
        Asal Sayı: Bir sayının kendisinden ve 1'den başka böleni olmayan sayılara asal sayı denir.
        
        @param sayi: Number
        @return: Boolean

        Örnek: 5 => true
    */
    asalSayi: (sayi) => {
        let asal = true;
        if(sayi == 1) {return false};
        for (let i = 2; i < sayi; i++) {
            if (sayi % i == 0) {
                asal = false;
                break;
            }
        }
        return asal;
    },
    /*
        Asal Çarpanlar: Bir sayının asal sayılardan oluşan çarpanlarına asal çarpanlar denir.

        @param sayi: Number
        @return: Array

        Örnek: 60 => [2, 2, 3, 5]
    */
    asalCarpanlar: (sayi) => {
        let asalCarpanlar = [];
        let i = 2;
        while (i <= sayi) {
            if (sayi % i == 0) {
                asalCarpanlar.push(i);
                sayi /= i;
            } else {
                i++;
            }
        }
        return asalCarpanlar;
    },
    /*
        Asal Çarpanlar: Bir sayının asal sayılardan oluşan çarpanlarına asal çarpanlar denir.

        @param sayi: Number
        @return: Array

        Örnek: 60 => [2, 2, 3, 5]
    */
    asalCarpanlar: (sayi) => {
        let asalCarpanlar = [];
        let i = 2;
        while (i <= sayi) {
            if (sayi % i == 0) {
                asalCarpanlar.push(i);
                sayi /= i;
            } else {
                i++;
            }
        }
        return asalCarpanlar;
    }
}

ek.init();
console.log(ek.istatistik.ortalama([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.medyan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.mod([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.varyans([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.standartSapma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(ek.matematik.faktoriyel(5));
console.log(ek.matematik.kombinasyon(5, 2));
console.log(ek.matematik.permutasyon(5, 2));
console.log(ek.matematik.asalSayi(5));
console.log(ek.matematik.asalCarpanlar(60));