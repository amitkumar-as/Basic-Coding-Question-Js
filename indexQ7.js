function compare (a, b) {
    y = a.split("").sort();
    z = b.split("").sort();
    for (i=0; i<y.length; i++) {
      if(y.length===z.length) {
        if (y[i]===z[i]){
          console.log(a + " and " + b + " are anagrams!");
          break;
        }
        else {
          console.log(a + " and " + b + " are not anagrams.");
          break;
        }
      }
      else {
        console.log(a + " has a different amount of letters than " + b);
      }
      break;
    }
  }
  
  compare("mary", "arms");
  
  
  console.log("Q7 END =====================")