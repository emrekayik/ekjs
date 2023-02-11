"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
ek.matematik = _defineProperty({
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
  faktoriyel: function faktoriyel(sayi) {
    var faktoriyel = 1;
    for (var i = 1; i <= sayi; i++) {
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
  kombinasyon: function kombinasyon(n, r) {
    return ek.matematik.faktoriyel(n) / (ek.matematik.faktoriyel(r) * ek.matematik.faktoriyel(n - r));
  },
  /*
      Permutasyon: Bir kümeden r eleman seçilmesi durumunda oluşan tüm permutasyonların sayısıdır.
      
      @param n: Number
      @param r: Number
      @return: Number
        Örnek: 5, 2 => 20
  */
  permutasyon: function permutasyon(n, r) {
    return ek.matematik.faktoriyel(n) / ek.matematik.faktoriyel(n - r);
  },
  /*
      Asal Sayı: Bir sayının kendisinden ve 1'den başka böleni olmayan sayılara asal sayı denir.
      
      @param sayi: Number
      @return: Boolean
        Örnek: 5 => true
  */
  asalSayi: function asalSayi(sayi) {
    var asal = true;
    if (sayi == 1) {
      return false;
    }
    ;
    for (var i = 2; i < sayi; i++) {
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
  asalCarpanlar: function asalCarpanlar(sayi) {
    var asalCarpanlar = [];
    var i = 2;
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
}, "asalCarpanlar", function asalCarpanlar(sayi) {
  var asalCarpanlar = [];
  var i = 2;
  while (i <= sayi) {
    if (sayi % i == 0) {
      asalCarpanlar.push(i);
      sayi /= i;
    } else {
      i++;
    }
  }
  return asalCarpanlar;
});
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
