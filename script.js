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
    constructor(tie) {
      this.name = tie.name;
      this.material = tie.material;
      this.pattern = tie.pattern;
      this.width = tie.width;
      this.length = tie.length;
      this.construction = tie.construction;
      this.tipping = tie.tipping;
    }
  }
//let favouriteTie = new Tie('favourite','silk','foulard','3.25-inch', '58-inch', 'seven-fold','self-tipped')



// to do write a function that rechecks the page values once submit has been pressed 
// this function creates an object from all the values present in the DOM
//write into the function so that the null does not appear when the value is empty


tempTie = {}
function getValues(){
  inputName = event.target.name
  inputValue = event.target.value
  tempTie[inputName] = inputValue
    console.log(tempTie);
  }
function submitTie(){
  const configuredTie = new Tie(tempTie);
  console.log(tempTie)
  console.log(configuredTie)
}

