// do not use any native array methods
function Queue() {
  this.storage = {};
  this.index = 0;
}

//we think this is the same as PUSH from Stacks.
Queue.prototype.enqueue = function(value) {
  //Check if value is undefined, return
  if (value === undefined) return;

  //Store the value at the key of index in the storage object
  this.storage[this.index] = value;

  //Increment index
  this.index++;
};


//THIS IS THE SAME AS SHIFT FROM OUR ERAY
Queue.prototype.dequeue = function() {
  //account for empty queue.
  if (this.index === 0) return;

  //save our first element
  const result = this.storage[0];

  //move all prior elements up one.
  for (let i = 0; i < this.index - 1; i++) {
    this.storage[i] = this.storage[i + 1];
  }

  //delete first element, decrement index.
  delete this.storage[this.index - 1];
  this.index--;

  return result;
};

// Last In, First Out.
/*
Queues are similar to stacks in that you can’t access
random elements in it.
○ Enqueue: add an item to the queue (push)
○ Dequeue: take an item off the queue (pop)
● With array, enqueue (adding) is constant time and
dequeue (removing) is linear
● With object, enqueue (adding) is constant time and
dequeue (removing) is linear
*/

