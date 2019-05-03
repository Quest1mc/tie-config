// Cleaning up code 


//needs
//radio buttons to provide value of different items 
//challenge : at this stage I am getting undefined when I run onchange to console log my chosen value.



//what is this code supposed to do 
// it is supposed to allow the user to select certain characteristics or attributs that will create a custom tie

//get values is the fuction to get all user inputed values from html
//add values to new object xx
// save array to account
// create tie class xxx
// create instance of tie xxx
// add  & store values to instance of tie

// display new tie

//consider making an object instead




//save each tie as a disticnt object

class Tie {
    constructor(name,material,pattern, width,length,construction,tipping) {
      this.name = name;
      this.material = material;
      this.pattern = pattern;
      this.width = width;
      this.length = length;
      this.construction = construction;
      this.tipping = tipping;
    }
  }
//let favouriteTie = new Tie('favourite','silk','foulard','3.25-inch', '58-inch', 'seven-fold','self-tipped')



// to do write a function that rechecks the page values once submit has been pressed 
// this function creates an object from all the values present in the DOM
//write into the function so that the null does not appear when the value is empty


// below is the problem of cannot read value of null for all below names...think about this 
tempTie = {}
function getValues(){
    var name = document.querySelector('.config-panel-name_input')
    if(name) tempTie.name= name.value;
    var material = document.querySelector('input[name="material"]:checked')
    if(material) tempTie.material= material.value;
    var pattern = document.querySelector('input[name="pattern"]:checked')
    if(pattern) tempTie.pattern= pattern.value;
    var width = document.querySelector('input[name="width"]:checked')
    if(width) tempTie.width= width.value;
    var length = document.querySelector('input[name="length"]:checked')
    if(length) tempTie.length= length.value;
    var construction = document.querySelector('input[name="construction"]:checked')
    if(construction) tempTie.construction= construction.value;
    var tipping = document.querySelector('input[name="tipping"]:checked')
    if(tipping) tempTie.tipping= tipping.value;
    console.log(tempTie);
}
function configuredTie(){
  const configuredTie = new Tie(name,material,pattern, width,length,construction,tipping);
  console.log(configuredTie)
}

//const configuredTie = [name,materials,pattern,width,length,construction,tipping]


//document.querySelector(config-panel-name_input);
