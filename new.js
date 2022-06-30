
function seq()
{
    //Remove existing table
    if(document.getElementById("Table")){
        document.getElementById('Table').remove();
    } 

    
var table = document.createElement('table');//Create table element
table.id = 'Table';
var seq1 = document.getElementById('seq1').value;
var s1 = seq1.replace(/ +/g, ''); //Seq 1
var seq2 = document.getElementById('seq2').value; 
var s2 = seq2.replace(/ +/g, '');
var gap = document.getElementById('gap').value; //Gap
var match = document.getElementById('match').value; //Match
var mis = document.getElementById('mismatch').value; //Mismatch
var M = s1.length; //Length of seq1
var N = s2.length; //Length of seq2

var matrix = new Array(M+1).fill(0).map(() => new Array(N+1).fill(0)); //Create matrix of 0 for whole 
var matr = new Array(M).fill(0).map(() => new Array(N).fill(0)); //Create matrix of M,N that does mis and match

ma = parseInt(match,10)
na = parseInt(mis,10)
g = parseInt(gap,10)
//Put mismatch and Match by comparing
for(var i = 0;i<M;i++){
    for(var j = 0;j<N;j++){
        if(s1[i] == s2[j]){
            matr[i][j] = ma;
        }
        else
        {
            matr[i][j] = na;
        }
    }
    }
//Fill the Matrix with the Gap values
for(var i = 0;i<=M;i++){
        matrix[i][0] = i*g}
for(var j= 0;j<=N;j++){
        matrix[0][j] = j*g}

//Fill the matrix using diagonal left and Up and put the Max of all
for(var i = 1;i<M+1;i++)
{
    for(var j = 1;j<N+1;j++)
    {
        var diag = matrix[i-1][j-1] + matr[i-1][j-1]
        var left = matrix[i-1][j] + g
        var Up = matrix[i][j-1] + g
        var x = parseInt(diag, 10)
        var y = parseInt(left, 10)
        var z = parseInt(Up, 10)
        matrix[i][j] = Math.max(x,y,z)
        
    }
}


//Display
x = s1.length;
y = s2.length;
//Creating the tbale

var tr1 = document.createElement('tr');//Create an empty row
//create td elements and fill seq2 elements
for (var i = 0; i < y; i++){
    var td1 = document.createElement('td');
    //create two empty td elements
    if(i == 0)
    {
        var td = document.createElement('td');
        td.style.border =  "1px solid #0000FF";
        td.style.width = "50px";
        td.style.height = "50px";
        
        var d = document.createElement('td');
        d.style.border =  "1px solid #0000FF";

        d.style.width = "50px";
        d.style.height = "50px";
        tr1.appendChild(td);
        tr1.appendChild(d);
    }
    var text1 = document.createTextNode(s2[i]);//add seq2 elements
    td1.style.border =  "1px solid #0000FF";
    td1.style.width = "50px";
    td1.style.height = "50px";
    td1.appendChild(text1);//append the text
    tr1.appendChild(td1);//append the td in the row
    table.appendChild(tr1);//append the row into the table
}

//adding seq1 and matrix 
for(var i = 0;i<x+1;i++)
{
    tr = document.createElement('tr');
    for(var j = 0;j<y+1;j++)
    {
        if(j == 0)
        {   
          var td = document.createElement('td');
          if(i == 0)
          {
            te = document.createTextNode("");
            td.style.border =  "1px solid #0000FF";
            td.style.width = "50px";
            td.style.height = "50px";
            td.appendChild(te);
          }
          else{
          var tax = document.createTextNode(s1[i-1]);
          td.appendChild(tax);
          console.log(tax);
          td.style.border =  "1px solid #0000FF";
          td.style.width = "50px";
          td.style.height = "50px";
          }
          tr.appendChild(td);
        }
        var td = document.createElement('td')
        td.style.border =  "1px solid #0000FF";
        td.style.width = "50px";
        td.style.height = "50px";
        var m1 = matrix[i][j].toString();
        var Text = document.createTextNode(m1);
        td.appendChild(Text);
        console.log(m1);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
//Sequence Alignment
var a1 = ""
var a2 = ""

var i = s1.length;
var j = s2.length;
console.log(matrix)
while(i!=0 && j!=0){
    matrix_current = matrix[i][j]
    matrix_diagonal = matrix[i-1][j-1]
    matrix_up = matrix[i][j-1]
    matrix_left = matrix[i-1][j]
    if(i>0 && j>0 && matrix_current == matrix_diagonal + matr[i-1][j-1]){
        a1 = s1[i-1] + a1   
        a2 =  s2[j-1] +a2
        
        table.rows[i+1].cells[j+1].setAttribute('id','test');
        
        table.rows[i+1].cells[j+1].setAttribute('class','diag');
        i -=1 
        j -=1
     }
    else if(i>0 && matrix_current ==  matrix_left + g){
        a1 = s1[i-1] + a1
        a2 = "-" + a2
        
        table.rows[i+1].cells[j+1].setAttribute('id','test');
        
        table.rows[i+1].cells[j+1].setAttribute('class','left');
        i -= 1
    }
    else {
        a1 =    "-" + a1
        a2 =  s2[j-1]  + a2 
        table.rows[i+1].cells[j+1].setAttribute('id','test');
        
        table.rows[i+1].cells[j+1].setAttribute('class','Up');
        j -= 1
    }
}

document.body.appendChild(table);
document.getElementById('output').innerHTML = "Score : " + matrix[M][N];
document.getElementById('a1').innerHTML = a1;
document.getElementById('a2').innerHTML = a2;


table.rows[1].cells[1].setAttribute('id','test');
console.log("R" );
}
