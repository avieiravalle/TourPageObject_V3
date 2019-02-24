var Reservation = function () {
    let FlightDetailsType = $$('input[type="radio"]').get(1)
    let FlightDetailPassengers = $('select[name="passCount"]').$('option[value="1"]');
    let FlightDetailsDepartingFrom = $('select[name="fromPort"]').$('option[value="Paris"]');
    let FlightDetailsInputOn = $('select[name="fromMonth"]').$('option[value="8"]');
    let FlightDetailsInputOnDate = $('select[name="fromDay"]').$('option[value="7"]');
    let FlightDetailsInputArrivingIn = $('select[name="toPort"]').$('option[value="Sydney"]');
    let FlightDetailsInputReturning = $('select[name="toMonth"]').$('option[value="8"]');
    let FlightDetailsInputReturningDate = $('select[name="toDay"]').$('option[value="14"]');
    let PreferencesServiceClassInput = $$('input[name="servClass"]').get(2);
    let PreferencesAirlineInput = $('select[name="airline"]');
    let PreferencesContinue = $('input[name="findFlights"]');


    FlightDetailsType.click();
    FlightDetailPassengers.click();
    FlightDetailsDepartingFrom.click();
    FlightDetailsInputOn.click();
    FlightDetailsInputOnDate.click();
    FlightDetailsInputArrivingIn.click();
    FlightDetailsInputReturning.click();
    FlightDetailsInputReturningDate.click();
    
    PreferencesServiceClassInput.click();
    PreferencesAirlineInput.click();
    PreferencesContinue.click();
};
module.exports = Reservation;