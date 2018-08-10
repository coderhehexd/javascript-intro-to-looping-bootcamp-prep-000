function forLoop(arr){
  for(let i = 0 ; i < 25; i++){
    if(i === 1){
      arr.push('I am 1 strange loop')
    }else{
      arr.push(`I am ${i} strange loops`)
    }
  }
}

function whileLoop(n){
  while(n>-1){
    console.log(n)
  }
  return 'done'
}

function doWhile(arr){
  
}