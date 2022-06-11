
document.getElementById("Nucleotide").onkeyup=function(){
    var input=this.value;
    if(/[ B, D, E, F, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y, Z,b, d, e, f, h, i, j, k, l, m, n, o, p, q, r, s, u, v, w, x, y, z,0-9,!,@,#,$,%,^,&,*,),(,+,=,.,_,-,{,},",']/.test(input)){
    alert("We will remove Character other than A,T,G,C");
    this.value = input.split(/[ B, D, E, F, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y, Z,b, d, e, f, h, i, j, k, l, m, n, o, p, q, r, s, u, v, w, x, y, z,0-9,!,@,#,$,%,^,&,*,),(,+,=,.,_,-,{,},",']/).join("");
    }
    return;
}  
function C()
{
    
    var N = document.getElementById('Nucleotide').value;
    var NN = N.toUpperCase();
    let a = 0;
    let t = 0;
    let g = 0;
    let c = 0;

    for(let i = 0;i<NN.length;i++)
    {
        let o = NN[i].charAt(0);
        if(o == "A"){
            a += 1;
        }
        else if(o == "T")
        {
            t += 1;
        }
        else if(o == "G")
        {
            g += 1;
        }
        else if(o == "C")
        {
            c += 1;
        }
    }
    let gc = (g+c)/(a+t+c+g) * 100;
    let gcc = gc.toFixed(2);
    let total = a+ c+ g+ t;
    document.getElementById('Tot').innerHTML = total;
    document.getElementById('AA').innerHTML = a;
    document.getElementById('TT').innerHTML = t;
    document.getElementById('GG').innerHTML = g;
    document.getElementById('CC').innerHTML = c;
    document.getElementById('GC').innerHTML = gcc;
    
    
}

function load(){
    var preload = document.getElementById('loading');
    preload.style.display = none;
}