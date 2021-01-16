function protect_email(x){
        var slice = x.split("@");
        var first = slice[0];
        avg = first.length / 2;
        first = first.substring(0, (first.length - avg));
        var second = slice[1];
        console.log(first + "...@" + second);
}