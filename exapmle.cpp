#include<stdio.h>
#include<bits/stdc++.h>
using namespace std;
void  vadu()
{
    cout<<"vaddu";
}
int sum(int a,int b)
{
    return a+b;
}
int main()
 {
//     int a;
//     a=15;
//     char c ='a';
    vadu();
    cout<<sum(2,5);
    int arr[] = {1,5,4,5,6,7};
    for(int i =0;i<6;i++)
    {
    	cout<<arr[i]<<" ";
	}
    arr[1] = 6;
    for(int i =0;i<6;i++)
    {
    	cout<<arr[i]<<" ";
	}
}
