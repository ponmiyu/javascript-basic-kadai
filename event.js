const evbtn = document.getElementById('btn');

evbtn.addEventListener('click', () => {
    setTimeout(() => {
        const h2text = document.createElement('text');
        text.textContent = 'ボタンをクリックしました';
        text.appendChild(h2text);
    }, 2000);
})