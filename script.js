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
function getValues(){
    //const name = document.querySelector('.config-panel-name_input').value;
    const material = document.querySelector('input[name="material"]:checked').value;
    console.log(material);
    const pattern = document.querySelector('input[name="pattern"]:checked').value;
    console.log(pattern);    
    const width = document.querySelector('input[name="width"]:checked').value;
    console.log(width);
    const length = document.querySelector('input[name="length"]:checked').value;
    console.log(length);

    const construction = document.querySelector('input[name="construction"]:checked').value;
    console.log(construction);

    const tipping = document.querySelector('input[name="tipping"]:checked').value;
    console.log(tipping);

 

    
    //const configuredTie = new Tie(name,material,pattern, width,length,construction,tipping);
    //alert($('input[type="radio"]:checked').val());
   // console.log(configuredTie);
    
   
}





// const currentTie = {}







//const configuredTie = [name,materials,pattern,width,length,construction,tipping]

console.log(name);

//document.querySelector(config-panel-name_input);
