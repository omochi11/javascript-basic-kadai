const btn =document.getElementById('btn')
const text =document.getElementById('text')


setTimeout(() =>{btn.addEventListener("click",
  text.textContent = 'ボタンが押されました')},2000);