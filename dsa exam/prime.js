//find prime numbers
let arr = [[1,2,3], [4,5,6], [7,8,9],[17,19,23]];



const isPrime = (ele) => {

    for (let i = 2; i < ele; i++) {
        if (ele % i == 0) {
            return false;
        }
    }
    return true;

}

for (let i = 0; i< arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]>1){
        if (isPrime(arr[i][j])) {
            console.log(arr[i][j]);
        }
      }
    }
}