const constants = require("../constants/constants");

var Login = function () {
    browser.get('http://www.newtours.demoaut.com/');

    let InputUserName = $('input[name="userName"]');
    let InputPassword = $('input[name="password"');
    let InputLogin = $('input[name="login"]');
  
    
    InputUserName.sendKeys(constants.UserNameLogin);
    InputPassword.sendKeys(constants.PasswordLogin);
    InputLogin.click();
   
};
module.exports = Login;
