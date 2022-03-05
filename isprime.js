let num=100000000000007;

if(num==2||num==3||num==5||num==7)
{
    console.log("prime ");
}
else if(num%2==0||num%3==0||num%5==0||num%7==0)
{
    console.log("not prime");
}
else
{
    let flag  =1;
    for(let i=11;i*i<=num;i++)
    {
        if(num%i==0)
        {
            console.log("not prime");
            flag=0;
            break;
        }
    }
    if(flag==1)
    {
        console.log(" prime");
    }
}