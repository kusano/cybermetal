import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'有明に住んでみた'}
        description={'秋葉原に10年ぐらい住んでみた続編'}
        author={'なのくろ'}
        image={'/nanocloudx/author.jpeg'}
        twitter={'@nanocloudx'}
        website={'https://wwww.dev'}
      />
      <h2>新居を探す</h2>
      <p>
        さて、住み慣れた秋葉原を離れるにあたり、どこに住むべきかは悩ましい問題であった。
        （そもそも私は秋葉原のままでも全然良かったのだが、一旦それは後回しにする）
      </p>
      <p>
        僕が秋葉原以上に好きな街は「東京都千代田区丸の内」である。
        復刻した東京駅の駅舎、財閥が長年掛けて整備してきた景観、おしゃれな店舗群、そして皇居。
        もし住めるのなら丸の内が良いなーと前前前世から思っていたのだが、まあ当然無理である。
        そもそも丸の内には住居が存在しない。というより仮に存在したとしても億万長者でないと住めない。
      </p>
      <p>
        次に好きな街は「東京都大田区羽田空港」である。
        広々とした空、整備されたターミナル、飛び交う飛行機、世界と世界をつなぐ玄関。
        もし住めるのなら羽田空港もいいなーと思っていたが、これも当然無理である。
        空港に住んだという映画があった気がするが、もちろん現実的ではない。
      </p>
      <p>
        悩みに悩んだ末、たどり着いた結論が「東京都江東区有明」である。
        国と東京都が整備した新しい街、東京国際展示場、ラブライブ！虹ヶ咲学園スクールアイドル同好会の聖地、そしてコミケ会場。
      </p>
      <p>
        そもそも有明って住める場所なの・・・？と思われるかもしれないが、実際のところ有明は住環境としてかなり良い。本稿ではこの有明地区の魅力に迫りたい。
      </p>
      <h2>アクセス</h2>
      <p>
        まず最初に交通の便について書いておく必要がある。
        コミケ参加者ならご存知だと思われるが、りんかい線、ゆりかもめ、バス(＆水上バス)が主な交通手段である。
        地図で見てみると有明は都心と呼んで差し支えない好立地ではあるのだが、やはり秋葉原と比べてしまうと交通面で見劣りしてしまう(流石に山手線圏内には敵わない)。
      </p>
      <p>
        りんかい線とゆりかもめは若干料金が高いので、毎日使うことを考えているならば意識する必要があるかもしれない。
        バスについては電車と比べて微妙かなと思っていたが、意外と都バスは定時運行してくれるし200円で銀座や東京駅まで行けるのは便利。
      </p>
      <p>
        すぐ近くに首都高速があるので、もし車を所有している方なら利便性は格段に高くなる。日常でレインボーブリッジを走れるのはちょっと優雅な気分を味わえて良い。実は羽田空港まで10分ちょっとでいける稀有な場所でもあるので、旅行好きには最高の立地である。
      </p>
    </div>
  )
}
