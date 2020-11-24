// Feet to Mile
function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile;
}
var converter= feetToMile(40);
console.log(converter);

// wood calculator
function woodCalculator(chair,table,bed){
    var totalWood=(chair*1)+(table*3)+(bed*5)+ "Feet^3";
    return totalWood;
  }
  var numberOfWood=woodCalculator(4,2,3);
  console.log(numberOfWood);

//   Brick Calculator
function brickCalculator(floor){
    if(floor<=10){
      var totalBricks= floor*15000;
    }
    else if(floor>10 && floor<=20){
      totalBricks= 12000*(floor-10)+150000;
    }
    else{
      totalBricks = 10000*(floor-20)+270000;
    }
    return totalBricks;
}
var numberOfBricks= brickCalculator(36);
console.log(numberOfBricks);

// Tiny Friends
function tinyFriend(friends){
    var small = null;
    for(var i = 0; i<friends.length; i++){
      var friendsName = friends[i];
      if(small==null){
        small = friendsName;
      }
      else if(friendsName.length<small.length){
        small = friendsName;
      }
    }
    return small;
  }
  var fri =['abir', 'maynul', 'rudro'];
  console.log(tinyFriend(fri));