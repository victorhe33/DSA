// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

//we want to push the value to the end.
Stack.prototype.push = function(value) {
//Check if value is undefined, return
  if (value === undefined) return;
    
  //Store the value at the key of index in the storage object
  this.storage[this.index] = value;
  
  //Increment index
  this.index++;
};


Stack.prototype.pop = function() {
  //if index is 0, return undefined;
  if (this.index === 0) return undefined;

  //initialize a variable to store out element to be popped.
  const cache = this.storage[this.index - 1];

  //delete storage at index.
  delete this.storage[this.index - 1];

  //decrement index prop by 1.  
  this.index--;

  return cache;
};
