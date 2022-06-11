function Sub()
{
    var F = document.getElementById('Father').value;
    var M = document.getElementById('Mother').value;
    var G1 = document.getElementById('Group1').value;
    var G2 = document.getElementById('Group2').value;
    console.log(F);
    console.log(M);
    if(F == "A" & M == "A")
    {
        document.getElementById('Result').innerHTML = "A";
    }
    if(F == "B" & M == "B")
    {
        document.getElementById('Result').innerHTML = "B";
    }
    if(F == "A" & M == "B" || F == "B" & M == "A")
    {
        document.getElementById('Result').innerHTML = "AB, A , B , O";
    }
    if(F == "AB" & M == "AB")
    {
        document.getElementById('Result').innerHTML = "A , B , AB";
    }
    if(F == "O" & M == "O")
    {
        document.getElementById('Result').innerHTML = "O";
    }
    if(F == "AB" & M == "A" || F == "A" & M == "AB")
    {
        document.getElementById('Result').innerHTML = "AB , A , B";
    }
    
    if(F == "B" & M == "AB" || F == "AB" & M == "B")
    {
        document.getElementById('Result').innerHTML = "AB , B , A";
    }
    
    if(F == "A" & M == "O" || F == "O" & M == "A")
    {
        document.getElementById('Result').innerHTML = "A, O";
    }
    if(F == "O" & M == "B" || F == "B" & M == "O")
    {
        document.getElementById('Result').innerHTML = "B, O";
    }
    if(F == "AB" & M == "O" || F=="O" & M == "AB")
    {
        document.getElementById('Result').innerHTML = "A , B";
    }

    if(G1 == "Rh+" & G2 == "Rh+")
    {
        document.getElementById('Result2').innerHTML = "Rh+";
    }
    
    if(G1 == "Rh-" & G2 == "Rh+" || G1 == "Rh+" & G2 == "Rh-")
    {
        document.getElementById('Result2').innerHTML = "Rh+ ,Rh-";
    }
    if(G1 == "Rh-" & G2 == "Rh-")
    {
        document.getElementById('Result2').innerHTML = "Rh-";
    }
}