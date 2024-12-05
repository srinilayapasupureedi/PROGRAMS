let s="sreenilaya";
let frqmap={};
for(let i=0;i<s.length-1;i++)
{
    if(frqmap[s[i]])
    {
        frqmap[s[i]]++;
    }
    else{
        frqmap[s[i]]=1;
    }

}
console.log(frqmap);