let obj = {};

console.log(obj);

let doreamon ={
    name :"doriyo",
    age:19,
    height:1.5,
    lastName :"Vadapav",
    phoneNo : 6546545246


}

console.log(doreamon);
let captain={
    name : 'steve rogers',
    age : '150',
    friends : ['natasha romanhof','tony stark','hulk','captain carter'],
    address : {
        city : 'queens',
        state : 'los angeles',
    },
    sayhi : function(){
        console.log("CAp says hellluuuuu");

    }
}
console.log(captain);
captain.sayhi();
captain.address.city = " berlin";
captain.friends.push("bucky barns");
captain.result = true;
captain.movies = ['captain america ','Avengers ','age of ultron','civil war','infinity war']
captain.movies.push('endgame');
delete captain.address.city;
console.log(captain);
console.log(captain.name);
console.log(captain['name'])