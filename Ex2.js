function countSheeps(sheep) {
   result = 0
   for (let i = 0; i < sheep.length; i++) {
        if (sheep[i]) {
            result++
        }
   }
   return result
}

let sheep = [true,  true]
    
console.log(countSheeps(sheep));