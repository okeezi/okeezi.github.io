let lucasHigherBMI = false

function calculateBMI() {

    const peterWeight = document.getElementById("peterWeight").value
    const peterHeight = document.getElementById("peterHeight").value

    const lucasWeight = document.getElementById("lucasWeight").value
    const lucasHeight = document.getElementById("lucasHeight").value

    const lucasBMI = lucasWeight / (lucasHeight * lucasHeight)
    const peterBMI = peterWeight / (peterHeight * peterHeight)

    if (lucasBMI > peterBMI) {
        // lucasHigherBMI = true
        document.getElementById("result").innerHTML = "Lucas\' BMI (" + Math.floor(lucasBMI) + ") is greater than  Peter\'s(" + Math.floor(peterBMI) + ")"
    } else {
        document.getElementById("result").innerHTML = "Peter\'s BMI (" + Math.floor(peterBMI) + ") is greater than  Lucas\'(" + Math.floor(lucasBMI) + ")"
    }

    // document.getElementById("result").innerHTML = "The BMI of peter is <b>" + peterBMI + "</b> The BMI of Lucas is <b>" + lucasBMI + "</b> Luca\'s BMI is higher than Peter\'s BMI that is <b>" + lucasHigherBMI + "</b>"

}

const CovertFahrenheitToCelsius = () => {

    let tempValue = document.getElementById("temp").value
    const celsValue = (tempValue - 32) * 5 / 9
    document.getElementById("tempOutcome").innerHTML = tempValue + "&#8457;" + " is " + celsValue + "&#8451;"

}

const CovertCelsiusToFahrenheit = () => {

    let tempValue = document.getElementById("temp").value
    const fahrValue = (tempValue * 9 / 5) + 32

    document.getElementById("tempOutcome").innerHTML = tempValue + "&#8451;" + " is " + fahrValue + "&#8457;"
}