// Q1 ... Given two sets of elements, find the sum of all distinct elements from the set. In other words,
//  find the sum of all elements which are present in either of the given set.

// SOLUTION 1
function distinctSum(set1, set2) {
  var sum = 0;
  var distinctElements = [];
  for (var i = 0; i < set1.length; i++) {
    if (set2.includes(set1[i]) == false) {
      sum += set1[i];
      distinctElements.push(set1[i]);
    }
  }
  for (var j = 0; j < set2.length; j++) {
    if (set1.includes(set2[j]) == false) {
      sum += set2[j];
      distinctElements.push(set2[j]);
    }
  }
  distinctElements = distinctElements.toString();
  return `${sum} (${distinctElements})`;
}
// console.log(distinctSum([3, 1, 7, 9], [2, 4, 1, 9, 3]));

// SOLUTION 2
function distinctSum2(set1, set2) {
  var arr = set1.concat(set2);
  var count = {};
  var distinct = [];
  var sum = 0;
  arr.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  for (var key in count) {
    if (count[key] == 1) {
      sum += parseInt(key);
      distinct.push(key);
    }
  }
  return `${sum} (${distinct.toString()})`;
}
// console.log(distinctSum([3, 1, 7, 9], [2, 4, 1, 9, 3]));

// Q2 ... Given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets.
// The elements in each set are unique or there are no duplicates within a set.

// SOLUTION 1
function overlappingSum(set1, set2) {
  var sum = 0;
  var overlappingElements = [];
  for (var i = 0; i < set1.length; i++) {
    if (set2.includes(set1[i])) {
      sum += set1[i];
      overlappingElements.push(set1[i]);
    }
  }
  for (var i = 0; i < set2.length; i++) {
    if (set1.includes(set2[i])) {
      sum += set2[i];
      overlappingElements.push(set2[i]);
    }
  }
  return `Sum of overlapping elements: ${sum}`;
}

// console.log(overlappingSum([12, 13, 6, 10], [13, 10, 16, 15]));

// SOLUTION 2
function overlappingSum2(set1, set2) {
  var arr = set1.concat(set2);
  var count = {};
  var overlap = [];
  var sum = 0;
  arr.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  for (var key in count) {
    if (count[key] > 1) {
      sum += parseInt(key) * count[key];
      overlap.push(key);
    }
  }
  return `Sum of overlapping elements: ${sum}`;
}
// console.log(overlappingSum2([12, 13, 6, 10], [13, 10, 16, 15]));