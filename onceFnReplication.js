function add(a, b) {
return a + b;
}

var once = function(add) {
    var result;
    var executed = false;
    return function(a,b) {
        if (!executed) {
            executed = true;
            result = add(a,b);
        }
      return result;
    };
}

var onceAdd = once(add);

console.log(onceAdd(2,2));
console.log(onceAdd(2,2));
console.log(onceAdd(5,2));