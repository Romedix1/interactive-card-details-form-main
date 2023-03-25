let nameInput = document.querySelector("#name-input")
let personalDataCard = document.querySelector("#personal-data")
let numberInput = document.querySelector("#number-input")
let numberCard = document.querySelector("#card-number")
let ExpDateMonthInput = document.querySelector("#month-input")
let ExpDateMonthCard = document.querySelector("#month-date")
let ExpDateYearInput = document.querySelector("#year-input")
let ExpDateYearCard = document.querySelector("#year-date")
let cvcInput = document.querySelector("#cvc-input")
let cvcCard = document.querySelector("#cvc")

nameInput.addEventListener('input',()=>{
    let nameInputValue = nameInput.value
    personalDataCard.innerHTML = nameInputValue.toUpperCase()

    if(nameInputValue=="" || nameInputValue==null)
    {
        personalDataCard.innerHTML = "JANE APPLESEED"
    }
})

numberInput.addEventListener('input',()=>{
    
   let numberCardWithoutSpace = numberInput.value.replace(/\s/g, '');
    let numberCardWithSpace = numberInput.value;
if(numberCardWithoutSpace.length>16)
    {
        
        return
    }
    else
    {
    numberCard.innerHTML = numberInput.value
 
    if (numberCardWithSpace.length > 0) {
        if(numberCardWithoutSpace.length % 4==0)
        {
            numberInput.value += " "  
        }
    }
    if(numberInput.value=="" || numberInput.value==null)
    {
        numberCard.innerHTML = "0000 0000 0000 0000"
    }
}
})

ExpDateMonthInput.addEventListener('input',()=>{
    let ExpDateMonthInputValue = ExpDateMonthInput.value
    ExpDateMonthCard.innerHTML = ExpDateMonthInputValue

    if(ExpDateMonthInputValue=="" || ExpDateMonthInputValue==null)
    {
        ExpDateMonthCard.innerHTML = "00"
    }
})

ExpDateYearInput.addEventListener('input',()=>{
    let ExpDateYearInputValue = ExpDateYearInput.value
    ExpDateYearCard.innerHTML = ExpDateYearInputValue

    if(ExpDateYearInputValue=="" || ExpDateYearInputValue==null)
    {
        ExpDateYearCard.innerHTML = "00"
    }
})

cvcInput.addEventListener('input',()=>{
    let cvcInputValue = cvcInput.value
    cvcCard.innerHTML = cvcInputValue

    if(cvcInputValue=="" || cvcInputValue==null)
    {
        cvcCard.innerHTML = "000"
    }
})

let submitButton = document.querySelector("#submit-button")

function createError(errortext, Parent, errorClass)
{
    const newError =  document.createElement("p")

    const errorText = document.createTextNode(errortext)

    newError.classList.add("error")
    newError.classList.add(errorClass)

    newError.appendChild(errorText)

    let InputParent = document.querySelector("#"+Parent+"")
    InputParent.appendChild(newError)

}

function removeError(element)
{
    const Error =  document.querySelector("."+element)

    Error.remove()

}

let errors = new Array;

let validationCorrect = true


submitButton.addEventListener('click',(form)=>{
    form.preventDefault()

    const onlyLetters = /^[A-Za-z\s]*$/;


    let nameInputValue = nameInput.value

    let nameInputWithoutSpace = nameInput.value.replace(/\s/g, '');

    if(nameInputValue.match(onlyLetters) && nameInputWithoutSpace!="")
    {
        if(errors.includes("personalError"))
        {
        removeError("personal-error")

        errors.splice(errors.indexOf('personalError'), 1)

        nameInput.style.border= "0.2rem solid #dddddd"
        validationCorrect=true
        }
    }
    else
    {
        if(errors.includes("personalError")==false)
        {
        validationCorrect = false

        createError("Incorrect personal data", "name-error", "personal-error")

        errors.push('personalError')

        nameInput.style.border= "0.2rem solid #b57977"
        }


    }


    // number field validation

    let onlyNumbers = /^[0-9\s]*$/;

    let numberCardWithSpace = numberInput.value;

    let numberCardWithoutSpace = numberInput.value.replace(/\s/g, '');
 
    if(numberCardWithSpace.match(onlyNumbers) && numberCardWithoutSpace!="" && numberCardWithoutSpace.length==16)
    {
        if(errors.includes("numberError"))
        {
        removeError("number-error")

        errors.splice(errors.indexOf('numberError'), 1)

        numberInput.style.border= "0.2rem solid #dddddd"
        validationCorrect=true
        }
    }
    else
    {
        if(errors.includes("numberError")==false)
        {
        validationCorrect = false

        createError("Wrong format, numbers only", "number-error", "number-error")

        errors.push('numberError')

        numberInput.style.border= "0.2rem solid #b57977"
        }


    }

    //exp date validation

    let ExpDateMonthInputValue = ExpDateMonthInput.value

    let ExpDateYearInputValue = ExpDateYearInput.value

    ExpDateMonthInputValueWithoutSpace = ExpDateMonthInputValue.replace(/\s/g, '');
    
    ExpDateYearInputValueWithoutSpace = ExpDateYearInputValue.replace(/\s/g, '');


    if(ExpDateMonthInputValue.match(onlyNumbers) &&  ExpDateYearInputValue.match(onlyNumbers) && ExpDateMonthInputValue<=12 && ExpDateYearInputValue>23   && ExpDateMonthInputValueWithoutSpace!="" && ExpDateYearInputValueWithoutSpace!="" && ExpDateMonthInputValueWithoutSpace.length== 2 && ExpDateYearInputValueWithoutSpace.length==2 )
    {
        if(errors.includes("dateError"))
        {
        removeError("date-error")

        errors.splice(errors.indexOf('dateError'), 1)

        ExpDateMonthInput.style.border= "0.2rem solid #dddddd"
        ExpDateYearInput.style.border= "0.2rem solid #dddddd"

    }
    }
    else
    {
        if(errors.includes("dateError")==false)
        {
        validationCorrect = false

        createError("Wrong format", "date-error", "date-error")

        errors.push('dateError')

        ExpDateMonthInput.style.border = "0.2rem solid #b57977"
        ExpDateYearInput.style.border = "0.2rem solid #b57977"
        }


    }

      // cvc validation

      let cvcCardWithSpace = cvcInput.value;
  
      let cvcCardWithoutSpace = cvcInput.value.replace(/\s/g, '');
   
      if(cvcCardWithSpace.match(onlyNumbers) && cvcCardWithoutSpace!="" && cvcCardWithoutSpace.length==3)
      {
          if(errors.includes("cvcError"))
          {
          removeError("cvc-error")
  
          errors.splice(errors.indexOf('cvcError'), 1)
  
          cvcInput.style.border= "0.2rem solid #dddddd"
          }
      }
      else
      {
          if(errors.includes("cvcError")==false)
          {
          validationCorrect = false
  
          createError("Wrong format, numbers only", "cvc-error", "cvc-error")
  
          errors.push('cvcError')
  
          cvcInput.style.border= "0.2rem solid #b57977"
          }
  
  
      }


      if (errors.length ==0)
      {
        validatioCorrect = true
      }

      let validatioCorrectBox = document.querySelector("#validation-correct")

      let formBox = document.querySelector("form")

      if(validationCorrect==true)
      {
        validatioCorrectBox.style.display = "block"
        formBox.style.display ="none"
      }
})