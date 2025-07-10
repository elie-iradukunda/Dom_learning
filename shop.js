// we use element.closest(.queryselector)// closest()	Finds the nearest parent that matches a selector
//Why used?	To get the exact product where button was clicked
//Works with	Classes, tags, IDs (.product, div, #id)
// we use onclick="function(this)"// this help to click on direct target


// event propagation is the process of moving an event accross dom nodes 
// it have two pfases , 
// capturing , targrt phase and bubling phase 
// capturing is the process of moving down the event from parent elemment to the target element , from window to target
// target phase is target element that you are taching an event examle buttons clicked
// bubling phase is when event is bubling up from target element to the rooot ir windows 
// event delegation is process when we attach one evenet listerner to parent then afect all childrens or future decendant or chird noodes of it
// important of delegation is that in the future when you add other element which has the some parent will be affected by that event listerner