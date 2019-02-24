var SelectFlight = function () {
let DepartInput = $$('[name="outFlight"]').get(2);
let ReturnInput = $$('[name="inFlight"]').get(2);
let ContinueInput = $('[name=reserveFlights]');


DepartInput.click();
ReturnInput.click();
ContinueInput.click();

};
module.exports = SelectFlight;