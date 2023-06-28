$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active'); /*toggleClass()は指定されているclass(ここではactive)を
                                     トグル処理するメソッド
                                     同じ処理や命令の実行によって2つの状態が
                                     交互に反転するような処理のこと
                                     トグル処理では該当のclass属性がある場合にはclassが
                                     削除され、ない場合にはclassが追加される*/
    $('#sp-menu').fadeToggle(); /*.fadeToggleは要素のフェードイン・フェードアウトを
                                  切り替えるメソッド
                                  このメソッドを使って、ハンバーガーメニューを
                                  開いているときの状態を設定
                                  ここでは#sp-menuを開いたときに.fadeToggle()が処理されるように設定*/
    event.preventDefault();
  });
});