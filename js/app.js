/**
 * Build a temperature converter. The user should be able to input a temperature, starting unit, and converted unit in the app. When the user clicks a submit button, the app should return the temperature in the converted unit.
 * 
 * make a function for each converter
 * 
 * 
 * function needs to take celsius input and convert it to fahreinheit and kelvin
 * 
 */



// make a function that will convert input for either cel, fah, or kel to other two temps and vice versa


const celsiusDegree = document.getElementById('celsius');
const fahrenheitDegree = document.getElementById('fahrenheit');
const kelvinDegree = document.getElementById('kelvin');
const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener('input', function (e) {
        let value = e.target.value;


    switch (e.target.name) {
        case 'celsius':
        fahrenheitDegree.value = (value * 1.8) + 32;
        kelvinDegree.value = (value + 273.15);
            break;

        case 'fahrenheit':
        celsiusDegree.value = (value-32) / 1.8;
        kelvinDegree.value = ((value-32) / 1.8) + 273.15;
            break;

        case 'kelvin':
        celsiusDegree.value = value - 273.15;
        fahrenheitDegree.value = ((value-273.15) * 1.8) + 32;
            break;

    }




    });
}