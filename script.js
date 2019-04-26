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


// below is the problem of cannot read value of null for all below names...think about this 
function getValues(){
    //const name = document.querySelector('.config-panel-name_input').value;
    const material = document.querySelector('input[name="material"]:checked').value;
   

   // document.querySelector('#material').value;
    const material2 = document.getElementsByName('material').length;
    // const pattern= document.querySelector('#pattern').value;
    // const width = document.querySelector('#width').value;
    // const length = document.querySelector('#length').value;
    // const construction = document.querySelector('#construction').value;
    // const tipping = document.querySelector('#tipping').value;
    // const configuredTie = new Tie(name,material,pattern, width,length,construction,tipping);
    //alert($('input[type="radio"]:checked').val());
    console.log(material);
    console.log(material2);
   
}





// const currentTie = {}







//const configuredTie = [name,materials,pattern,width,length,construction,tipping]

console.log(name);

//document.querySelector(config-panel-name_input);
