function MySet() {
  this.storage = {};
}

// adds an object to the set
// does not add an object to the set if object is already present
MySet.prototype.add = function (value) {
  this.storage[JSON.stringify(value)] = value;
};

// returns true if the value is contained in the set
MySet.prototype.contains = function (value) {
  for (const key in this.storage) {
    if (key === JSON.stringify(value)) return true;
  }

  return false;
};

// removes value from the set if present
MySet.prototype.remove = function (value) {
  delete this.storage[JSON.stringify(value)];
};
