//find duplicates and count duplicates and print them
let arr = [1,2,2,-1,3,4,2]

let count = 0
let maxCountNumber=0

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]==arr[j]){
            count++
            // console.log(arr[i],count)   
            maxCountNumber = arr[j] 
        } 
    }   
}

console.log(maxCountNumber,count)