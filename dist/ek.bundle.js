(()=>{var t={210:(t,e,r)=>{"use strict";r.r(e),r.d(e,{istatistik:()=>a});const a={ortalama:t=>{let e=0;for(let r=0;r<t.length;r++)e+=t[r];return e/t.length},medyan:t=>{let e=0,r=t.length;return t.sort(((t,e)=>t-e)),e=r%2==0?(t[r/2-1]+t[r/2])/2:t[(r-1)/2],e},mod:t=>{let e=0,r=0,a=0;for(let o=0;o<t.length;o++){for(let e=0;e<t.length;e++)t[o]==t[e]&&a++;a>r&&(r=a,e=t[o]),a=0}return e},varyans:t=>{let e=0,r=ek.istatistik.ortalama(t);for(let a=0;a<t.length;a++)e+=Math.pow(t[a]-r,2);return e/t.length},standartSapma:t=>Math.sqrt(ek.istatistik.varyans(t))}},969:(t,e,r)=>{"use strict";r.r(e),r.d(e,{matematik:()=>a});const a={pi:Math.PI,e:Math.E,faktoriyel:t=>{let e=1;for(let r=1;r<=t;r++)e*=r;return e},kombinasyon:(t,e)=>ek.matematik.faktoriyel(t)/(ek.matematik.faktoriyel(e)*ek.matematik.faktoriyel(t-e)),permutasyon:(t,e)=>ek.matematik.faktoriyel(t)/ek.matematik.faktoriyel(t-e),asalSayi:t=>{let e=!0;if(1==t)return!1;for(let r=2;r<t;r++)if(t%r==0){e=!1;break}return e},asalCarpanlar:t=>{let e=[],r=2;for(;r<=t;)t%r==0?(e.push(r),t/=r):r++;return e},asalCarpanlar:t=>{let e=[],r=2;for(;r<=t;)t%r==0?(e.push(r),t/=r):r++;return e}}}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,r),n.exports}r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{istatistik:t}=r(210),{matematik:e}=r(969);(function(){console.log("\n        %cekjs.init","\n        color: #fff; \n        background: #000; \n        padding: 5px 10px; \n        border-radius: 5px;\n        font-size: 1.6rem;\n        font-family: monospace;")})()})()})();