import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination author={'happo31'} pageCount={5}>
      <p>なぜなら、<strong>スマートフォンの使用感は瞬間性能ではなく、バッテリーの持ちや安定した性能を発揮し続けられるか</strong>が重要だからです。</p>
      <p>巷にはそうやってベンチマークスコアを比較して「xxxx
        は低性能！爆熱！」とか煽ってる記事がたくさんありますが、こういう観点で見るとベンチマークスコアが低いというのはただの言いがかりに過ぎないことがよくわかると思います。</p>
      <p>むしろ、このベンチマークスコアを重視するあまり、本当に「バッテリーがすぐに無くなる」「発熱でサーマルスロットリングが発生してカメラアプリの異常終了が多発する」といった残念なことになってしまった
        Android 端末が過去にたくさんありました。(そして、これはご存じの通り日本市場における iPhone 席巻の原因でもあります)</p>
      <p>こういったことが起きた背景は、各種レビューサイトがベンチマークスコアを公開・比較し安易に評価を決めることを続けた結果、数値上のベンチマークスコアを出すために各種 SoC
        や端末メーカーも端末に見合わない性能を出さざるを得なくなってしまったからであると僕は考えています。</p>
      <p><strong>ま、独自研究なんで実際のところどうかはわかんないっすけどね。</strong></p>
      <p>そういうわけで、ベンチマークスコアを見て端末を選ぶのは本当におすすめしません。</p>
      <p>あなたがベンチマークスコアの数字を見て興奮できるタイプの性癖である場合は止めませんが。</p>
      <h2>3. 予算を決める</h2>
      <p>ここまででなんとなく自分が欲しい端末の方向性が見えてきたら予算を決めます</p>
      <p>メイン端末として買う場合は目的よりも値段が重要という場合もあると思います。</p>
      <p>とにかくいいものが欲しければ先に挙げたように各社が出している上位モデルを選んでおけば間違いないでしょう。</p>
      <p>ただ、僕自身は「普段使いする端末ぐらいはいくら出してもええやろ」派で安い価格帯のスマホについては見ることすらないので、特に提供できる情報はないです。</p>
      <p><strong>中華スマホは安かろう悪かろうなのでやめといたほうがいい。</strong></p>
      <p>ひとつ言えるとすれば、国内メーカーの端末は色々と経た結果、現在は最低限の品質が確保されているみたいなので、実は目立たないながらも安定した選択肢として生き残っており、繰り返しにはなりますが
        SoC や Android の進化によりかつてほどの魔境[5]ではなくなっている印象があります。</p>
      <p>なので、かつての先入観を一旦取っ払い、お店の端のほうに小さく置かれている端末も触ってみるのがよいと思います。</p>
      <p>（人気がないとかではなくて単純に店側が売りたい端末はフラグシップモデルなのでそういう陳列になる傾向がある印象）</p>
    </Pagination>
  )
}
