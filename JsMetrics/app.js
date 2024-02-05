// РАБОТА С КЛАССАМИ
// TASK 1 - TASK 2

// const elem = document.getElementById("elem")
// elem.classList = 'www'

// elem.classList = ''





// TASK 3

// const elem = document.getElementById("elem")

// 'www' in elem.classList ? console.log(true) : console.log(false)





// TASK 4

// const elem = document.getElementById("elem")

// 'www' in elem.classList ? elem.classList = '' : elem.classList = 'www'





// TASK 5

// const elem = document.getElementById("elem")
// elem.classList = 'www'

// console.log(elem.classList.length)





// TASK 6

// const elem = document.getElementById("elem")

// elem.classList = 'www class2 class3 class4 class5'

// for(let i = 0; i < elem.classList.length; i++) {
//     alert(elem.classList[i])
// }










// РАБОТА С CSS

// const elem = document.getElementById("elem")

// elem.style = 'background-color: red; width: 30px; border: 1px solid black;'










// СВОЙСТВО tagName
// TASK 1

// const elem = document.getElementById("elem")

// elem.addEventListener('click', () => {
//     alert(elem.tagName)
// })





// TASK 2

// const elem = document.getElementById("elem")

// elem.addEventListener('click', () => {
//     alert(elem.tagName.toLowerCase())
// })





// TASK 3

// const www = document.querySelectorAll('.www')

// for(let i = 0; i < www.length; i++) {
//     www[i].innerText += www[i].tagName.toLowerCase()
// }










// ВСТАВКА ЭЛЕМЕНТОВ ЧЕРЕЗ appendChild
// TASK 1

// const ol = document.querySelector('.www-wrapper')

// const point = document.createElement('li')
// point.innerText = 'Пункт'
// ol.appendChild(point)






// TASK 2

// const myUl = document.getElementById('myUl')

// const myArr = ['text 1', 'text 2', 'text 3', 'text 4', 'text 5']

// for(let i = 0; i < myArr.length; i++) {
//     const myLi = document.createElement('li')
//     myLi.innerText = myArr[i]
//     myUl.appendChild(myLi)
// }










// ВСТАВКА ЭЛЕМЕНТОВ ЧЕРЕЗ inserAdjacentHTML

// const elem = document.querySelector('.www-wrapper')

// elem.insertAdjacentHTML("beforebegin", "<span>!!!</span>")
// elem.insertAdjacentHTML("beforeend", "<span>!!!</span>")
// elem.insertAdjacentHTML("afterbegin", "<span>!!!</span>")
// elem.insertAdjacentHTML("afterend", "<span>!!!</span>")










// УДАЛЕНИЕ И КЛОНИРОВАНИЕ
// TASK 1

// const parent = document.getElementById('parent')
// const child = document.getElementById('child')
// const deleteButton = document.getElementById('deleteButton')

// deleteButton.addEventListener("click", () => {
//     parent.removeChild(child)
// })





// TASK 2

// const ol = document.querySelector('.myOl')

// const olDeleteButton = document.getElementById("olDeleteButton")

// olDeleteButton.addEventListener("click", () => {
//     ol.removeChild(ol.lastChild)
// })





// TASK 3

// const elem = document.getElementById('elem')

// elem.addEventListener("click", () => {
//     document.body.removeChild(elem)
// })





// TASK 4

// const myOl = document.querySelector('.myOl')
// const myOlChilds = myOl.children

// for(let i = 0; i < myOlChilds.length; i++) {
//     myOlChilds[i].addEventListener("click", () => {
//         myOl.removeChild(myOlChilds[i])
//     })
// }





// TASK 5

// const myInput = document.getElementById('myInput')
// const cloneButton = document.getElementById('cloneButton')

// cloneButton.addEventListener('click', () => {
//     myInput.after(myInput.cloneNode(true))
// })










// ПОТОМКИ

// const elem = document.getElementById("myElem")

// elem.firstElementChild.style.color = 'red'
// elem.lastElementChild.style.color = 'red'

// for(let i = 0; i < elem.children.length; i++) {
//     elem.children[i].innerText += '!!!'
// }










// СОСЕДИ

// const elem = document.getElementById('element')

// elem.previousElementSibling.innerText += '!'
// elem.nextElementSibling.innerText += '!'
// elem.nextElementSibling.nextElementSibling.innerText += '!'










// РОДИТЕЛИ

// const elem = document.getElementById('element')

// elem.parentNode.style.backgroundColor = 'red'
// elem.parentElement.parentElement.style.backgroundColor = 'brown'










// НА ВЕЛИЧИНУ ГРАНИЦЫ

// const elem = document.getElementById('elem')
// const topB = document.getElementById('topB')
// const leftB = document.getElementById('leftB')

// topB.addEventListener('click', () => {
//     console.log(elem.clientTop)
// })
// leftB.addEventListener('click', () => {
//     console.log(elem.clientLeft)
// })









// НА ПОЛНЫЙ РАЗМЕР ЭЛЕМЕНТА

// const elem = document.getElementById('elem')
// const paddingsWidth = document.getElementById('paddingsWidth')

// paddingsWidth.addEventListener("click", () => {
//     console.log(`Полная ширина: ${elem.offsetWidth}\nПолная высота: ${elem.offsetHeight}`)
// })










// НА РАЗМЕР ЭЛЕМЕНТА БЕЗ ГРАНИЦ, НО С padding

// const elem = document.getElementById("elem")
// const clientW = document.getElementById('clientW')

// clientW.addEventListener("click", () => {
//     console.log(`Ширина: ${elem.clientWidth}\nВысота: ${elem.clientHeight}`)
// })










// РАБОТА С getComputedStyle

// const elem = document.getElementById("elem")
// const clientW = document.getElementById('clientW')

// clientW.addEventListener("click", () => {
//     console.log(`Ширина: ${getComputedStyle(elem).height}\nВысота: ${getComputedStyle(elem).height}`)
// })










// ПРОКРУТКА ЭЛЕМЕНТА

// const elem = document.getElementById('scrollElem')

// const getTopScroll = document.getElementById('getTopScroll')
// const getLeftScroll = document.getElementById('getLeftScroll')
// const go100Top = document.getElementById('go100Top')
// const go100Bottom = document.getElementById('go100Bottom')

// getTopScroll.addEventListener("click", () => {
//     console.log(elem.scrollTop)
// })
// getLeftScroll.addEventListener("click", () => {
//     console.log(elem.scrollLeft)
// })

// go100Top.addEventListener("click", () => {
//     elem.scrollTop = 100
// })

// go100Bottom.addEventListener("click", () => {
//     elem.scrollTop += 100
// })





// HORIZONTAL SCROLL

// const elem = document.getElementById("scrollElem2")

// const realWH = document.getElementById("realWH")
// const scroll100 = document.getElementById('scroll100')

// realWH.addEventListener("click", () => {
//     console.log(`Высота: ${elem.scrollHeight}\nШирина: ${elem.scrollWidth}`)
// })
// scroll100.addEventListener("click", () => {
//     elem.scrollLeft = 100
// })











// ПРОКРУТКА СТРАНИЦЫ

// const pageInfo = document.getElementById("pageInfo")

// pageInfo.addEventListener("click", () => {
//     console.log(`Прокручена по вертикали: ${window.scrollY}\nПрокручена по горизонтали: ${window.scrollX}`)
// })





// const scroll300500 = document.getElementById('scroll300500')
// const scroll300Bottom = document.getElementById("scroll300Bottom")

// scroll300500.addEventListener("click", () => {
//     window.scrollTo(300, 500)
// })

// scroll300Bottom.addEventListener("click", () => {
//     window.scrollTo({
//         'left': 300
//     })
// })










// ПРАКТИКА

// const scrollMax = document.getElementById("scrollMax")

// scrollMax.addEventListener("click", () => {
//     window.scrollTo(0, document.body.scrollHeight)
// })

// const scroll400 = document.getElementById('scroll400')

// scroll400.addEventListener('click', () => {
//     window.scrollTo(0, 400)
// })


// const scrollProv = document.getElementById("scrollProv")
// scrollProv.addEventListener("click", () => {
//     window.scrollY === document.body.scrollHeight ? window.scrollTo(0, 100) : null
// })


// const resizeElem = document.getElementById("resizeElem")

// resizeElem.addEventListener("click", () => {
//     resizeElem.style = `height: ${resizeElem.offsetHeight * 2}px; width: ${resizeElem.offsetWidth * 2}px;`
// })




