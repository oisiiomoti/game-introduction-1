// ウェブページの中身が全部準備できたら、この中の呪文が動き出すよ
document.addEventListener('DOMContentLoaded', function() {
    // 'tab-button'という目印がついたボタンを全部見つけるよ
    const tabButtons = document.querySelectorAll('.tab-button');
    // 'tab-content'という目印がついた写真の箱を全部見つけるよ
    const tabContents = document.querySelectorAll('.tab-content');

    // 見つけたボタンを一つずつ調べて、どんなことが起こるか決めるよ
    tabButtons.forEach(button => {
        // ボタンが押されたら...
        button.addEventListener('click', () => {
            // まず、今選ばれているボタンから'active'の目印を外すよ
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 今選ばれている写真の箱からも'active'の目印を外すよ (全部隠す準備)
            tabContents.forEach(content => content.classList.remove('active'));

            // 押されたボタンに'active'の目印をつけるよ (これを選んだよ、と目印)
            button.classList.add('active');

            // 押されたボタンに書いてある 'data-tab' の名前 ('tab-content-1'とか) を取り出すよ
            const targetTabId = button.dataset.tab; // data-tab="tab-content-1" とか書いてある部分

            // その名前と同じidを持つ写真の箱を見つけるよ
            const targetTabContent = document.getElementById(targetTabId);

            // その写真の箱に'active'の目印をつけるよ (これを見せるよ、と目印)
            if (targetTabContent) { // もし箱が見つかったら
                targetTabContent.classList.add('active');
            }
        });
    });

    // 最初の一番最初のタブを自動的に選んで見せるようにするよ
    // (ページを開いた時に何もないのは寂しいからね)
    if (tabButtons.length > 0) { // もしボタンが一つでもあるなら
        tabButtons[0].click(); // 最初のボタンをポンと押す（クリック）のと同じことをする
    }
});