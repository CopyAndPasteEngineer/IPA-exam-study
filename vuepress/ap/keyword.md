---
title: 応用情報技術者試験キーワード集
description: 応用情報技術者試験キーワード集
---

# 応用情報技術者試験キーワード集

<AudioPlay/>

## ストラテジ系

### ABC分析　
重要度や優先度の高い要素・項目を明らかにするために行われる分析手法。<br>
パレート図を使って分析する要素・項目群を大きい順に並べ、上位70%を占める要素群をA、70%～90%の要素群をB、それ以外の要素群をCとしてグルーピングすることで重点的に管理すべきグループがどれであるかを明らかにすることができる。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/ABC分析.mp3')" type="audio/mp3" />

### ANSI(American National Standards Institute)
アメリカ合衆国の工業的な分野の標準化組織であり公の合意形成のために、さまざまな規格開発をおこなう団体。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/ANSI.mp3')" type="audio/mp3" />

### ASP(Application Service Provider)
主に業務用のアプリケーションをインターネットを通じて顧客にレンタルするサービス形態又はその事業者のことをいう。<br>
サービス利用側には、購入や新規開発よりもコストを低く抑えることができることやシステム管理の負担が少なくなるというメリットがある。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/ASP.mp3')" type="audio/mp3" />

### アウトソーシング（outsourcing）
自社の業務の一部又は業務のすべてを外部へ委託すること。専門的な知識・技能が必要となる業務を、その業務を得意とする業者へ外注することで人材育成や設備投資のコストが低減されるメリットがある。<br>
語源は「Out（外部） + Sourcing（資源利用）」。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アウトソーシング.mp3')" type="audio/mp3" />

### アカウンタビリティ（Accountability）
アカウンティング（会計）とレスポンシビリティ（責任）の合成語で「説明責任」と訳される。<br>
<br>
元は出資者に対する会計報告の意味で使われていたが、現在では意味が拡張され「広く社会に影響をもちうる活動を行う団体は、利害関係者に対して、その活動や権限行使の予定、内容、結果等の報告をする必要がある」という考え方を表している。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アカウンタビリティ.mp3')" type="audio/mp3" />
  あなたのブラウザーは <code>audio</code> 要素に対応していません。
</audio>

### アフィリエイト（affiliate）
企業の広告を個人(企業)の所有するホームページに掲載し、そのリンクをたどって企業の商品やサービスが売れた場合に、広告を載せているホームページの主に報酬を支払うという仕組み。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アフィリエイト.mp3')" type="audio/mp3" />

### アライアンス（alliance）
直訳すると同盟という意味ですが、企業同士の連携を表す言葉として使われている。企業合併や資本提携、販売提携など連携の強さもスタイルも様々なものがある。<br>
アライアンスを締結する目的としては、お互いの不得意分野の補完や、事業投資リスクの軽減などがある。新規事業に投資する際に自社１社で開発するよりも、開発コストを連携する会社と出資しあえば、事業投資に対するリスクを軽減することができる。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アライアンス.mp3')" type="audio/mp3" />

### アンゾフの成長マトリクス
経営学者のH・イゴール・アンゾフ（H. Igor Ansoff）が示したもので、縦軸に「市場」、横軸に「製品」をとり、それぞれに「既存」「新規」の2区分を設け、4象限(市場浸透，新製品開発，新市場開拓，多角化)のマトリクスとしたもの。どんな市場にどんな商品を投入していけば、事業が成長、発展できるかを検討するのに有効なフレームワーク。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アンゾフの成長マトリクス.mp3')" type="audio/mp3" />

## テクノロジ系

### ACID　
データベースのトランザクション処理を行う上で必要不可欠とされる4つの性質(Atomicity・Consistency・Isolation・Durability)の頭文字を並べた言葉。<br>
+ Atomicity：原子性
+ + トランザクション内の処理がすべて実行されるか、または全く実行されないことを保証する性質。
+ Consistency：一貫性
+ + トランザクションによりデータの矛盾が生じないこと。<br>常にデータベースの整合性が保たれていることを保証する性質。
+ Isolation：独立性
+ + 複数のトランザクションを同時に実行した場合と、順番に実行した場合の結果が等しくなることを保証する性質。<br>一般にロックなどをかけることで直列可能性を保証する。<br>隔離性と呼ばれる場合もある。
+ Durability：永続性
+ + 一旦正常終了したトランザクションの結果は、以後システムに障害が発生しても失われないことを保証する性質。<br>耐久性と呼ばれる場合もある。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/ACID.mp3')" type="audio/mp3" />

### ADSL（Asymmetric Digital Subscriber Line）
一般家庭に普及しているアナログ電話回線をそのまま利用し、それまでに使用されていなかった周波数帯域を利用することでディジタル通信を行う伝送方式。「下り」(通信業者から利用者へ)と「上り」(利用者から通信業者へ)の通信速度が異なるため非対称ディジタル加入者線とも呼ばれる。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/ADSL.mp3')" type="audio/mp3" />

### AES（Advanced Encryption Standard）
アメリカ合衆国の次世代暗号方式として規格化された共通鍵暗号方式。<br>
ブロック長は128ビット，使用する鍵の長さは128/192/256ビットから選択が可能となっている。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/AES.mp3')" type="audio/mp3" />

### API（Application Programming Interface）
アプリケーションに共通の標準化されたインターフェイスを提供するためにOSなどが提供するライブラリ<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/API.mp3')" type="audio/mp3" />

### APOP（Authenticated Post Office Protocol）
メールサーバとメーラーのユーザ認証を暗号化して行うことで、認証情報がネットワーク中を平文で流れるのを防ぐPOP3のオプション機能。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/APOP.mp3')" type="audio/mp3" />

### ARP（Address Resolution Protocol）
IPアドレスから対応する機器のMACアドレスを取得するプロトコル。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/ARP.mp3')" type="audio/mp3" />

### ATA（Advanced Technology Attachment）
コンピュータとハードディスク間を接続するためのインターフェイス規格。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/ATA.mp3')" type="audio/mp3" />

### ATM（Asynchronous Transfer Mode）
高速通信を可能とするために送信するデータを48バイトのペイロード部に5バイトのヘッダ情報を付けた合計53バイトの固定セルに分割してデータをやり取りする交換方式。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/ATM.mp3')" type="audio/mp3" />

### Ajax（エイジャックス or アジャックス）
Asynchronous JavaScript＋XMLの略で、JavaScriptがもつ非同期通信機能を用いてインターフェイスの構築などをウェブブラウザ内で行う技術の総称。Webブラウザのみで動作することが特徴で、非同期通信でサーバからデータを取得し、そのデータの内容によってダイナミックHTMLで画面を動的に書き換えることで画面遷移を伴わない動的なWebアプリケーションを実現している。<br>
Ajaxを使用した有名なサービスにGoogleMapやGmailがある。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/Ajax.mp3')" type="audio/mp3" />

### Apache（アパッチ）
オープンソースのWebサーバソフトウェア。開発は、Apacheソフトウェア財団のApache HTTPサーバプロジェクトで行われていて、Apache Licenseの下でソースコードが公開および配布されている。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/Apache.mp3')" type="audio/mp3" />

### アクティビティ図
UMLの1つで、上流行程のビジネスプロセスの流れや下流行程のプログラムの制御フローを表すことができる図
<audio controls :src="$withBase('/assets/wav/ap/keyword/アクティビティ図.mp3')" type="audio/mp3" />

### アジャイル（agile）
「俊敏な」「すばやい」という意味の英単語で、ソフトウェアを迅速かつ適応的にソフトウェア開発を行う軽量な開発手法の総称。 開発プロジェクトを短期間に区切り、その期間内に「要件定義」～「テスト」「運用」までの開発工程を一通り行い、一部分の機能を完成させるという作業を繰り返すことで段階的にシステムを開発していくモデル。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アジャイル.mp3')" type="audio/mp3" />

### アセンブラ（Assembler）
アセンブラ言語で記述されたソースコードを機械語に変換する言語プロセッサ。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アセンブラ.mp3')" type="audio/mp3" />

### アンダーフロー（Underflow）
数値演算の結果が、プログラムで使用している数値型変数の型の最小値や、データ領域の下限よりも小さくなること。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アンダーフロー.mp3')" type="audio/mp3" />

### アンチエイリアシング（anti-aliasing）
ディジタル画像の物体の輪郭に現れるピクセルのギザギザ（ジャギー）を、なめらかに見せるために周囲(背景)の画素値と平均化処理をして描画するCG技法。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アンチエイリアシング（anti.mp3')" type="audio/mp3" />

### アーカイブ（archive）
保存記録のこと。複数形のアーカイブズは、文書保管を目的とした仕組みや、保管をする施設を指す。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アーカイブ.mp3')" type="audio/mp3" />

## マネジメント系
### アローダイアグラム（Arrow Diagram）
プロジェクトの各作業間の関連性や順序関係を視覚的に表現する図。作業の前後関係を分析することで時間的に余裕のない一連の作業(クリティカルパス)を洗い出すことができるためプロジェクトのスケジュール管理に使用される。PERT図とも呼ばれる。<br>
<br>
<audio controls :src="$withBase('/assets/wav/ap/keyword/アローダイアグラム.mp3')" type="audio/mp3" />

