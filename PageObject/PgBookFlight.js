const constants = require("../constants/constants");

var BookFlight = function () {

let PassengersNameInput = $('input[name="passFirst0"]');
let PassengersLastNameInput = $('input[name="passLast0"]');
let PassengersCardFlag = $('select[name="creditCard"]').$('[value="IK"]');
let PassengersCardNumber = $('input[name="creditnumber"]');
let SecurePurchase = $('[name="buyFlights"]');



PassengersNameInput.sendKeys(constants.PassageiroName);
PassengersLastNameInput.sendKeys(constants.PassageiroLastName);
PassengersCardFlag.click();
PassengersCardNumber.sendKeys(constants.CardNumber);
SecurePurchase.click();

    
};
module.exports = BookFlight;