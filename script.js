//create values x
//get values
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
    const name = document.querySelector('.config-panel-name_input').value;
    const material= document.querySelector('#material').value;
    const pattern= document.querySelector('#pattern').value;
    const width = document.querySelector('#width').value;
    const length = document.querySelector('#length').value;
    const construction = document.querySelector('#construction').value;
    const tipping = document.querySelector('#tipping').value;
    const configuredTie = new Tie(name,material,pattern, width,length,construction,tipping);
    console.log(configuredTie);
    return configuredTie
}





const currentTie = {}







//const configuredTie = [name,materials,pattern,width,length,construction,tipping]

console.log(name);

//document.querySelector(config-panel-name_input);
