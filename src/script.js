setInterval(cifra,250);
var array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
function cifra(){
    var plainTxt = document.getElementById("txt").value;
    var key = document.getElementById("key").value;
    if(key.length == 36){
       
       }
    var cipherTxt = "";
    plainTxt=plainTxt.toLowerCase();
    plainTxt = plainTxt.replaceAll(" ","");
    for(var i =0;i<plainTxt.length;i++){
        for(var j=0;j<array.length;j++){
            if(plainTxt.charAt(i) == array[j]){
                cipherTxt+= key.charAt(j);
                break;
            }
        }
    }
    document.getElementById("out").innerHTML=cipherTxt;
}
function generateKey(){
    var key = "";
    var rnd = Math.floor(Math.random() * 36);
        while(key.length<36){
            console.log(key.length);
            rnd = Math.floor(Math.random() * 36);
            if(key.indexOf(array[rnd]) == -1){
                key += array[rnd];
            }
        }
    document.getElementById('key').value="";
    document.getElementById('key').value=key;
}