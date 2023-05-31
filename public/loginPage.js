"use strict";

const userForm = new UserForm();
userForm.loginFormCallback = function (data) {
  ApiConnector.login(data, (response) => {
    response.success
      ? location.reload()
      : userForm.setLoginErrorMessage(response.error);
  });
};

userForm.registerFormCallback = function (data) {
  ApiConnector.register(data, (response) => {
    response.success
      ? location.reload()
      : userForm.setRegisterErrorMessage(response.error);
  });
};
