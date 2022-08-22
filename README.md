# Portfolio

## VueベースのNuxt.jsの使用
WebアプリケーションフレームワークにNuxt.jsを使用しています。フレームワークなのでアプリケーションに必要な便利な機能やライブラリが用意されていて、開発や保守で素早く運用できます。

## APIから非同期でデータを取得

/news ではJavaScriptの非同期関数asyncキーワードとawaitを使用し、AWSのAPI Gatewayを叩いてAWS Lambdaを起動します。LambdaからCMSのMicroCMSのAPIを叩いてデモデータを取得させ、データを非同期で返します。

リポジトリを公開しているため、セキュリティ上Lambda経由でMicroCMSのデモデータを取得しています。

## UIフレームワークのVuetifyを使用

UIフレームワークにUIコンポーネントが豊富なVuetifyを使用しています。

## テンプレートエンジンのPugを使用

素のHTMLの代わりにテンプレートエンジンのPugを使用しています。コーディングを素早くできます。

## アプリケーションのデプロイ
GitHub Actionsにworkflowsを登録して、AWSのCode Commit に変更を反映し、AWS Code Pipelineを使用してAWSのS3にアプリケーションを静的ホスティングしています。
以上のような流れでCI/CDを実現しています。

## SSL/TLSを使用して通信をセキュア化 & SEO
AWS Route53のホストゾーンのレコードにAWS Certificate Managerで作成したSSL/TLS証明書をリンクしてプロトコルをhttps:として通信をセキュア化しています。
また、Googleなどの検索エンジンでSEOに推奨されているhttps:プロトコルに対応して、SEOをしています。

## ネットワークの名前解決
ネットワークの名前解決はAWSのRoute53のホストゾーンにドメインとレコードを登録し、CloudFront経由でAWS S3からデータを取得してアプリケーションを使用します。