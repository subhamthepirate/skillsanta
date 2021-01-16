function search_word(a,b)
{
    var x = 0, y=0;
   
    for (i=0;i< a.length;i++)
        {
        if(a[i] == b[0])
            {
            for(j=i;j< i+b.length;j++)
               {
                if(a[j]==b[j-i])
                  {
                    y++;
                  }
                if (y==b.length){
                    x++;
                }
            }
            y=0;
        }
    }
    
    return "\'"+b+"\'"+" was found "+x+" times";
}