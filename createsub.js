// const fs = require('fs');
// const { createCanvas, loadImage } = require('canvas');

// import { existsSync(),mkdirSync(),createWriteStream() } from 'fs';
// import { createCanvas, loadImage } from '/node_modules/canvas';

//いまのページのURLを取得 
var urlParams = new URLSearchParams(window.location.search);

// パラメータを取得
var wallet = urlParams.get('wallet');
var nfts = urlParams.get('nfts');
var li = urlParams.get('nfts');

// 3つの文字列
const stringA = wallet;
const stringB = nfts;
const stringC = li;

// パーツの画像のパス
const layersPath = './layers';
// 出力用ディレクトリ
const outputPath = './create';
// 出力する画像のファイル名
const outputFileName = 'result.png';


// 文字列Dの生成
const stringD = stringA + stringB + stringC;

// 文字列Dをハッシュ値に変換
const hashCode = hashCodeFromString(stringD);

// ハッシュ値から数字部分を抜き出し、4で割った余りを取得
const digitPart = hashCode.replace(/\D/g, '');  // ハッシュ値の数字部分のみを取り出す
const remainder = digitPart % 4;

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

// 文字列からハッシュ値を生成する関数
// function getHash(string) {
//   const hash = crypto.createHash('sha256');
//   hash.update(string);
//   return hash.digest('hex');
// }

// ランダムにパーツを選択する関数
function getRandomLayerIndex() {
  return Math.floor(Math.random() * remainder);
}

async function generateImage() {
  const canvas = createCanvas(1447, 641);
  const ctx = canvas.getContext('2d');

  // パーツの画像を読み込んでランダムに配置
  const parts = ['hire', 'body', 'dot', 'mune'];
  for (const part of parts) {
    const layerIndex = getRandomLayerIndex();
    const layerPath = `${layersPath}/${part}_${layerIndex}.png`;
    const layer = await loadImage(layerPath);
    ctx.drawImage(layer, 0, 0, canvas.width, canvas.height);
  }

  // 3つの文字列からハッシュ値を生成
  const stringD = stringA + stringB + stringC;
  const hashValue = hashCodeFromString(stringD);

  // ハッシュ値から色を生成
  const color = `#${hashValue.substring(0, 6)}`;

  // // 背景を生成した色で塗りつぶす
  // ctx.globalCompositeOperation = 'color';
  // ctx.fillStyle = color;
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 画像をファイルに出力
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }
  const out = fs.createWriteStream(`${outputPath}/${outputFileName}`);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () => console.log('The PNG file was created.'));
}

generateImage();