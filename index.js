let a=5
let b=7
let c=6
let sum=(a+b+c)/2
let sum1=sum*(sum-a)*(sum-b)*(sum-c)
let sqr=sum1**(1/2)
console.log("Area of triangle is "+sqr)

var ab=12
var cd=12
var dc=(ab==cd)? (ab+cd)*3:ab+cd
console.log(dc)

function sumfu (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumfu(10, 20));
  console.log(sumfu(10, 10));

  filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());


