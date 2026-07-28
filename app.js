qpath 生徒の再入室 修正パッチ（2026-07-28）

【修正内容】
・クラスコードと利用者IDの照合方法を修正
・全角文字、大文字・小文字、ハイフンの種類の違いを吸収
・ハイフンを省略した SABCDE も S-ABCDE として照合
・旧版で発行された長い member-... 形式の利用者IDにも対応
・id または userId のどちらで保存された過去データにも対応
・Firebase側の最新クラス情報を優先して確認
・Firebaseへ一時的に接続できない場合は端末内データで確認

初回入室時の利用者ID発行や、前回修正した入室方法選択画面は変更していません。

【GitHubへの入れ方】
1. このZIPを展開します。
2. GitHubの q-path リポジトリを開きます。
3. 「Add file」→「Upload files」を押します。
4. このフォルダ内の「src」フォルダをアップロードします。
5. 既存の app.js と firebase.js が上書き対象になっていることを確認します。
6. 「Commit changes」を押します。
7. GitHub Pagesの更新後、次のURLを開きます。

https://nemo-qhi.github.io/q-path/#role

古い表示が残る場合は、ページを再読み込みしてください。
