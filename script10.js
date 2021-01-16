function conversion()
{
    var a=document.getElementById("str").value;
    var ans = a.split('').map(function(c){
        return c === c.toUpperCase()
        ? c.toLowerCase()
        : c.toUpperCase()
      }).join('')
      document.write(ans);
}

