"use strict";

// ekjs, istatistik modülüdür. Deneyseldir.
var ek = {};
ek.init = function () {
  console.log("\n        %cekjs.init", "\n        color: #fff; \n        background: #000; \n        padding: 5px 10px; \n        border-radius: 5px;\n        font-size: 1.6rem;\n        font-family: monospace;");
};
ek.istatistik = {
  /* 
      Ortalama: Dizideki tüm sayıların toplamının eleman sayısına bölünmesiyle elde edilen sayıdır.
        @param dizi: Array
      @return: Number
        Örnek: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => 5.5
  */
  ortalama: function ortalama(dizi) {
    var toplam = 0;
    for (var i = 0; i < dizi.length; i++) {
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
  medyan: function medyan(dizi) {
    var medyan = 0;
    var diziUzunlugu = dizi.length;
    dizi.sort(function (a, b) {
      return a - b;
    });
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
  mod: function mod(dizi) {
    var mod = 0;
    var modDegeri = 0;
    var sayac = 0;
    for (var i = 0; i < dizi.length; i++) {
      for (var j = 0; j < dizi.length; j++) {
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
  varyans: function varyans(dizi) {
    var varyans = 0;
    var ortalama = ek.istatistik.ortalama(dizi);
    for (var i = 0; i < dizi.length; i++) {
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
  standartSapma: function standartSapma(dizi) {
    return Math.sqrt(ek.istatistik.varyans(dizi));
  }
};
ek.init();
console.log(ek.istatistik.ortalama([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.medyan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.mod([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.varyans([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ek.istatistik.standartSapma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
