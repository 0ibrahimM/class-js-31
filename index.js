


let marks=[
    [33,23,51,55,65,88,89,99,95,99],
    [87,95,59,55,45,40,60,30,32,44],
    [38,39,35,93,63,53,43,73,78,75],
    [49,76,48,69,54,15,42,94,54,75],
]

console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()

for (i=0; i<=3; i++){
if(i==0){
    console.log("section-A")
}
else if(i==1){
    console.log("section-B")
}
else if(i==2){
    console.log("section-C")
}
else if(i==3){
    console.log("section-D")
}
    for (y=0; y<=9; y++){

        console.log(marks[i][y])
if (marks[i][y] >= 80)
console.log("A+")
else if(marks[i][y] >= 70)
    console.log("A")
else if(marks[i][y]  >= 60)
    console.log("A")
else if(marks[i][y]>= 50)
    console.log("B")
else if(marks[i][y] >= 40)
    console.log("C")
else if(marks[i][y] >= 33)
    console.log("D")
    else{
        console.log("the grade is: F ")
    }

    }
       
};





function hello (){
    let t =233;
    let u =199;
let result= t+u;
console.log(result)
}
hello()

function hi (){
    let w =233;
    let q =199;
let result= w-q;
console.log(result)
}
hi()

function sun (){
    let p =33;
    let k =99;
let result= p*k;
console.log(result)
}
sun()


function why (){
    let m =905;
    let n =5;
let result= m/n;
console.log(result)
}
why()

