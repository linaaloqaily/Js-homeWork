console.log("My homeWork \n");

let lengthOfRectangle = 4 ;
let widthOfRectangle = 2 ;
let area = lengthOfRectangle * widthOfRectangle;
console.log("The area of the rectangle is: " + area);

console.log("-------------------------------------- \n");

let celsius = 60;
let cToFahr = celsius * 9 / 5 + 32;
console.log(celsius + "°C is " + cToFahr + "°F");
let fahrenheit = 45;
let fToCel = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + "°F is " + fToCel + "°C");


console.log("-------------------------------------- \n");

let Numbers = [23,54,32,87,47]
let sum=0
for(let i=0 ; i<Numbers.length ; i++){
     sum = sum + Numbers[i];
}
console.log("sum of all numbers = " + sum);

console.log("-------------------------------------- \n");

Numbers0=[16,4,2,0,19,6]
let max
let i = 0;
max = Numbers0[0]
for(i ; i<Numbers0.length ; i++){
    if(Numbers0[i]>max)
    max = Numbers0[i]
}
console.log("Largest element is = " + max);

console.log("-------------------------------------- \n");

let numbers= [1,2,3,4,5,6,7,8,9,10];
let j;
console.log("reverse order array: ");

for(j=numbers.length-1;j>=0;j--){
  console.log(numbers[j]+"");
}

console.log("-------------------------------------- \n");
let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    process.stdout.write('');
  }
  for (let k = 0; k < i; k++) {
    process.stdout.write('* ');
  }
  console.log();
}