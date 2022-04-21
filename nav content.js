let a=document.getElementById("nav1");
let an=0;
let bn=0;
let cn=0;
let dn=0;
a.addEventListener("click",function xyz()
{
    if(bn==0&&dn==0&&cn==0){
    let a1=document.getElementById("para1");
    if(an==0)
    {
    a1.style.display="block";
    an=1;
    }
    else
    {
        a1.style.display="none";
        an=0;
    }
}
});
let b=document.getElementById("nav2");
b.addEventListener("click",function xyz()
{
    if(an==0 && cn==0&&dn==0){
    let b1=document.getElementById("para2");
    if(bn==0)
    {
    b1.style.display="block";
    bn=1;
    }
    else
    {
        b1.style.display="none";
        bn=0;
    }
}

});
let c=document.getElementById("nav3");

c.addEventListener("click",function xyz()
{
    if(an==0 && bn==0&&dn==0){
    let c1=document.getElementById("para3");
    if(cn==0)
    {
    c1.style.display="block";
    cn=1;
    }
    else
    {
        c1.style.display="none";
        cn=0;
    }
}

});
let d=document.getElementById("nav4");

d.addEventListener("click",function xyz()
{
    if(an==0 && bn==0&&cn==0){
    let d1=document.getElementById("para4");
    if(dn==0)
    {
    d1.style.display="block";
    dn=1;
    }
    else
    {
        d1.style.display="none";
        dn=0;
    }
}

});