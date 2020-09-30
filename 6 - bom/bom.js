window.alert('hello')
window.document.getElementsByTagName('p')
window.console.log('hi')
let stop = document.getElementById('stop')
let start = document.getElementById('start')
let contes = document.getElementById('contes')
setTimeout(()=>{
    console.log('hi from 3 seconds')
},3000)
// or setTimeout(()=>{myFun,3000)
let i = 0
let contesRepeat = setInterval(()=>{
    contes.textContent = i++
},1000)
stop.onclick = ()=>{
    // clearTimeout(contesRepeat)
    clearInterval(contesRepeat)
}
start.onclick = ()=>{
    // clearTimeout(contesRepeat)
    contesRepeat = setInterval(()=>{
        contes.textContent = i + 1
    },1000)
}
// window.open(url,name or attribute(like _blank),specification,history replace)
start.onclick = ()=>{
    window.open("https://google.com",'khalil','width=600,height=600,left=300,top=450','true')
}
start.onclick = ()=>{
    window.scrollBy(200,1200)// H / V take negative value
    //to get how much scroll happen use scrollX and scrollY
    window.scrollTo(600,1200) //its happen just for one time
}
let myNewWindow = window.open('https://google.com','khalil','width=600,height=600')
myNewWindow.stop() //to stop load of window and we have close() & focus()
myNewWindow.focus()
myNewWindow.close()
let innerHeight = window.innerHeight //to get height of view window that contain my html code and we have innerWidth
let outerHeight = window.outerHeight //to get all screen window with avery thing and we have outerWidth
let pageXOffset = window.pageXOffset //to get how user scroll and we have also pageYOffset
let scrollX = window.scrollX // do same thing that pageXOffset do
let scrollY = window.scrollY // do same thing that pageYOffset do
let locationHref = window.location.href // and i can change
let hash = window.location.hash //to get hash from link like: www.facebook.com/#game
let host = window.location.host //to get hots
let protocol = window.location.protocol
let search = window.location.search // to get query like ?fgshdsydh456G
let pathName = window.location.pathname //to get router that he after hostname
window.location.href ='#div' //to go to id in page
window.location.assign('www.facebook.com') // will add in history
window.location.replace('www.facebook.com') // will  not add in history and will replace tab active with new tab
window.location.reload(false) // false to refreshed tab from cache of browser and true to do hard reload from cache of server
let length = history.length
history.forward() // to go to forward
history.back() // to go to back
history.go()//take number negative for back or positive for forward
{/* <a href="javascript:history.back()">back</a> */}
console.log(navigator.appName)
console.log(navigator.appCodeName)
console.log(navigator.appVersion)
console.log(navigator.platform)
console.log(navigator.cookieEnabled)
console.log(navigator.language)
console.log(navigator.onLine)
console.log(navigator.product)
console.log(screen.height)
console.log(screen.width)
console.log(screen.availHeight) //to get height with out height of taskbar
console.log(screen.availWidth)
console.log(screen.colorDepth)