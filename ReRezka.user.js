// ==UserScript==
// @name         ReRezka
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fixes for Rezka by Eject
// @author       Eject
// @match        *://rezka.ag/*
// @match        *://hdrezkaxxbnfd.net/*
// @match        *://hdrezkaenz73.org/*
// @icon         https://github.com/Eject37/ReRezka/raw/main/Rezka2.ico
// @grant        none
// ==/UserScript==

const backgroundColor = '#1b222a' // Основной задний цвет сайта
const backgroundColor2 = '#272f38' // Дополнительный фоновый цвет для многих элементов
const linkColor = '#7daae9' // Цвет ссылок, авторов и прочего
const commentColor = '#1e242b' // Цвет 2, 4, 6.. комментариев
const commentBackgroundColor = '#192026' // Задний цвет пустого фона комментариев
const commentSpoilerColor = '#313d44' // Фон текста открытого спойлера в комментариях
const voiceColor = '#23282f' // Фон где выбор озвучек
const buttonColor = '#2c343c' // Цвет кнопок серий, сезонов..
const buttonActiveColor = '#46505c' // Цвет кнопки выбранной серии, сезона..
const playerProgressColor = 'rgb(87, 133, 186)' // Цвет прогресс бара видео
const HDButtonColor = 'rgb(66, 108, 157)' // Фон надписи HD на шестерёнке
const videoSettingsColor = 'rgb(47 41 63)' // Фон настроек видео (там где выбирать качество)
const hoverColor = '#46505ccf' // При наведении на разные элементы (кнопки)

CustomIcon() // Иконка
function CustomIcon() {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.querySelector('head').children[0].appendChild(link);
    }
    //link.href = 'https://github.com/Eject37/ReRezka/raw/main/Rezka.ico';
    link.href = 'https://github.com/Eject37/ReRezka/raw/main/Rezka2.ico';
}

try { document.querySelector('body.b-theme__template__night.has-brand #wrapper').style.setProperty('background-color', backgroundColor, 'important') } catch { } // Фон всего сайта
try { document.querySelector('.b-collections__newest').style.background = backgroundColor2 } catch { } // Фон на главной подборка фильмов
try { document.querySelectorAll('.b-newest_slider_wrapper, .b-newest_slider, .b-newest_slider__list').forEach(x => {x.style.background = backgroundColor}) } catch { } // Фон на главной новые фильмы, сериалы..
try { document.querySelector('body.b-theme__template__night .b-topnav_wrapper').style.background = backgroundColor2 } catch { } // Фон верхней панели
try { document.querySelector('input#search-field').style.background = backgroundColor2 } catch { } // Фон поиска на верхней панели
try { document.querySelector('.b-tophead__subscribe-dropdown').style.display = 'none' } catch { } // Кнопка подпишись на верхней панели
try { document.querySelector('body.b-theme__template__night .b-tophead-dropdown ul').style.background = backgroundColor2 } catch { } // Фон верхней панели при наведении на профиль
try { document.querySelector('body.b-theme__template__night .b-post__schedule_more').style.background = backgroundColor2 } catch { } // Фон кнопки показать полный график
try { document.querySelector('#footer').style.background = backgroundColor2 } catch { } // Фон нижней панели
try { document.querySelector('table.b-post__actions').children[0].children[0].children[0].style.display = 'none' } catch { } // Убрать кнопку отзывы (а пролистать сложно?)
try { document.querySelector('.b-post__social_holder').style.display = 'none' } catch { } // Убрать под фильмом или сериалом ненужные социальные фигни #1
try { document.querySelector('#send-video-issue').style.display = 'none' } catch { } // Убрать под фильмом или сериалом ненужные социальные фигни #2
try { document.querySelector('.b-post__support_holder').style.display = 'none' } catch { } // Убрать под фильмом или сериалом ненужные социальные фигни #3
try { document.querySelector('.glory').style.display = 'none' } catch { } // Убрать из главной страницы сайта 'Слава Україні'


var backgroundpanel = document.head.appendChild(document.createElement('style'))
var backgroundpanelhover = document.head.appendChild(document.createElement('style'))
var backgroundseasons = document.head.appendChild(document.createElement('style'))
var colorlinks = document.head.appendChild(document.createElement('style'))
var colorlinks2 = document.head.appendChild(document.createElement('style'))
var colorlinks3 = document.head.appendChild(document.createElement('style'))
var colorlinks4 = document.head.appendChild(document.createElement('style'))
var colorlinks5 = document.head.appendChild(document.createElement('style'))
var colorlinks6 = document.head.appendChild(document.createElement('style'))
var colorlinks7 = document.head.appendChild(document.createElement('style'))
var colorlinks8 = document.head.appendChild(document.createElement('style'))
var colorlinks9 = document.head.appendChild(document.createElement('style'))
var colorlinks10 = document.head.appendChild(document.createElement('style'))
var colorlinks11 = document.head.appendChild(document.createElement('style'))
var colorlinks12 = document.head.appendChild(document.createElement('style'))
var colorlinks13 = document.head.appendChild(document.createElement('style'))
var colorlinks14 = document.head.appendChild(document.createElement('style'))
var colorlinks15 = document.head.appendChild(document.createElement('style'))
var colorlinks16 = document.head.appendChild(document.createElement('style'))
var colorlinks17 = document.head.appendChild(document.createElement('style'))
var colorlinks18 = document.head.appendChild(document.createElement('style'))
var colorlinks19 = document.head.appendChild(document.createElement('style'))
var colorlinks20 = document.head.appendChild(document.createElement('style'))
var colorlinks21 = document.head.appendChild(document.createElement('style'))
var colorlinks22 = document.head.appendChild(document.createElement('style'))
var colorlinks23 = document.head.appendChild(document.createElement('style'))
var colorlinks24 = document.head.appendChild(document.createElement('style'))
var colorlinks25 = document.head.appendChild(document.createElement('style'))
var colorlinks26 = document.head.appendChild(document.createElement('style'))
var colorlinks27 = document.head.appendChild(document.createElement('style'))
var colorlinks28 = document.head.appendChild(document.createElement('style'))
var colorlinks29 = document.head.appendChild(document.createElement('style'))
var colorlinks30 = document.head.appendChild(document.createElement('style'))

backgroundpanel.innerHTML = `body.b-theme__template__night .b-topnav__sub_inner {background: ${backgroundColor2}}` // Фон верхней панели при наведении
backgroundpanelhover.innerHTML = `body.b-theme__template__night .b-tophead-dropdown.hovered {background: ${backgroundColor2}}` // Фон верхней панели при наведении на профиль
backgroundseasons.innerHTML = `body.b-theme__template__night .b-post__schedule_block_title {background: ${backgroundColor2}}` // Фон сезонов
colorlinks.innerHTML = `body.b-theme__template__night .persons-list-holder .person-name-item a {color: ${linkColor} !important; border-bottom: 1px dotted ${linkColor}}` // Цвет текста ссылок
colorlinks2.innerHTML = `body.b-theme__template__night .b-post__info a {color: ${linkColor}}` // Цвет текста ссылок 2
colorlinks15.innerHTML = `body.b-theme__template__night a {color: ${linkColor}}` // Цвет текста ссылок 3
colorlinks3.innerHTML = `.b-comment__quoteuser {color: ${linkColor}; border-bottom: 1px dashed ${linkColor}}` // Цвет кнопки ответить
colorlinks4.innerHTML = `body.b-theme__template__night .b-comment__like_it {color: ${linkColor}}` // Цвет кнопки поддерживаю
colorlinks5.innerHTML = `.b-comment__like_it i {border-bottom: 1px dotted ${linkColor}}` // Цвет кнопки поддерживаю (подчёркивание)
colorlinks6.innerHTML = `body.b-theme__template__night a:visited {color: ${linkColor}}` // Цвет выбора эпизодов фильма/сериала
colorlinks7.innerHTML = `.b-post__mixedtext {display: none}` // Ненужная информация о дате выходе серий
colorlinks8.innerHTML = `.b-tracker__download_icon {background: linear-gradient(214.38deg, #1a1d1d 6.77%, #4f6a8c 85.64%)}` // Иконка скачивания от Rezka
colorlinks9.innerHTML = `body.b-theme__template__night #hd-comments-list>.comments-tree-list>li:nth-child(odd) {background: ${backgroundColor2}}` // Фон комментариев #1
colorlinks10.innerHTML = `body.b-theme__template__night #hd-comments-list>.comments-tree-list>li:nth-child(even) {background: ${commentColor}}` // Фон комментариев #2
colorlinks11.innerHTML = `body.b-theme__template__night #hd-comments-list>.comments-tree-list>li:nth-child(even) .comments-tree-item {background: ${commentColor}}` // Фон комментариев #3
colorlinks12.innerHTML = `body.b-theme__template__night #hd-comments-list>.comments-tree-list>li:nth-child(odd) .comments-tree-item {background: ${backgroundColor2}}` // Фон комментариев #4
colorlinks13.innerHTML = `body.b-theme__template__night #hd-comments-list>.comments-tree-list .comments-tree-list {background: ${commentBackgroundColor}}` // Фон комментариев #5
colorlinks14.innerHTML = `body.b-theme__template__night .text_spoiler {background-color: ${commentSpoilerColor}}` // Фон текста открытого спойлера

colorlinks16.innerHTML = `body.b-theme__template__night .b-post__lastepisodeout {background: ${backgroundColor2}}` // Фон панели `смотрите все серии бесплатно`
colorlinks17.innerHTML = `.b-translators__block {background-color: ${voiceColor}}` // Фон панели выбора озвучек
colorlinks18.innerHTML = `.b-translator__item {background-color: ${buttonColor}}` // Фон кнопок озвучек
colorlinks19.innerHTML = `.b-translator__item.active {background: ${buttonActiveColor} !important}` // Фон кнопки выбранной озвучки
colorlinks20.innerHTML = `.b-simple_season__item {background-color: ${buttonColor}}` // Фон кнопок сезонов
colorlinks21.innerHTML = `.b-simple_season__item.active {background: ${buttonActiveColor} !important}` // Фон кнопки выбранного сезона
colorlinks22.innerHTML = `.b-simple_episode__item {background-color: ${buttonColor}}` // Фон кнопок серий
colorlinks23.innerHTML = `.b-simple_episode__item.active {background: ${buttonActiveColor} !important}` // Фон кнопки выбранной серии

colorlinks24.innerHTML = `#cdnplayer_control_cc_icon0:before {background: ${playerProgressColor}}` // Цвет полоски снизу включённых субтитров
colorlinks25.innerHTML = `#cdnplayer_control_cc_icon0.none:before {background: transparent}` // Цвет полоски снизу выключенных субтитров

colorlinks26.innerHTML = `.b-translator__item:hover {background: ${hoverColor}}` // Фон кнопки озвучки при наведении
colorlinks27.innerHTML = `.b-simple_season__item:hover {background: ${hoverColor}}` // Фон кнопки сезонов при наведении
colorlinks28.innerHTML = `.b-simple_episode__item:hover {background: ${hoverColor}}` // Фон кнопки серий при наведении
colorlinks29.innerHTML = `body.b-theme__template__night .b-post__schedule_block_title:hover {background: ${hoverColor}}` // Фон сезонов и даты выхода серий при наведении

colorlinks30.innerHTML = `.tooltipster-content {background: ${backgroundColor2}}` // Фон при наведении на 'Не можешь выбрать озвучку'


setInterval(DynamicColors, 5)
function DynamicColors() {
    try { if (!getProp(document.querySelectorAll('pjsdiv')[12], null, 'background').includes(backgroundColor2)) {
        document.querySelectorAll('pjsdiv')[12].style.background = backgroundColor2 }} catch { } // Фон кнопки паузы на нижней полоске
    try { if (!getProp(document.querySelectorAll('pjsdiv')[80], null, 'background').includes('transparent')) {
        document.querySelectorAll('pjsdiv')[80].style.background = 'transparent' }} catch { } // Фон кнопки паузы
    try { if (!getProp(document.querySelectorAll('pjsdiv')[3], null, 'background-color').includes(backgroundColor2)) {
        document.querySelectorAll('pjsdiv')[3].children[0].style.backgroundColor = backgroundColor2 }} catch { } // Фон полоски где прогресс бар
    try { if (!getProp(document.querySelectorAll('pjsdiv')[21].children[2], null, 'background').includes(playerProgressColor)) {
        document.querySelectorAll('pjsdiv')[21].children[2].style.background = playerProgressColor }} catch { } // Прогрессбар
    try { if (!getProp(document.querySelectorAll('pjsdiv')[21].children[0], null, 'background').includes(playerProgressColor)) {
        document.querySelectorAll('pjsdiv')[21].children[0].style.background = playerProgressColor
        document.querySelectorAll('pjsdiv')[21].children[0].style.opacity = '0.05'}} catch { } // Прогрессбар
    try { if (!getProp(document.querySelectorAll('pjsdiv')[62].children[3], null, 'background-color').includes(HDButtonColor)) {
        document.querySelectorAll('pjsdiv')[62].children[3].style.backgroundColor = HDButtonColor}} catch { } // Фон надписи HD на шестерёнке
    try { if (!getProp(document.querySelectorAll('pjsdiv')[96].children[0].children[0], null, 'background').includes(videoSettingsColor)) {
        document.querySelectorAll('pjsdiv')[96].children[0].children[0].style.background = videoSettingsColor}} catch { } // Фон настроек видео
}


function getProp(param, after = null, prop) {
    return after == null ? window.getComputedStyle(param).getPropertyValue(prop) :
    window.getComputedStyle(param, after).getPropertyValue(prop)
}