
// variables*/

var carName= "ford truck";

// objects */
//properties*/
var truck={
id: 01,
name: "Ranger",
doors: 4,
color: "red",
//method*/

carMove: function(){
    //move*/
}
}

var btn = document.getElementById("demo");
btn.removeEventListener("click", function () {
    console.log("button click");
})

function myFunction(){
    console.log('hello')
}

var btn= document.getElementsbyId('secondBtn');
btn.addEventListener('click', function(){
    document.getElementById('demo').innerHTML='Hello World'
})

