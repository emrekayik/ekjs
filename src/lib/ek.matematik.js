
export const matematik = {
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