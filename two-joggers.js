/* Description
Bob and Charles are meeting for their weekly jogging tour.
They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length.
Since they know each other for a long time already, they both run at the exact same speed.
Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, 
finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:
  The length of Bob's lap (larger than 0)
  The length of Charles' lap (larger than 0)
  The function should return an array containing exactly two numbers:

The first number is the number of laps that Bob has to run
The second number is the number of laps that Charles has to run
*/

var nbrOfLaps = function (x, y) {
  var bob = {
      miles: x,
      laps: 1
    }
  var charles = {
      miles: y,
      laps: 1
    }
     
  for(var i = 0; bob.miles != charles.miles; i++) {
      if(bob.miles < charles.miles) {
        bob.miles+=x
        bob.laps++
      } else {
        charles.miles+=y
        charles.laps++
      }
  }  
  return [bob.laps, charles.laps]
}
