function calculate(){
  
    // for operator
    let a = document.getElementById('a').value;
  
    // for first number 
    let b = Number(document.getElementById('b').value);
  
    // for second number 
    let c = Number(document.getElementById('c').value);

    let add = (b + c);
    let sub = (b - c);
    let mul = (b * c);
    let div = (b / c);
        
    if( a == '+' ){
        document.getElementById('result').innerHTML="Result : "+add;
    } 
    if( a == '-' ){
        document.getElementById('result').innerHTML="Result : "+sub;
    } 
    if( a == '*' ){
        document.getElementById('result').innerHTML="Result : "+mul;
    } 
    if( a == '/' ){
        document.getElementById('result').innerHTML="Result : "+div;
    } 
}