import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination author={'tayama'} pageCount={10}>
      <h2>追記オブ追記</h2>
      <p>Meta Quest
        3が間に合ったので少しだけ試してみました。肉眼と同じように複視は発生しました。仮想ウィンドウも現実と同じように、近くに置くとダブらず、遠くに置くとダブって視えます。これは、遠くのウィンドウは遠くに焦点を合わせた状態で像を結ぶような位置を算出して表示しているからなのでしょう。
      </p>
      <p>意外にもビデオパススルーで周囲を視たときも、近くのものはダブらず、遠くのものはダブって視えました。ダブりの度合いも肉眼のときと変わりません。興味深いことに、肉眼で近くのものを凝視しながら周辺視野で遠くを視るとダブって視えるものですが、ビデオパススルーで同じことをすると遠くが歪んで視えます。その状態で遠くに視線を移すと歪みがスッと消えます。おそらくMeta
        Quest 3はリアルタイムに視線の先の深度を検出して、そこに左右のカメラの焦点を合わせているのでしょう。（筆者はカメラや立体視に詳しくないのであくまで推察です。）
      </p>
      <p>VRゴーグルを着けているとやたら頭痛がするのも気になりましたが、複視のせいなのか慣れていないだけ（ゴーグルの固定位置が悪いとかバンドの締め付けが強いとか）なのかはよくわかりません。瞳孔間距離調節機能も試してみましたが、複視に関しては影響しませんでした。残念ながらVRゴーグルは複視には適応しないようです。</p>
      <hr/>
      <ol>
        <li>https://myel.myvoice.jp/products/detail.php?product_id=28109</li>
        <li>https://www.mhlw.go.jp/topics/2004/06/tp0625-2g.html</li>
        <li>https://www.msdmanuals.com/ja-jp/%E3%83%9B%E3%83%BC%E3%83%A0/20-%E7%9C%BC%E3%81%AE%E7%97%85%E6%B0%97/%E7%9C%BC%E7%96%BE%E6%82%A3%E3%81%AE%E7%97%87%E7%8A%B6/%E8%A4%87%E8%A6%96</li>
        <li>https://hashiguchi-cl.com/page/brainpedia/%E3%82%82%E3%81%AE%E3%81%8C%E4%BA%8C%E9%87%8D%E3%81%AB%E8%A6%8B%E3%81%88%E3%82%8B%EF%BC%88%E8%A4%87%E8%A6%96%EF%BC%89/</li>
        <li>https://www.meta.com/jp/quest/quest-3/</li>
      </ol>
    </Pagination>
  )
}
