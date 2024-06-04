let arr = [ 2, 6, 7,-6, 9, 0,-2, 4]
let k=3
let minSum=Infinity
let curSum=0

for(let i=0; i<k; i++){
    curSum+=arr[i]
}

minSum=curSum

for(let i=k; i<arr.length; i++){
    curSum=curSum-arr[i-k]+arr[i]
    if(curSum<minSum){
        minSum=curSum
    }
}
console.log(minSum)