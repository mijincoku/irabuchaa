// 文字列A、B、Cの定義
const stringA = "Hello, ";
const stringB = "worlds1122311!";
const stringC = " This is a sample text.";

// 文字列Dの生成
const stringD = stringA + stringB + stringC;

// 文字列Dをハッシュ値に変換
const hashCode = hashCodeFromString(stringD);

// ハッシュ値から数字部分を抜き出し、10で割った余りを取得
const digitPart = hashCode.replace(/\D/g, '');  // ハッシュ値の数字部分のみを取り出す
const remainder = digitPart % 10;

// 結果を表示
console.log("文字列D:", stringD);
console.log("ハッシュ値:", hashCode);
console.log("ハッシュ値から抜き出した数字部分:", digitPart);
console.log("10で割った余り:", remainder);

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