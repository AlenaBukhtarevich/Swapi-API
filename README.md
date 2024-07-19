# Swapi API

Приложение, которое делает запрос к API - Swapi и полученную информацию показывает на экране. Swapi — это доступный источник данных для всех данных из канонической вселенной «Звездных войн». Можно запросить данные о персонажах, кораблях и не только!

<img src="./assets/images/swapi_api.png" alt="swapi_api" />

В запросе передаем, какую сущность хотим получить (фильмы, людей, планет starships) и её числовой идентификатор. В API есть по 10 сущностей каждого вида, поэтому идентификатор от 1 до 10:

Запрос уходит на сервер при нажатии на кнопку. В разметке HTML два поля: в первом - результат поиска, если данные пришли и всё хорошо, во втором — ошибка, если что-то пошло не так. Сообщения видны поочередно. Если результат показан, ошибка сброшена. И наоборот.

Добавлен обработчик ответа: если ответ успешный, следующий обработчик then получает объект ответа на вход, если с ответом что-то не так, промис отклонен. Использованы блоки catch и finally.

Интерфейс сообщает пользователю, что идёт загрузка надписью «Loading» пока идёт запрос.

<a href="https://swapi.py4e.com/documentation">Документация</a> открытого API — Swapi.

Технологии:

<div align="center">  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a> 
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>   
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
<a href="https://code.visualstudio.com/" target="_blank"><img style="margin: 10px" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" alt="VS Code" height="50" /></a>
