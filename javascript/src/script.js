function trial(myName) {
    alert("hello my name is " + myName + ".")
}
//trial("Jenny")

function trippleNumber(x) {
    return 3 * x
}
let myNumber = trippleNumber(12)
    //alert (myNumber)

function aboutMe(name, age, passion) {
    //alert("My name is " +name+ ". I am " +age+ " years old.I am a " +passion+ " and i like it." )
}
aboutMe("Jeniffer", "22", "Software developer")
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
    }
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
    }*/

let pets = [{ name: "meawsalot", age: 2, species: "cat" },
    { name: "purrsalot", age: 3, species: "cat" },
    { name: "barkssalot", age: 4, species: "dog" }

]
pets.push({ name: "puppsalot", age: 1, species: "dog" })
console.log(pets)
let ourPets = pets.map(nameOnly)

function nameOnly() {
    return "hello"
}
console.log(ourPets)
let dog = pets.filter(dogOnly)

function dogOnly(x) {
    return x.species == "dog"
}
console.log(dog)

function onlyBabies(x) {
    return x.age < 3
}
let babyPets = pets.filter(onlyBabies).map(nameOnly)
console.log(babyPets)
    //Scope has to do with variables
let hisName = "keter"

function myAmazing() {
 let hisname ="keter the 2nd"
  if(2+2==4){
    let hisName = "keter jr"
    console.log("in the if statement:", hisName);
  }
    console.log("ïnside the function:", hisName)
}
myAmazing()
console.log("in the global scope:",hisName)
//let uses block scope while var uses function scope

let myExample ="cake"

function varScope(){
  if (1+1==2){
    let myExample ="cheese"
 
  }
  console.log("i like",myExample)
} 
varScope()
//context is about objects
 
let john = {
  firstName:"John",
  lastName:"Doe",
  driveCar(){
    function amFunction(){
      console.log(this)
    }
    amFunction()
    console.log(this.firstName+ " " + this.lastName+ " is driving a car")
  }
}
john.driveCar()

function breathe(){
  console.log(this.firstName+ " " + this.lastName+ " just inhaled and exhaled")
}
breathe.call(john)