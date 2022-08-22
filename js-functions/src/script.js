function trial (myName){
  alert ("hello my name is " + myName + ".")
}
//trial("Jenny")

function trippleNumber (x){
  return 3*x
}
 let myNumber = trippleNumber (12)
 //alert (myNumber)
 
 function aboutMe (name, age ,passion){
   //alert("My name is " +name+ ". I am " +age+ " years old.I am a " +passion+ " and i like it." )
 }
aboutMe("Jeniffer","22" ,"Software developer")
/*let cat = {
        name: "bobby",
        eyescolor: "blue",
        age: 4,
    }
    cat.age
   cat.name

nested objects
let fruits = {
    favorite: "oranges",
    least: "pawpaw",
    most: "banana",
    veges: {
        like: "kales",
        unlike: "cabbage",

    },
}*/
//fruits.veges.unlike
let dog = {
  name:"bobby",
  age:5,
  eyeColor:"blue",
  whoof(){
    alert("whoooooof")
  },
}
//dog.whoof()
document.addEventListener("click", myFunction)

function myFunction (){
  alert("Hello there")
}

