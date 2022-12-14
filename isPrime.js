function isPrime(num){
  let count = 0;
  for(let i = 2; i<=num; i++){
    if(num%i==0){
      count++;
    }
  }
  if(count ==3){
    return true;
  }else{
    return false;
  }
}


let result = isPrime(2);


if(result==true){
  console.log("Prime number");
}else{
  console.log("Not prime number");
}