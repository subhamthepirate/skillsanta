function evenoddprime()
{   var i,j,c;
    var n=document.getElementById("n").value;
    for(i=0;i<=n;i++)
    {   c=0;
        var a=i%2;
        for(j=i;j>=0;j--)
        {
            if(i%j==0)
            c++;
        }
        if(a==0 && c==2)
        document.write("\""+i+' is even and prime\"');
        
        else if(a==0 && c!=2)
        document.write("\""+i+' is even\"');
     
        else if(a!=0 && c==2)
        document.write("\""+i+' is odd and prime\"');
        
        else
        document.write("\""+i+' is odd\"');
        
        document.write("<br>");
    }
}