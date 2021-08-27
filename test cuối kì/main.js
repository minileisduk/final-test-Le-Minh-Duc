// A
// Bài 1
// var inputArray = ['BÌNH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
  
//   var lgth = 0;
//   var longest;
  
//   for (var i = 0; i < inputArray.length; i++) {
//     if (inputArray[i].length > lgth) {
//       var lgth = inputArray[i].length;
//       longest = inputArray[i];
//     }
//   }
  
//   console.log(longest);
 
//Bài 2
// var weight = [60, 40, 55, 75, 64]
// let i=0
 


  //B
  const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
const hexBtn = document.querySelector('.hexBtn'); 
const bodyBcg = document.querySelector('body'); 
const hex = document.querySelector('.hex'); 

hexBtn.addEventListener('click', getHex); 



function getHex() {
    let hexCol = '#'; 
    for(let i = 0; i < 6; i++) { 
        let random = Math.floor(Math.random()*hexNumbers.length); 
        hexCol += hexNumbers[random]; 
    }
    bodyBcg.style.backgroundColor = hexCol; 
    hex.innerHTML = hexCol; 
}
