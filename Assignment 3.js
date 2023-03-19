var house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: function(){ alert("Beep") }
        }
    }
}
//* PART I
 //*
 
 

// (1) Add a dining table to the living room.



house.areas.livingRoom.items.push('dining table') 
console.log(house['areas']['livingRoom']);


// (2) Add a stove to the kitchen.

house.areas.kitchen.items.push('stove');
console.log(house['areas']['kitchen']);



// (3) Remove the washing machine from bedroomOne.

house.areas.bedroomOne.items.pop();
console.log(house['areas']['bedroomOne']);


// (4) Change the color of the car to blue.

house.garage.car.color = 'blue';
//console.log(house['garage']['car']['color']);     test
console.log(house['garage']);


// (5) Add a another car to the garage with a honk function.

house.garage.AnotherCar = {
    color: 'red',
    wheels: 4,
    honk: function() {
        alert('Honk Honk!');
    }
};


// (6) Make the new car honk.

house.garage.AnotherCar.honk();



// (7) If the house has a garden, console.log the name of the flower.


if (house.garden[0] === true){
    console.log(house['garden'][1]);
    }
    else {
        console.log('there is no garden');
    }


//**
 //* PART II
 //*

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function
//****************************** for loop solution******************************** */
// for (var i = 0; i < house.areas.kitchen.items.length; i++) {
    
//     if (house.areas.kitchen.items[i] === 'broken chair') {
//       house.areas.kitchen.items[i] = 'new chair';
//     }
//   }
//   console.log(house.areas.kitchen.items);


house.areas.kitchen.items[1] = house.areas.kitchen.items[1].replace('broken chair' , 'new chair');
console.log(house.areas.kitchen.items[1]);

//house.areas.kitchen.items[1] = 'new chair'; no function solution !!
//console.log(house.areas.kitchen.items); no function  solution !!

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.


var total = (Object.keys(house.areas).length);
console.log(total);



// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.

//var  valuetotal = (Object.values(house.areas));  !!test!!
//console.log(valuetotal);    !!test!!

// 
//****** ***************** for in + for loop solution**********************************
// var beds = 0;
// for (var room in house.areas) {
//   for (var i = 0; i < house.areas[room].items.length; i++) {
//     if (house.areas[room].items[i] === 'bed') {
//       beds++;
//     }
//   }
// }
// console.log(beds);

//**************** for of solution*******************
// let beds = 0;
// for (let room of Object.values(house.areas)) {
//   for (let item of room.items) {
//     if (item === 'bed') {
//       beds++;
//     }
//   }
// console.log(beds);

//************************ for in solution*********************
 var beds = 0;
  for (var room in house.areas) {
    Object.values(house.areas[room].items).forEach(item => {
     if (item === 'bed') {
        beds++;
     }
    });
  }
  console.log(beds);