/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let length = preferences.length; // number of elements in the array
  let count = 0;  //assign counter to 0
  for (let i = 0; i<length; i++) { //we start a cycle by the number of elements in the array
	//We make three steps to check. The number of cycles is three times less than the number of participants. Every step we check for obsession.
      let nextone = preferences[i] - 1;
      if (nextone == i) continue;
      let nexttwo = preferences[nextone] - 1;
      if (nextone == nexttwo) continue;
      let nextthree = preferences[nexttwo] - 1;
      if (nextthree == nexttwo) continue;
      if (nextthree == i) {
        count++; //increment the counter
      }
   }
   return count / 3; 
};
