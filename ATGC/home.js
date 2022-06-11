document.getElementById("Nucleotide").onkeyup=function(){
    var input=this.value;
    if(/[ B, D, E, F, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y, Z,b, d, e, f, h, i, j, k, l, m, n, o, p, q, r, s, t, v, w, x, y, z,0-9,!,@,#,$,%,^,&,*,),(,+,=,.,_,-,{,},",']/.test(input)){
    alert("We will remove Character other than A,T,G,C");
    this.value = input.split(/[ B, D, E, F, H, I, J, K, L, M, N, O, P, Q, R, S, U, V, W, X, Y, Z,b, d, e, f, h, i, j, k, l, m, n, o, p, q, r, s, t, v, w, x, y, z,0-9,!,@,#,$,%,^,&,*,),(,+,=,.,_,-,{,},",']/).join("");
    }
    return;
}  
document.getElementById("Rna").onkeyup=function(){
    var input=this.value;
    if(/[ B, D, E, F, H, I, J, K, L, M, N, O, P, Q, R, S, T, V, W, X, Y, Z,b, d, e, f, h, i, j, k, l, m, n, o, p, q, r, s, t, v, w, x, y, z,0-9,!,@,#,$,%,^,&,*,),(,+,=,.,_,-,{,},",']/.test(input)){
    alert("We will remove Character other than A,U,G,C");
    this.value = input.split(/[ B, D, E, F, H, I, J, K, L, M, N, O, P, Q, R, S, T, V, W, X, Y, Z,b, d, e, f, h, i, j, k, l, m, n, o, p, q, r, s, t, v, w, x, y, z,0-9,!,@,#,$,%,^,&,*,),(,+,=,.,_,-,{,},",']/).join("");
    }
    return;
}  

function Con()
{
    var DNA = document.getElementById('Nucleotide').value;
    NN = DNA.toUpperCase();
    NN = NN.replace(/(\r\n|\n|\r)/gm,"");
    let rna = "";
    for(let i= 0;i<NN.length;i++)
    {
      if(NN[i] == "T")
      {
          rna += "U";
      }  
      else{
          rna += NN[i];
      } 

    }
    Reset1();
    document.getElementById ("Rna").value= rna;
    
}

function RevD(){
    console.log("DNA");
        
        var revd = document.getElementById('Rna').value;
        NN = revd.toUpperCase();
       let rd = "";
       for(let i=0;i<NN.length;i++)
       {
        if(NN[i]=='U')
        {
            rd += "T";
        }
        else{
            rd += NN[i];
        }
        }
        Reset();
        document.getElementById('Nucleotide').value = rd;
        
     
}

function R(){
    var rna = document.getElementById('Rna').value;
    NN = rna.toUpperCase();
    NN = NN.replace(/(\r\n|\n|\r)/gm,"");
    let rr = "";
    for(let i= 0;i<NN.length;i++)
    {
      if(NN[i] == "U")
      {
          rr += "T";
      }  
      else{
          rr += NN[i];
      } 
    }
    let r = "";
    let table = {
        'ATA':'I', 'ATC':'I', 'ATT':'I', 'ATG':'M',
        'ACA':'T', 'ACC':'T', 'ACG':'T', 'ACT':'T',
        'AAC':'N', 'AAT':'N', 'AAA':'K', 'AAG':'K',
        'AGC':'S', 'AGT':'S', 'AGA':'R', 'AGG':'R',                
        'CTA':'L', 'CTC':'L', 'CTG':'L', 'CTT':'L',
        'CCA':'P', 'CCC':'P', 'CCG':'P', 'CCT':'P',
        'CAC':'H', 'CAT':'H', 'CAA':'Q', 'CAG':'Q',
        'CGA':'R', 'CGC':'R', 'CGG':'R', 'CGT':'R',
        'GTA':'V', 'GTC':'V', 'GTG':'V', 'GTT':'V',
        'GCA':'A', 'GCC':'A', 'GCG':'A', 'GCT':'A',
        'GAC':'D', 'GAT':'D', 'GAA':'E', 'GAG':'E',
        'GGA':'G', 'GGC':'G', 'GGG':'G', 'GGT':'G',
        'TCA':'S', 'TCC':'S', 'TCG':'S', 'TCT':'S',
        'TTC':'F', 'TTT':'F', 'TTA':'L', 'TTG':'L',
        'TAC':'Y', 'TAT':'Y', 'TAA':'_', 'TAG':'_',
        'TGC':'C', 'TGT':'C', 'TGA':'_', 'TGG':'W',
    }
    protein = "";
    
    for(let i = 0; i<rr.length;i= i+3)
    {
        r = rr.substr(i,3)
        if(rr.length -i == 1)
        {
            break
        }
        else if(rr.length -i == 2)
        {
            break
        }
        protein+=  table[r] 
    }
    document.getElementById('trna').innerHTML = protein;
}


function Reset()
{
    document.getElementById('Nucleotide').value = "";
}
function Reset1()
{
    document.getElementById('Rna').value = "";
}

function Reset2()
{
    document.getElementById('trna').value = "";
}