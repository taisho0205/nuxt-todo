import firebase from 'firebase' //firebaseの読み込み

const config = {
  // projectId = process.env.nuxt-todo-14621 ,//先ほど設定した環境変数
  // apikey = process.env.AIzaSyAVpCyZmjqFvaLn_pRY0LZS6q_U-G11hz0 //以下必要な環境変数をセット
  apiKey: "AIzaSyAVpCyZmjqFvaLn_pRY0LZS6q_U-G11hz0",
  authDomain: "nuxt-todo-14621.firebaseapp.com",
  projectId: "nuxt-todo-14621",
  storageBucket: "nuxt-todo-14621.appspot.com",
  messagingSenderId: "906301719783",
  appId: "1:906301719783:web:7b71bd6300a44b56fcce42",
  measurementId: "G-LV96ZY2WWC"
}

if(!firebase.apps.length) { //アプリが二重に初期化されないようにif文を使用
  firebase.initializeApp(config) //configを引数にとる
}

export default firebase