var arr=[2,6,7,9,3,8,0,6,7,8,7,4,3,5,3,2]
var n;
var count=0
n= +prompt("Enter which number you want check: ")
for(i=0;i<arr.length;i++){
    if(arr[i]==n){
        count++;
    }
}
console.log(n," is repeated ",count, " times")