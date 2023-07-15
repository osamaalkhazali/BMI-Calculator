let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let btn = document.querySelector("button")
let result = document.querySelector(".result")
let unit = document.querySelector("select")

if (unit.value == "kg") { 
    height.placeholder = "Height in Meter"
    weight.placeholder = "Weight in Kg"
} 
unit.oninput = function () {
    if (unit.value == "kg") {
        height.value = ""
        weight.value = ""
        height.placeholder = "Height in Meter"
        weight.placeholder = "Weight in Kg"
    } else if (unit.value == "lb") {
        height.value = ""
        weight.value = ""
        height.placeholder = "Height in Inch"
        weight.placeholder = "Weight in Pound"
    }

}




btn.onclick = function () {


        if (unit.value == "kg") {
            result.innerHTML = ""
            let calcu = (weight.value / height.value / height.value).toFixed(2)
            let bmi = document.createElement("p")
            if (weight.value == "" || height.value == "" || weight.value == "0" || height.value == "0") {
                bmi.textContent = "Wrong Input" 
                result.appendChild(bmi)
            } else {
                bmi.textContent = `Your BMI Weight :${calcu}`
                result.appendChild(bmi)
                if (calcu < 18.5) {
                    let b = document.createElement("b")
                    b.textContent = "You Are UNDERWEIGHT"
                    result.appendChild(b)
                }
                if (calcu >= 18.5 && calcu <=24.9) {
                    let b = document.createElement("b")
                    b.textContent = "You Are Normal"
                    result.appendChild(b)
                }
                if (calcu >= 25 && calcu <=29.9) {
                    let b = document.createElement("b")
                    b.textContent = "You Are OVERWEIGHT"
                    result.appendChild(b)
                }
                if (calcu >= 30 && calcu <=34.9) {
                    let b = document.createElement("b")
                    b.textContent = "You Are OBESE"
                    result.appendChild(b)
                }
                if (calcu >= 35) {
                    let b = document.createElement("b")
                    b.textContent = "You Are EXTREMELY OBESE"
                    result.appendChild(b)
                }
                
            }
        
    
        } else if (unit.value == "lb") {
            result.innerHTML = ""
            let calcu = ((weight.value / height.value / height.value) * 703).toFixed(2)
            let bmi = document.createElement("p")
            bmi.textContent = `Your BMI Weight :${calcu}`
            result.appendChild(bmi)
            if (calcu < 18.5) {
                let b = document.createElement("b")
                b.textContent = "You Are UNDERWEIGHT"
                result.appendChild(b)
            }
            if (calcu >= 18.5 && calcu <=24.9) {
                let b = document.createElement("b")
                b.textContent = "You Are Normal"
                result.appendChild(b)
            }
            if (calcu >= 25 && calcu <=29.9) {
                let b = document.createElement("b")
                b.textContent = "You Are OVERWEIGHT"
                result.appendChild(b)
            }
            if (calcu >= 30 && calcu <=34.9) {
                let b = document.createElement("b")
                b.textContent = "You Are OBESE"
                result.appendChild(b)
            }
            if (calcu >= 35) {
                let b = document.createElement("b")
                b.textContent = "You Are EXTREMELY OBESE"
                result.appendChild(b)
            }
        }  
    }
