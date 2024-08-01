/*let student ={
    name: 'Chinmay Mathur',
    rollNo: 23,
    College: 'SKIT',
    address: '19e/78'
}

console.log(student);
console.log(student.College);
console.log(student.address);



let hello={
    nnn: 'chinu',
    class: 14,
    school:'ski',

}
console.log(hello);
delete student.College;
console.log(student);


let myarr= [1,'skit',null,true,
    {likes: '1 Million'}//object
];
console.log(myarr);


let arr=[2,'skit',78,false];
console.log(arr[2]);


let ar = [3,'jecrc',89];
console.log(ar[1])

*/
let aray =[1,2,3,'pop',null,'KG coding'];

//    console.log(aray);
  //  console.log(aray[0]);
    //console.log(aray[1]);
    //console.log(aray[2]);
   // console.log(aray[3]);
   // console.log(aray[6]);

    for (let i=0 ; i<=5 ; i++){
        console.log(aray[i]);
    }

let food = ['mango','rice', 'grapes','dosa'];
for(let i = 0;i<=4;i++){
    console.log(food[i]);
}

let fruits = ['mango','rice', 'grapes','dosa'];
fruits.forEach(function(num){
    console.log(num);
})

let students = ['shiva','naman','mukesh'];
students.forEach(function(nu,index){
    console.log(nu,index);
    
})

function sum(a,b){
    return a+b ;

}
console.log(sum(4,5));

function Multiply(a,b){
    return a*b;
}
console.log(Multiply(4,5));

let product = {
    company: 'apple',
    itemName:'Cotton striped t-shirt',
    price:45
}; 
let arr1 = [1,2,3,4];
let arr2 = [...arr1];

console.log(arr2);


fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log(data));



