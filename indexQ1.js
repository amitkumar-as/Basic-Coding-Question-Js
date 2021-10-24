var a = [1, 2, 3, 6, 9, 10],
  count = 100;
var missing = new Array();

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);


console.log("Q1 END =====================")