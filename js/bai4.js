/**
 toan tu chuoi -String operator
 */
var Name =' chien';
Name += 'nguyen';
console.log(Name);

/**
 toan tu so sanh 
boolean
 */
var a = 1;
var b  = 1;

var fullnaem = a >b;
console.log(fullnaem);
/**
 cau lenh dieu kien if - else
 */
var Name1 = undefined;

if(Name1){
    console.log('day la dieu kien dung ');
}else{
    console.log('dieu kien sai');
}
/**
 toan tu logic 
 1. && -and 
 2. || - or
 3. ! - not
 */
var a =1;
var b = 2;
var c =3;
if (!(a > 0 && b > 0)){
    console.log("dieu kien dung!")

} else{
    console.log('dieu kien sai')
};
/**
 kieu du lieu trong javascript
 1. du lieu nguyen thuy - Primitive Data
    - Number 
    - String
    - Boolean
    - undefined
    - null
    - symbol
2. du lieu phuc tap - complex dat 
    - Function
    - object
 */
//number type 
var a = 1;
var b = 2 ;
var c = 1.5;
console.log(typeof a);

//sstring type 
var fullName = ' chien nguyen';
console.log( typeof fullName);
//boolean
var isSuccess = true
console.log(typeof isSuccess);
// Undefiend type
var age; 
console.log(age);
//null
var isNull = null;
console.log(typeof isNull);// nothing
//symbol
var id  = Symbol('id'); // unitque
var id2 = Symbol('id'); // unique
console.log(id == id2);
//Function
 var myFunciton1 = function(){
    alert('hi xin chao cac ban!');
 }
 myFunciton1();
//opject types
var myobJect = {
    Name:' chiennguyen',
    age: 18,
    adress: ' Ha noi'
};
console.log('myobject',myobJect);
// array
var myArray = [
    'javascript',
    'PHP',
    'Ruby',
];
console.log(myArray);

//  Toan tu so sanh p2
/**
 1. ===
 2. !==
 */
var a = 1 ;
var b = '1' ; 
console.log('toan tu so sanh',a !== b);

// !== 
var  a  = 1;
var  b  = 2 ;
var resul  = null|| NaN || undefined|| 'D' ;
console.log('resul', resul);
if (resul){
    console.log('Dieu kien dung ');
}else {
    console.log('dieu kien SAI');
}