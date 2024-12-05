function solve(a,b,c)
{
let d=Math.sqrt(b^2-4*a*c);
let root1=(-b+d)/2*a;
let root2=(-b-d)/2*a;
return root1;
}
console.log(solve(1,2,4));

