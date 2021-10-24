checkIfStringHasOnlyDigits("123ThisPointer.com")


function checkIfStringHasOnlyDigits(_string)
{
    if(_string.match(/^[0-9]+$/) != null)
    {
        console.log("String contains only numbers")
    }
    else
    {
        console.log("String does not contain only numbers") 
    }
}

console.log("Q10 END =====================")



