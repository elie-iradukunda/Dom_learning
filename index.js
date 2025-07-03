/*
javascript dom full course

1. what is dom


2. what is nodes and types of nodes

3. selecting element using dom methods 
getElementbyId()
getElementByName()
getElementByTagname()
GetElementByclassName
QuerySelectors()
 QueryselectorAll()


 4. DOM TRAVERSING

 selecting parent element
 slecting child element
 selecting sibring elements




 5. Manipulating html element

 creatingElement()
 appendChild()
 textContent()
 innerHtml()
 after()
 append()
 prepend()
 insertAdjacentHTML()
 replaceChild()
 removeChild()
 clone node()
 insertBefore()


 6. Attribute methods

 getAttribute()
 SetAttribute()
 HasAttribute(
 removeAttribute()


 7. manipulating elements styles

 style property
 css text
 getComputedstyle()
 className property
 classlistProperty

 8. javascript events

 what is event
 event bubbling and  event capturing
 event handler in html attributes
 dom level 0 event handler
 addEventListerner()
 removeEventListener()
 event objects
 different types of event







 Letstart DOM IS represent an html document as tree of
 nodes  

 . element,textnode,document node,comment node


 node relation ship : any node has relationship to other nodes in the 
 dom treee and it is some as described in the traditional tree

 . sibring  are dose nodes which share the same imediately parent 
 those nodes can call each other there sibring



 . getElementbYname return list of nodes that share that name(nodelist)
 .getElementbyid return the first match of element that has that id
 . get element by tag name  accept the tag name and return live htlm collection of elements
. getelement by classname return an array like of object of the child element with a specified class name
 this means it return html collection of element that has that class specified

when we want to make changes for one element we use Array.from to make foraech loop

.  querry selector methods allow you to select the first element that matches one or more css selectors
 .query selectorall it display all nodelist that have that css selectors
 . you can use html tag to select 




 .traversing element

 to get the parent nodes of specified node in the dom tree we 
 can use the parentnodes property()
   getting child element we use 


   parent.firstchild / firstElement child
   parent. lastchild/ lastelement child

   parent.childnodes / here we get nodelist of parents element


   . select next sibring and previous sibring 

   sibrings are those element that share the same parent

   then we use  element.nextsibring/ .previous sibring



   . manipulating the html element
   * first is create element this acccespt an html tag name and returns a new node with element tag

   document.createElement('div')// here we creted the new division element in document

   div.innerHtml="</p>"

   here we inserted some text inside created div

   document .body.appendchild(div)// here we added new created div in our body web brwuser
 div.id="title"// here we added id to our new created div element

 . appendChild() // yhis methods help to add a node to the end of the list of child nodes of specified parent node


 . appendchild() // also can be used to move an existing child node to the new position with in the document

 . textContent // to get text content of nodes and its descendant you can use textContent Property.
  it will ignore the html tag and display only text
. but using innerText can also display the same as text content but when we use css it will node display the content
this means inner text will return only visible text but textcontent will return all visible and none visible text in document

this we see it in console .log()

when we try to use .textcontent="some text "// this will remove the all previous content and insert new one


. innerHTML  IS used to add html codes on webpage

innerHTML="<H1/>" // This H1 will be added to document body  but replace the previous things


.after methods() // this methods help to insert one more nodes after the element
 element name .after(node)
 you can create new element then add it to the after other elemnt you want


 . append()  this methods works like appendchild but it will add more element 

 . parentelement.append(element 1, 2,3,4)

 // this means append will accept multiple node and accept string also

 . prepend() this methods it wiil add new nodes as first child of parent node

 
 . insert adjucent html (positionname,element)
 this methods will add element accoeding to the position you want example
 before bigin and after bigin before bidin will add element before the parent element but
 after bigin will add new node to the infront of parent this means will be its first child element
 

 . also there is before end and after end 

 this also add element before end of division or afterwhole division  / parent element

  . reeplacechild()  this is used to replace child elemet with the new one

  parentnode.replaceChild( new child, oldchild);

  . clonenode() is used to clone element/ copy

  example 
  let newnode=div.clonenode()// this new node will take coppy of div but not all inside elements

  but when we write = div.clonenode(true) // this true will allow new node to take all coppy of every tghing inside div or parent

  . removeChild() // this help to remove childnode element from parent

  div.removechild(div.lastchildelementchild)/ this will remove last child element of that specified div or parent


  we use insertbefore() to insert new node before an existing node as child node of parent node

  // parentnode.insertbefore(newnode,existingnode)



  . attribute methods

  <input type="text", id,// those are attributes

  we write input.attribute  in console i will see all attributes in my input

  . getattribute()// here we get attribute name in console// example class,href// type, id, etc

  we will see the attribute value of that attribute name ww written in console

  setAttribute()// here we set attribute in element

   example  input.setAttribute("attribute name","value");

   name is name of attribute, value is values of that attribute


   . hasAttribute()// this will check if attribute is available to specified element it will return true or false

   input.hasAttribute('class) // false because it not has it

    . removeAttribute('name of attribute name)//

    . manipulating style of element we use style methods

    example  input.style.backgroundaColor="red";

    here we use to add style to input element


    when you want to write many css text we use
     example document.style.csstext+="widith:200px";


     using window.getComputedSTYLE() we can see all css aplied to element


     . calssname in javascript will return all list of class name to that element

     . to change the class name you write element.classname="new name you want"

     . but when you write element.classname+="new " that new will be appended to old one not remove it totally
. classlist ()
 will return the html collection of css classses 

 console.log(div.classlist)// will return all classes as html collection 

 we can use classlist to add or remove class
. using div.classlist.add("new class, second,third ")// you can add multiple class name you want
. using div.classlist.remove("class name you want to remove")
.classlist.replace("old class","new replaceble class name");

. classlist.contain ("classname you want to checck")
// this will return true if that class includes or false if not
  . classlist.togle("")// this togle means if the specified class is includes it will remove it directly,

  example

  document.classlist.togle("class1") this will check if class1 is ther if not it will add it and if is allready there it will remove it 



  . javascript event()

   events are those all things happened to the document example clicking scrolling , typing, submitting forms etcc

   Two events models

   event bubling and event captureing

. event bubbling: here events starts at the most specific elements and flows towards least specific element

. event captureing is oposite this means it start with least spacific element and flows toward the most one mease it start form child to parent

. event handlers is piece of codes that will be exeecuted when the events occurs

. is also known as event listeterns
. three way to assign event listerners

1.  HTML event handler attributes

example <button type""button" onclick="function()"

// this what we call html event handdlers

we will write that function in js to be executed as we click on that button 

 . when the events occurs the wen browsers passed an event object to the event handler

 example when we write console.log(event); this will output event object to that button

 then console.log(event.type)// type of event
 consolo.log(event.target)// targeted element
. this keyward inside the event handler refers to the target element

example  console.log(this)// output is target element as is button element for on click event we use above

 addeventlister or remove event lister 

 one will add it other will remove it


 button.addEventListren (' event',function to be executed after that event handled)
 when we make click event ;

 addeventlisterber('click',(event))

 we can console.log( event.type)// here we can see the target element of that event


 we can use btn.removeEventLIsterner ('click',(function))


 type of event

 1. mousemove: event fires repeatedly when you move the mouse cursor arround element

 2. mouse doun:when you press the mouse button on the element
 3. mouse up:  when you release the mouse button on element 
4. mouse over: when the mouse cursor move from outside to inside the boundaries of the element
5. mouseout;  when the cursor is over an element and then move to anather element


6. keydoun event: event fires when you press a key on the keyboard & 
fires repeatedely while you  are holding down the key
 
7. keyup : event fires when you release a xkey on the keyboard

8. keypress; events fires when you press a character on keyboard liked a,,b,c it fires repetedely while you hold doun the key 
on the key board
9. scroll; event fires when you scroll a document or an element the scroll event fire
 */