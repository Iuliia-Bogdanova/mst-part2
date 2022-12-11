# avengers
week20 task1
1. Делаем базу супергероев Марвел. На основе статьи [https://www.ellegirl.ru/articles/vse-o-15-samyih-krutyih-supergeroyah/](https://www.ellegirl.ru/articles/vse-o-15-samyih-krutyih-supergeroyah/) составьте JSON с массивом супергероев. Сделайте страничку-галерею, где можно будет просматривать информацию о героях по этим данным.
    
    Что должна уметь страничка: 
    
    - показать информацию о героях: их картинки, характеристики, подробное описание
    - поставить герою личную оценку (*сохраняем значения в localStorage*)
    например, 10/10 или 2/10, как рейтинг
    
    Дизайн на ваше усмотрение.

    (по лекции1 book container )

    Если ты уберешь из html файла всю верстку и оставишь один div с id cardsContainer, то данные нормально отобразятся. Ты просто немного усложнила с подключением бутстрапа :подмигивание: Под галереей имелось в виду просто вывести картинки с инфрмацией, совсем необязательно в виде слайдера. Кстати, ссылки на картинки тоже добавь в JSON :подмигивание: и добавь в отрисовку html
<img src="${card.image}">
script.js
document.addEventListener("DOMContentLoaded", function(event) {
<https://github.com/Iuliia-Bogdanova/marvel|Iuliia-Bogdanova/marvel>Iuliia-Bogdanova/marvel | Добавлено: GitHub


Кот Ученый
  4 д. назад
https://github.com/Iuliia-Bogdanova/avengers/blob/8ff5b9851606a57cc2bb21012495eb3f2355b176/script.js#L37 А,  ну вот ты собственно все и сделала, как я написал :кот_широко_улыбается: Осталось добавить поле image в каждый объект в JSON, указав ссылку на картинку. И добавить кртинку в верстку (см выше)
script.js
    for (let card of cards) {