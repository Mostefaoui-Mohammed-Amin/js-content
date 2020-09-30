let main = document.querySelector('div.container')
let classList = main.classList // return object array of class's of element
let contain = main.classList.contains('overlay') // to check if element contain specific class
let item = main.classList.item(2) // return class in index2 it's like array index
main.classList.add('items' , 'link') // to add new class to element
// main.classList.remove('items' , 'link') // to remove class to element
main.classList.toggle('active') // if he contain will remove else will add new class
let mai = document.getElementById('Main')
let children = mai.children // return object array  of children of element only tags and  mai.children.length or mai.childElementCount to get length
let childNodes = mai.childNodes  // return object array  of children of element tags and comment ant any text
let firstChild = mai.firstElementChild // it's like childeNodes get element with out any consisted of tags or not and we have firstElementChild to get element tag -- lastChild
let newElement = document.createElement('h1')
let newText = document.createTextNode('khalil')
newElement.appendChild(newText)
mai.appendChild(newElement)
mai.insertBefore(newElement, mai.children[1])
mai.removeChild(mai.childNodes[5])
let nodeName = mai.childNodes[0].nodeName //return name of element if text or tag
let tagName = mai.childNodes[1].tagName //return name of element tag or will return undefined
let nodeValue = mai.childNodes[0].nodeValue //return value of element don't matter if he tag or text
let nodeType = mai.childNodes[0].nodeType // return number if =3 its text or =1 it's element =2 it's attribute =8 is comment
let myCopy = mai.children[0].cloneNode(true) //false take tag and attribute and true take avery thing
main.appendChild(myCopy)
let parent = firstChild.parentElement //to get parent of node
let nextSibling = mai.childNodes[0].nextSibling // to get next Sibling or next brother for all or use nextElementSibling  just for element
// and we have previousSibling