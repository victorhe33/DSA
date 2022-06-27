function LinkedList(...values) {
  this.head = null;
  //First Node
  this.tail = null;
  //What is the next node

  //if we have values passed in during creation of linked list. Create a linked list with new node per value.
  //utilize our push method with for each.
  values.forEach(el => this.push(el));
}

function Node(val) {
  this.value = val;
  this.next = null;
  this.back = null;
}

// adds node to end of list
LinkedList.prototype.push = function(value) {
  //Generate a node using the node function with value as parameter
  const node = new Node(value);

  //if head is unassigned aka null
  //we need to assign the first node to head.
  if (this.head === null) {
    this.head = node;
  }
  
  //If there IS a tail, assign tail.next to current node.
  if(this.tail !== null) {
    this.tail.next = node
  }

  //assign curr node back prop to tail node, Assign tail to be assigned to current node
  node.back = this.tail;
  this.tail = node;
};

//check our linked list to see if a value is present
//input - value we are searching for
//output - boolean (is it present)
//start at the head.
//get to the tail somehow.
//if this.head.val equals the target value return true;
//else move on until we hit tail
//if not found return false;
// returns true if value is present in the list
LinkedList.prototype.contains = function(value) {
  //establish the start at the head of the list.
  let node = this.head;
  
  //while loop -> while this.next is not null, this.head reassign it to this.next;
  while (node) {
  //get to the tail somehow, aka a traversal;
  //while traversing, employ some checks
    //if this.head.val equals target value, return true
    if (node.value === value) return true;
    //else we traverse by reassigning the head to the next node;
    node = node.next;
  }

  //return false since we didnt find a value
  return false;
};



// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function(value) {
  //Capture old head
  const node = this.head;

  //Reassign the head to our newly created node
  this.head = new Node(value);
  
  //Make new head node point to old head node
  this.head.next = node;
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {
  //empty linked list. return null.
  if (this.head === null) this.push(value);

  //initalize counter variable to 0.
  let counter = 0;
  
  //initialize variable to equal head.
  let current = this.head;

  //initialilze a new node equal to the value
  const node = new Node(value);

  //while loop to traverse based on counter; counter <= position;
  while(current.next !== null){

    //if counter === position-1
   if(counter === position - 1){

     //Reassign next pointer of new node variable to node.next;
     node.next = current.next;
     
     //current node.next is new node variable
     current.next = node;

     //return
     return;
    }
    
    //cur node = current.node.next
    current = current.next;
    //incremenet counter;
    counter++;
  }
};

//input is a value, no output.
//we want to alter our list to skip over the node with the target value

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {
  
  //check if a linked list is present, ie is the head set equal to null, return;
  if (this.head === null) return;

  //if the head has our target value, reassign head to head.next.
  if (this.head.value === value) {
    this.head = this.head.next
    return;
  }

  //initialize a variable and set value as head.
  let node = this.head;

  //traverse our linked list via while loop. Condition: this.next is not null.
  while (node.next !== null) {
    //if next.value matches our input value. then we alter node.next to point to node.next.next; then return;
    if (node.next.value === value) {
      node.next = node.next.next;
      return;
    }
    //variable is assigned this.next.
    node = node.next;
  }
};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};




/*
`LinkedList Delete(value){
if(head === null) return;
if(head.data === value) {
 head = head.next;
  return;
}

let current = head;

while(current.next !== null){
if(current.next.data === value) {
current = current.next.next
return;
}
current = current.next;
}

}

*/