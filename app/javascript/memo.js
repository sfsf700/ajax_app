const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html; //関数buildHTMLの返り値にhtmlを指定
};

function post (){
  const submit = document.getElementById("submit");  //getElementByIdメソッドで取得した投稿ボタンの要素を変数submitに格納
  submit.addEventListener("click", (e) => { //(e)イベント発火、発生時の情報を持ったオブジェクト
    e.preventDefault(); //preventDefaultは既定のイベントを無効化するためのメソッド
    const form = document.getElementById("form"); //getElementByIdメソッドで取得したフォームの要素を変数formに格納
    const formData = new FormData(form); //新たに生成したFormDataオブジェクトを変数formDataに格納
    const XHR = new XMLHttpRequest(); //新しくオブジェクトを生成,変数XHRに格納
    XHR.open("POST", "/posts", true); //openメソッド,リクエスト初期化(指定するもの)("HTTPメソッド","パス","非同期通信であるかtrue,false")
    XHR.responseType = "json"; //responseType,データフォーマット（＝どのような形式のデータにするか）を指定するプロパティ
    XHR.send(formData); //send()メソッドとは、リクエストを送信するメソッド
    XHR.onload = () => {
      if (XHR.status != 200) { //HTTPステータスコードが格納
        alert(`Error ${XHR.status}: ${XHR.statusText}`); //XHR.statusTextには、ステータスコードに応じたメッセージが格納
        return null; //return null;によってJavaScriptの処理から抜け出すことができる
      };
      const list = document.getElementById("list"); //新しいメモを挿入するための要素を取得して、変数listに格納
      const formText = document.getElementById("content"); //リセットの対象となるフォームの要素contentを取得して、変数formTextに格納
      list.insertAdjacentHTML("afterend", html); //第一引数にafterendを指定、変数listに格納された要素の直後に生成したHTML(3~11行目)を挿入
      formText.value = ""; //formTextのvalue属性に空の文字列を指定することで、フォームの中身をリセット(これがないとフォーム投稿した内容が残ったままになる)
    };
  });
};

window.addEventListener('load', post);