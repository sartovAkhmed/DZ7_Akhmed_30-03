/* - Будет 6 каких-то загадок, у каждой загадки рядом будет находиться кнопка «показать ответ», 
при клике на нее рядом с загадкой должен появиться правильный ответ, 
а кнопка поменяться на «скрыть ответ». При нажатии на «скрыть ответ» 
правильный ответ исчезает и кнопка снова становится «показать ответ». 
Хорошая практика будет для работы с toggle) */
const button = document.querySelectorAll('.page__btn')
button.forEach(button => {
    button.onclick = ()=>{
        const answer = button.nextElementSibling;
        if(answer.style.display === 'none' || answer.style.display === ''){
            answer.style.display = 'block';
            button.textContent = '«скрыть ответ»';
        }else{
            answer.style.display = 'none';
            button.textContent = '«показать ответ»';
        }
    }
})