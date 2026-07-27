for (let i = 1; i <= 100; i++) {
    console.log("count:"+i);
}
//even numbers
for (let i= 1; i<= 30; i+= 2) {
    console.log(i);
}
//dectect
let cities=["multan","labore","karachi"];
    console.log(cities[1]);
//odd number
for (let i = 1; i <= 30; i += 3) {
    console.log(i);
 } 
 //table 5  
let number = 5; 
for (let i = 1; i <= 10; i++) {
  console.log(number + " * " + i + " = " + (number * i));
}
//reverse
for(let i=100; i>=1;i--){
    console.log(i);
}

//Array ke elements print 
let names = ["Asim", "Ali", "Ahmed", "Malik"];
for(i=0;i<names.length;i++) {
    console.log(names[i]);
}

//total calculate
let total =0;
for(let i=0; i<=100; i++ ){
    total=total+ i;
}
console.log("sum=", total);

//table 8
let num=8;
for( let i=0; i<=10; i++){
    console.log(num + "*" +i+ "=" +(num*i));
}
//
for( let i=1; i<4; i++){
    for( let j=1; j<=4; j++){
        console.log(i +" " + j)
    }
}
//stars
for(let i=1; i<=6; i++){
    let star="";

    for(let j=1; j<=i;j++){
       star=star+"*";
    }
    console.log(star)
}
 //numbers 
 for(let i=1; i<=10; i++){
    let numbers="";

    for(let j=1; j<=i; j++){
        numbers=numbers+j;
    }
    console.log(numbers)
 }
//grid
let nums = 1;
for (let i = 1; i <= 8; i++) {
    let row = " ";
    for (let j = 1; j <= 8; j++) {
        row = row + nums + "   ";
        nums ++;
    }
    console.log(row);
}
// 50 times
for( let i=1; i<=50; i++){
      console.log("asim")  ;                   
}
//5 ko multiply 5 time
 let j=1;
while(j<=5){
    console.log(j*5);
    j++;
}
//odd number 
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//count numbers
let count = 0;
for (let i = 1; i <= 100; i++) {
    count++;
}
console.log("Total numbers =", count);
//divisible by both 5 to 7
for (let i = 1; i <= 200; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
        console.log(i);
    }
}
//find largest number
let numbers = [45, 12, 89, 23, 67, 100, 34];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest =", largest);

//smallest num
let numbers1=[10,45,78,94,3,2]
let smallest=numbers1[0];
for(let i=1; i< numbers1.length; i++){
    if(numbers[i]< smallest){
      smallest=numbers1[i];
    }
}    
console.log("Smallest =", smallest);