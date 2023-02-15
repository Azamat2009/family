let body = document.querySelector('body')
let banner = document.querySelector('#banner')
let card = document.querySelector('#card1')

card.onclick = () => {
    banner.style.display = 'block'
}

banner.onclick = () => {
    banner.style.display = 'none'
}