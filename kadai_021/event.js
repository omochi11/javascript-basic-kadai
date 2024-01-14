const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log('クリックされました！')
});

btn.addEventListener('click', ()=> {
  const text = document.getElementById('text');
  text.textContent  = "ボタンをクリックしました";
});

setTimeout(textContent
, 2000);

