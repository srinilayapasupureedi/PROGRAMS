
function swap(a,i,j)
{
    let temp=a[i];
    a[i]=a[j];
    a[j]=temp;
}
function dnf(a)
{
let s=0;
let e=a.length-1;
while(s<=e)
{
    if(a[s]==1)
    {
        swap(a,s,e);
        e--;
    }
    else{
        s++;
    }
}
}
let a=[1,1,0,1,0,1,1,0,0,1];
dnf(a);
console.log(a);