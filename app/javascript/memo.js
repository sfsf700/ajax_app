function post (){
  const submit = document.getElementById("submit");  //getElementByIdメソッドで取得した投稿ボタンの要素を変数submitに格納
  submit.addEventListener("click", (e) => { //(e)イベント発生時の情報を持ったオブジェクト
    e.preventDefault(); //preventDefaultは既定のイベントを無効化するためのメソッド
    const form = document.getElementById("form"); //getElementByIdメソッドで取得したフォームの要素を変数formに格納
    const formData = new FormData(form); //新たに生成したFormDataオブジェクトを変数formDataに格納
    const XHR = new XMLHttpRequest(); //新しくオブジェクトを生成,変数XHRに格納
    XHR.open("POST", "/posts", true); //openメソッド,リクエスト初期化(指定するもの)("HTTPメソッド","パス","非同期通信であるかtrue,false")
    XHR.responseType = "json"; //responseType,データフォーマット（＝どのような形式のデータにするか）を指定するプロパティ
    XHR.send(formData); //send()メソッドとは、リクエストを送信するメソッド
  });
};

window.addEventListener('load', post);