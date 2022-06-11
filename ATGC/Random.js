document.getElementById("GC").onkeyup=function(){
    var input=parseInt(this.value);
    if(input<0){
    alert("GC content should be between 0 - 100");
    this.value = 0;
    }
    else if(input>100)
    { 
        alert("GC content should be between 0 - 100");
        this.value = 100;

    }
    
    return;
}  

function D()
{
    
    var z= document.getElementById('Number').value;
    var x = document.getElementById('GC').value;
    
    if(document.getElementById('DNA').checked == true)
    {
        var char = 'AT';
    }
    else{
        var char = 'AU';
    }
    
    var chara = 'GC';
    const le = char.length;
    let result = "";
    var y = x/100;
    var a = z*y + (Math.random()*1-(-1) + -1);
    for ( let i = 0; i < a; i++ ) {
        result += chara.charAt(Math.floor(Math.random() * le));
    }
    for ( let i = 0; i < z-a; i++ ) {
        result += char.charAt(Math.floor(Math.random() * le));
    }
    shuffle(result);

}
function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    var n = arr.length;              // Length of the array
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       // Get random of [0, n-1]
      
      var temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                // Convert Array to string
    return document.getElementById('Rand').innerHTML = s;                        // Return shuffled string
}
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }