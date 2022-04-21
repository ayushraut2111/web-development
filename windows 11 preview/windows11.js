let a=document.getElementById("img1");
let s=0;
a.addEventListener("click",function xyz()
{
    let a11=document.getElementsByClassName("startmenu")[0];
    
    if(s==0)
    {
    a11.style.bottom="55px";
    s=1;
    }
    else
    {
        a11.style.bottom="-615px"
        s=0;
    }
});