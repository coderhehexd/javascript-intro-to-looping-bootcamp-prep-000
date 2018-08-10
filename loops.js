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
    n-=1
  }
  return 'done'
}
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(arr){
  do{
    arr.pop()
  }while(arr.length > 0 && !incrementVariable())
  
  return arr
}