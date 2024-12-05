let num=121;
let str=""+num;
let s=0;
let e=s.length-1;
function isPalindrome(str,s,e)
{
   while(s<=e)
   {
   if(str[s]!=str[e])
   {
    return false;
   }
   else{
    s++,e--;
   }
   }
   return true;

}

console.log(isPalindrome(str,s,e));
