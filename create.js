// 必要なライブラリをインストール
// npm install svgson fs

const fs = require('fs');
const svgson = require('svgson');


// SVGファイルを読み込む
const svgContent = fs.readFileSync('irabuchaa.svg', 'utf8');

// SVGファイルをSVGSON形式に変換
svgson(svgContent)
  .then(svgData => {
    // ...
  })
  .catch(err => {
    console.error(err);
  });


  // 3つの文字列
const stringA = 'aaaaaaHello!';
const stringB = 'Wor3333lds!';
const stringC = 'JavaScr98277ipt';

// 3つの文字列からハッシュ値を生成
const stringD = stringA + stringB + stringC;
const hashValue = hashCodeFromString(stringD);

// 文字列からハッシュ値を生成する関数
function hashCodeFromString(str) {
    var hash = 0;
    if (str.length == 0) {
      return hash.toString();
    }
    for (var i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString();
  }

// ハッシュ値から色を生成
const color = `#${hashValue.substring(0, 6)}`;