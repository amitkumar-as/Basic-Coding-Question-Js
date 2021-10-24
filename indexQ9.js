function reverseString(str) {
    return (str ? reverseString(str.substring(1)) + str.charAt(0) : str);
  }

console.log(reverseString('hello'));

console.log("Q9 END =====================")


