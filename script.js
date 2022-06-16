const followCursor = () => {
    const el = document.querySelector('.follow-cursor')
    window.addEventListener('mousemove', e => {  
        const target = e.target
        if (!target) return
        if (target.closest('p') || target.closest('h1')) { // если курсор наведён на ссылку  
            el.classList.add('follow-cursor_active') // элементу добавляем активный класс  
        } else { // иначе  
            el.classList.remove('follow-cursor_active') // удаляем активный класс  
        }
        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева  
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху  
    })
}

function rechangeItem() {
    document.querySelector(".follow-cursor").style.display = 'none';
}

function changeItem() {
    document.querySelector(".follow-cursor").style.display = 'block';
}

followCursor()