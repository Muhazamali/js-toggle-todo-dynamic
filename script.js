
  var x;
  x=0;
  function fun1(){
 if(x%2==0){
    let id=null;
    document.getElementById("ico").animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(60px)' }
      ], {
        // timing options
        duration: 400,
        iterations: 1,  
      }
      
      )
      id = setInterval(change, 400);
      function change ()
      {
        console.log('change');
      document.getElementById("ico").style="right:5px";
      clearInterval(id);
      document.getElementById("cont").style="background-color:yellow";
    }
    document.getElementById('txt').innerHTML ="ON";
  
  x++;
  console.log(x); 
}
else{
    let id=null;
    console.log("else");
    id = setInterval(change, 0);
    document.getElementById("ico").animate([
        // keyframes
        { transform: 'translateX(60px)' },
        { transform: 'translateX(0px)' }
      ], {
        // timing options
        duration: 400,
        iterations: 1,
        
      });
      
      function change ()
      {
        console.log('change');
      document.getElementById("ico").style="left:1px";
      document.getElementById("cont").style="background-color:gray"; 
        clearInterval(id);
      
    }
    document.getElementById('txt').innerHTML ="OFF  ";
    x++;
  } }
