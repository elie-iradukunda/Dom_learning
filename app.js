const wrap=document.querySelectorAll('#book-list li .name')
Array.from(wrap).forEach((book)=>{
    console.log(book)
})


// am going to change text and html content of dom

let books =document.querySelectorAll('#book-list li .name');
// text content  & inner html

// use array methods

books.forEach((book)=>{
    book.textContent+='title'
})

// changing there inner html
const booklist=document.querySelector('#book-list');
// booklist.innerHTML='<h2>Hello coders</>'
booklist.innerHTML+='<p>Hello rwandan</>'

// Dom nodes

// every single element in html page is node

//textnpode,comment nodde,attribute node,element node

const banner=document.querySelector("#page-banner")


// this output 1 as node type one because is element

// element is node type1, attribute is node type 2,text is node type 3
console.log("page banner node type is", banner.nodeType)//1
console.log("page banner node name is", banner.nodeName)// Div
console.log("page banner node haschild node is", banner.hasChildNodes())// true because its has child node because div is parent

// am going to clone or coppy

const clonedBanner=banner.cloneNode(true)// this true help in clonning whole things inside that div / node
console.log(clonedBanner)

// Dom traversel (parent to child and vice versal)

const bookshop=document.querySelector("#book-list")
console.log("parent node is",bookshop.parentElement)
// i can use parentNode or parentElement
console.log("parent node is",bookshop.parentElement.parentElement)


// childNodes

console.log("html collection",booklist.children);//html collections
console.log("nodelist is",booklist.childNodes); // nodelist


// DOM traversing (Sibrings/to sibring) 
// dom traversal is moving accross dom elements
// sibrings is like for example we have div sibring is like text inside in it 
// we have nextsibrings and nextElementSibring 
// we have also previous sibrings and previous element sibrings
// example      <header>
            /*<div id="page-banner">
                <h1 class="title">Bookmarks</h1>
                <p>BOOK FOR NINJAS</p>
                <form id="search-books">
                    <input type="text" placeholder="search books ..">

                </form>
                
            </div>
        </header>
        <div id="book-list"></div>*/


        // book-list previous sibbring is (book-list previous  sibring is #text)
        // book-list previous elementSibrring is header


        

console.log("book-list nextsibring is",booklist.nextSibling)
console.log("book-list nextelementSibrings",booklist.nextElementSibling)
console.log("book-list previous  sibring is",booklist.previousSibling)
console.log("book-list previous element sibring is",booklist.previousElementSibling)


booklist.previousElementSibling.querySelector('p').innerHTML +='<br/> Too kook for every one else in our plannet'

// Dom events/ removing content from dom
// click event, kepress , submit 

let h2=document.querySelector("#book-list h2");
h2.addEventListener("click",(e)=>{
    console.log(e.target );
    console.log(e)
})



// adding and removing events on button

let btn=document.querySelectorAll("#book-list .delete");
Array.from(btn).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const li=e.target.parentElement
        li.parentNode.removeChild(li)
    })
})


const link=document.querySelector("#page-banner a")
link.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("navigation failed")
})



//  Let go to Event bubling
// this is movement of event lister from parent to child or vise versal

// event bubling will occur when i click on one button it will go to target 
 // it will burbles up to the the parent element
// from target ement to parent element

// this will remove the attachement of event lister to every added element in dom


const list2=document.querySelector('#book-list ul');
list2.addEventListener("click",(e)=>{
  if(e.target.className=='delete'){
    const li=e.target.parentNode
    
    // or write list2.removechilde(li)

    list2.removeChild(li)
  }
})

// we did that list2 becaouse we want every list added and have class for delete can be deleted and take the parent event lister that what we call event bubling for parent to chiold



// we are going to interact with form

// let add books

// add event lister to button on form  because form has deoult behavious of refresh the page



const addForm=document.querySelector('#add-book')
addForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const values=addForm.querySelector('input[type="text"]').value;

    console.log(values)
})


// creating element and append to the dom


const adding=document.querySelector('#add-book')
adding.addEventListener("submit",(e)=>{
    e.preventDefault();
    const values=adding.querySelector('input[type="text"]').value;
const li=document.createElement('li');
const bookname=document.createElement('span');
const deletebtn=document.createElement('span');
// add content to the spans

deletebtn.textContent="Delete";
bookname.textContent=values
// let append to the dom 

li.appendChild(bookname);
li.appendChild(deletebtn);
list2.appendChild(li)


// changing styles and classes using javascript
bookname.classList.add('name');
deletebtn.classList.add('delete')
})


// changing attribute using javascript

const booking=document.querySelector('li:first-child .name')
console.log(booking)
booking.getAttribute('class')


 booking.removeAttribute('class')



  booking.setAttribute('class','name')

  console.log(booking.hasAttribute('class'))


  // the dom check box event   by using change event


  // let start by hide books
let lis = document.querySelectorAll('#book-list li');
const hidebooks = document.querySelector("#hide");

hidebooks.addEventListener("change", (e) => {
  if (hidebooks.checked) {
    
    lis.forEach(item => {
      item.style.display = "none";
    });
  } else {
   
    lis.forEach(item => {
      item.style.display = "block";
    });
  }
});


// search filter using javascript

let sea = document.querySelector('.sea');
let lisa = document.querySelectorAll('#book-list li');

sea.addEventListener('input', () => {
  let result = sea.value;

  lisa.forEach((book) => {
    let bookTitle = book.textContent.toLowerCase();
    if (bookTitle.includes(result.toLowerCase())) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});








