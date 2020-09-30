//  start find element
let getById = document.getElementById('heading') //return element
let getByClass = document.getElementsByClassName('heading') //return object array -- to do iteration: for(element of getByTagName){console.log(element)}
let getByTagName = document.getElementsByTagName('h1') //return object array
let querySelectorAll = document.querySelectorAll('h1.heading') //return object array
let querySelector = document.querySelector('p') // return first element
//  start find element by object
let titlePage = document.title // to get title of page
let images = document.images // to get all of images in page and return object array
let forms = document.forms // to get all of forms in page and return object array
// and  we have also document.forms[0].name(name of input).type or .value
let body = document.body // to get body and we have also body.innerHTML to get all childe tags and body.innerText to get text in childe tags
let anchors = document.anchors //to get all a tags that don't have href
let link = document.links //to get all a tags that have href
let text = getById.textContent //to get text on this element -- don't use innerText
let innerHTML = getById.innerHTML //to get this element with all include tags
let button = document.querySelector('button').value = 'submit' // to set attributes or get  -- if we need to get ot set class we use element.className
let buttonType = document.querySelector('button').getAttribute('type')
button = document.querySelector('button').setAttribute('value','submit')
let hasAttribute = document.querySelector('button').hasAttribute('type') //to check if does he have specific attribute
document.querySelector('button').removeAttribute('type')