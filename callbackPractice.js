/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  var first = function(arr, cb) {
    cb(arr[0]);
  }
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  var last = function(arr, cb) {
    cb(arr[arr.length - 1]);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





var multiply = function(a, b, cb) {
  cb(a * b);
}

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 var contains = function(arr, x, cb) {
  cb(arr.indexOf(x) !== -1)
 }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var uniq = function(arr, cb) {
  for(var i = 0; i < arr.length; i++){
    if(arr.lastIndexOf(arr[i]) !== i){
        arr.splice(arr.lastIndexOf(arr[i]), 1)
    }
  }
  cb(arr);
}

var uniq2 = function(arr, cb) {
  var hash = {}
  var newArr = []
  for(var i = 0; i < arr.length; i++) {
    if(!hash[arr[i]]){
      hash[arr[i]] = true;
    } else {
      console.log("do nothing");
    }
  }
  for(var key in hash){
    newArr.push(key)
  }
  cb(newArr)
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq2(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




 var each = function(arr, cb) {
  for(var i = 0; i < arr.length; i++) {
    cb(arr[i], i)
  };
 };

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 var getUserById = function(obj, x, cb) {
  for (var key in obj) {
    if (obj[key].id === x) {
      cb(obj[key]);
    }
  }
 };

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
