// NO:1---
function KilometerToMeter(kilometer) {

     if (kilometer < 0) {
      
   
   
         return "Distance cannot be negative"
     }
     else {
         let meter = kilometer * 1000;
   
   
         return meter;
     }
   }
   console.log(KilometerToMeter(06));
    
//  NO:2---
  function budgetCalculator(watch,phone,laptop){
    
      if(watch<0||phone<0||laptop<0){
    
    
          return "Things cannot negative"
      }
    
      else {
          let totalBudget = (50 * watch) + (100 * phone) + (500 * laptop);
          return totalBudget;
      }
    
    }
    
    console.log(budgetCalculator(4,3,2));
    
// NO:3---
  function hotelCost(day){
  
    let Total;
    let extraDay;  
  
    if(day<=0){
  
        return "Stay for low cost";
    }
  
    else if(day<=10){
           Total=day*100;
           return Total;
  
         }
        else if(day<=20){
         extraDay=day-10;
  
         Total=(10*100)+(extraDay*80);
         return Total;
  
                }
         else{
                extraDay=day-20;
                Total=(10*100)+(10*80)+(extraDay*50);
            return Total;
            }
  
  }
  console.log(hotelCost(5));
 
// NO:4---
  
  NameofFriend=["Al-Amin","Sajeeb","Ashik","Munim"];
  
          function megeFirend(NameOfFriend) {
              let longestIndex = NameOfFriend[0];
  
              if (NameOfFriend.length ===0||Array.isArray(NameOfFriend)===false) {
  
                  return "No Array available";
              }
  
              else {
                  for (let i = 0; i < NameOfFriend.length; i++) {
                      if (NameOfFriend[i].length > longestIndex.length) {
  
                          longestIndex = NameOfFriend[i];
                      }
                  }
                  return longestIndex;
              }
          }
          
  
    console.log(megeFirend(NameofFriend));