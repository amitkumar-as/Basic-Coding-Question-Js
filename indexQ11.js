function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(removeDuplicateCharacters('baraban'));
  
  
  
  console.log("Q11 END =====================")
  