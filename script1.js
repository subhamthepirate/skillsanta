document.write("1. ");
var a=0;
var b=-1;
var c=4;
document.write("Input: "+a+','+b+','+c);
document.write("<br>");
document.write("Output: Alert Box");
if(a>b && a>c){
    if(b>c){
        alert(a+','+b+','+c);
    }
    else{
        alert(a+','+c+','+b);
    }
}
else if(b>a && b>c){
    if(a>c){
        alert(b+','+a+','+c);
    }
    else{
        alert(b+','+c+','+a);
    }
}
else{
    if(b>a){
        alert(c+','+b+','+a);
    }
    else{
        alert(c+','+a+','+b);
    }
}