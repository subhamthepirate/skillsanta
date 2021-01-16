function fibonacci()
{
    var n=document.getElementById("fibo").value;
    var a=0,b=1,c=0;
    if(n==0)
    document.write("Invalid");
    else{
        if(n==1)
        document.write(a);
        else if(n==2){
            document.write(a+" ");
            document.write(b+" ");
        }
        else{
            document.write(a+" ");
            document.write(b+" ");
            for(var i=2;i<n;i++)
            {
            c=a+b;
            a=b;
            b=c;
            document.write(c+" ");
            }
        }
    }
}