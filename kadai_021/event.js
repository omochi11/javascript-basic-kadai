const btn = document.getElementById('btn');
const text = document.getElementById('text');
const textContent =()=>{text.textContent='クリックされました！';
};


btn.addEventListener('click', ()=> {setTimeout(textContent, 2000)});

