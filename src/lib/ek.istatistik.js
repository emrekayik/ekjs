export const istatistik = {
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