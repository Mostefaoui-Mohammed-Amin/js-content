let main = document.getElementById('main')
window.onload = ()=>{
    main.children[0].focus() //to remove focus use blur() and we have also click
}
main.children[0].addEventListener('blur',()=>{
    // main.children[0].style.display ='none'
})
let check = document.getElementById('para').contains(document.getElementById('test')) // check if element test is contain in element para

let start = document.querySelector('.start')
let clientHeight = start.clientHeight // return height of element just  with visible aria ,padding no scroll no margin no border  --- and we have also clientWidth
let scrollHeight = start.scrollHeight // return  height of element with all aria even invisible aria with padding no border no margin no scroll --- and we have also scrollWidth
let offsetHeight = start.offsetHeight // return height of element just  with visible aria ,padding ,scroll ,border and no margin  --- and we have also offsetWidth
start.children[0].onclick= ()=>{
    document.documentElement.scrollTop += 200
    console.log(document.documentElement.scrollTop )
    if(document.documentElement.scrollTop = 450){
        start.children[0].classList.add('active')
    }
}
let borderTop = start.clientTop // to get border-top and the same with clientLeft and he get also scroll use this in css direction: rtl;
document.inputEncoding
document.lastModified
document.URL
let attribute = document.createAttribute('id')
attribute.value = 'container'
start.setAttributeNode(attribute)
// events: onload onscroll, onresize(in responsive),onfocus, onsubmit(for form not button submit) oncontextmenu (for right click of mouse), onKeyUp Down Press
myForm.onfocus= ()=>{
    console.log('you are write now')
}
myForm.onblur = ()=>{
    if(myForm.value.length <=10){
        console.log('short password')
    }
}
window.oncontextmenu = (e)=>{
    e.preventDefault()
}