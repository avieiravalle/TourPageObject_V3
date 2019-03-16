browser.ignoreSynchronization = true;
var Login = require('../PageObject/PgLogin');
var Reservation = require('../PageObject/PgReservation');
var SelectFlight = require('../PageObject/PgSelectFlight');
var BookFlight = require('../PageObject/PgBookFlight');


describe('Tour ', () => {

    it('Should be to do a reservation', () => {
        Login();
        Reservation();
        SelectFlight();
        BookFlight();
    });
});
