let json = `[{
    "title": "Stark",
    "character": "Iron Man",
    "name": "Tony Stark",
    "superpowers": "intelligence"
},{
    "title": "Cap",
    "character": "Сaptain America",
    "name": "Stephen Rogers",
    "superpowers": "strength, endurance, regeneration"
},{
    "title": "Natasha",
    "character": "Black Widow",
    "name": "Natasha Romanoff",
    "superpowers": "spy"
},{
    "title": "Thor",
    "character": "Thor",
    "name": "Thor Odinson",
    "superpowers": "the power of a god, the hammer Mjolnir"
},{
    "title": "Hawkeye",
    "character": "Hawkeye",
    "name": "Clint Barton",
    "superpowers": "great shooter"
},{
    "title": "Banner",
    "character": "Hulk",
    "name": "Bruce Banner",
    "superpowers": "intelligence, superhuman strength, flight"
}]`;

document.addEventListener("DOMContentLoaded", function(event) {
    let cards = JSON.parse(json);

    let cardsContent = "";
    for (let card of cards) {
        cardsContent += `<div class='card'>
        <h2>${card.title}</h2>
        <div>${card.author}</div>
        <div>${card.year}</div>
        </div>`;
    }
    document.getElementById("cardsContainer").innerHTML = cardsContent
});

//используем JSON parse and stringify для сохранения в веб-хранилище (local или session storage), без обращения к серверу ??

//в строке json хранится информация (мини база данных, выводится на экран):
/*
let json = `[{
    "title": "Властелин Колец",
    "genre": "фэнтези",
    "author": "Дж. Р. Р. Толкин",
    "year": 1954
},{
    "title": "Алиса в Зазеркалье",
    "author": "Льюис Кэрролл",
    "year": 1871
},{
    "title": "Гарри Поттер и философский камень",
    "author": "Джоан Роулинг",
    "year": 1997
}]`;

//при загрузке страницы генерируются карточки книг (или что угодно:). "DOMContentLoaded" - обязательно копируем во все проекты чтобы парсил после полной загрузки страницы
/*
document.addEventListener("DOMContentLoaded", function(event) {
    let books = JSON.parse(json);
//парсим JSON-строку (или парсим из local storage если уже лежит в сессии???)
    console.log(books); 
//в books уже лежит набор книг как объектов
    let booksContent = "";
//затем формируем пустую строку, затем в цикле генерируем контент этой строки: div - карточку для каждой книги, можно изменять содержимое, стили задаем как обычно через class (<div class='book'>)

    for (let book of books) {
        booksContent += `<div class='book'>
        <h2>${book.title}</h2>
        <div>${book.genre}</div>
        <div>Автор: ${book.author}</div>
        <div>Год выхода: ${book.year}</div>
        </div>`;
    }
//затем выводим эти данные в div/контейнер
    document.getElementById("booksContainer").innerHTML = booksContent
});
    
 //можем добавлять любую инфу, например жанр. если в json ее нет, выводится undefined. чтобы избежать - дописываем в кусок кода тернарный (тенантный??) оператор - можем усложнять доп.условиями
/* +
        ((book.genre == undefined) ? `` : `<div>${book.genre}</div>`) +

//внимательно проверяем все обратные скобки! (ставим до и после вставленного куска):

    for (let book of books) {
        booksContent += `<div class='book'>
        <h2>${book.title}</h2>` +
        ((book.genre == undefined) ? `` : `<div>${book.genre}</div>`) +
        `<div>Автор: ${book.author}</div>
        <div>Год выхода: ${book.year}</div>
        </div>`;
    }
*/

/*код изначальный полностью без комментариев, жанра и без тернарных операторов чистый:
let json = `[{
    "title": "Властелин Колец",
    "author": "Дж. Р. Р. Толкин",
    "year": 1954
},{
    "title": "Алиса в Зазеркалье",
    "author": "Льюис Кэрролл",
    "year": 1871
},{
    "title": "Гарри Поттер и философский камень",
    "author": "Джоан Роулинг",
    "year": 1997
}]`;

document.addEventListener("DOMContentLoaded", function(event) {
    let books = JSON.parse(json);

    let booksContent = "";
    for (let book of books) {
        booksContent += `<div class='book'>
        <h2>${book.title}</h2>
        <div>Автор: ${book.author}</div>
        <div>Год выхода: ${book.year}</div>
        </div>`;
    }
    document.getElementById("booksContainer").innerHTML = booksContent
});
*/
/*можем в неск строчек сгенерировать страницу по пришедшему к нам набору данных:
- можем данные написать руками (стр.4-17 или 57-69)
- взять из storage
- получить из файла (загружаем отдельный файл json)актуально для редко меняющихся справочников например, брать не с сервера а хранить у себя и наполнять списки
- данные могут приходить с сервера

код стр. 20-38 или 71-83 не будет меняться ???независимо от того, откуда приходит json
*/