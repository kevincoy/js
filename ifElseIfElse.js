var isEven = function(number) {
   if (number %2 === 0) {
       return true;
   } else if (isNaN(number)) {
       return "Input is not a number";
   } else {
       return false;
   }
};