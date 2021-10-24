String.prototype.count=function(c) { 
    var result = 0, i = 0;
    for(i;i<this.length;i++)if(this[i]==c)result++;
    return result;
  }
  
  
  console.log("strings".count("s"));
  
  console.log("Q13 END =====================")