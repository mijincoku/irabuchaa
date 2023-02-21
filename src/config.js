//  乱数をつくろう
// 乱数の配列を作る
// const ransuu = [];
// const nagasa = 10;

// const mkransuu = ()=>{
// for (var i=0; i<9; i++)  // for文を追加
//     ransuu[i] == Math.random() * 230;    
// }

// let 
// for(i=0 ; i<9;i++){
//     let m = Math.random() *230;
//     let n = Math.random() *230;
// }

// for (var i=0; i<ransuu.length; i++) { // for文を追加
//     dx = Math.random()*230;
// } // for文の受け

// レイヤーの並びを定義&レイヤーに含まれる候補数
 const layersOrder = [
    // { name: 'background', number: 1 },
    // { name: 'ball', number: 2 },
    // { name: 'eye color', number: 12 },
    // { name: 'iris', number: 3 },
    // { name: 'shine', number: 1 },
    // { name: 'shine', number: 1 },
    // { name: 'bottom lid', number: 3 },
    // { name: 'top lid', number: 3 },
    // 以下書き換え
    { name: 'face', number: 1 ,},
    { name: 'mouth', number: 4 ,},
    { name: 'hair', number: 5 ,},
    { name: 'grass', number: 6 ,},
 ];
// 

// for (var i=0; i<layersOrder.length; i++) { // for文を追加
//     layersOrder.x = Math.random() * 230;
//     layersOrder.y = Math.random() * 230;
//     layersOrder.w = Math.random() * 230;
//     layersOrder.h = Math.random() * 230;
// // indexを i に変更
// } // for文の受け
 

// 書き換え：レイヤーの並びを定義&レイヤーに含まれる候補数
// const layersOrder = [
//     { name: 'background', number: 3 },
//     { name: 'daiya', number: 2 , x:Math.random() , y:Math.random()},
//     { name: 'itella', number: 1 , x:Math.random() , y:Math.random()},
// ];

// つくる画像のサイズ
const format = {
    width: 230,
    height: 230
};

// レアリティのフィールド
const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

// 作るファイルの数
const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition,};