(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": "./src/app/admin/admin.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/addcity/addcity.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/addcity/addcity.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>addcity works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin/admin.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin/admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  input.ng-dirty.ng-invalid {\n    border: 2px solid #ff0000\n  }\n\n  input.ng-dirty.ng-valid {\n    border: 2px solid #6bc502\n  }\n</style>\n<h2 class=\"text-center\">ADMIN LOGIN</h2>\n<h4 class=\"bg-danger\" *ngIf=\"loginError != null\">Login Failed.Try again.</h4>\n\n<div class=\"m-2\">\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"handleAdminLogin(admin)\">\n    <div class=\"form-group\">\n      <label>Admin ID</label>\n      <input class=\"form-control\" name=\"adminId\" [(ngModel)]=\"admin.adminId\" #adminId=\"ngModel\" required minlength=\"3\"\n        pattern=\"^[A-Za-z0-9 ]+$\" />\n      <ul class=\"text-danger list-unstyled\" *ngIf=\"adminId.dirty && adminId.invalid\">\n        <li *ngIf=\"adminId.errors.required\">\n          You must enter a id\n        </li>\n        <li *ngIf=\"adminId.errors.pattern\">\n          Id can only contain letters and spaces\n        </li>\n        <li *ngIf=\"adminId.errors.minlength\">\n          Id must be at least\n          {{adminId.errors.minlength.requiredLength}} characters\n        </li>\n      </ul>\n    </div>\n    <div class=\"form-group\">\n      <label>Admin Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"admin.password\" #password=\"ngModel\"\n        required/>\n      <ul class=\"text-danger list-unstyled\" *ngIf=\"password.dirty && password.invalid\">\n        <li *ngIf=\"password.errors.required\">\n          You must enter a password\n        </li>\n      </ul>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"form.invalid\">\n        Admin Login\n      </button>\n    </div><br>\n    <div class=\"d-flex justify-content-center\">\n      <button type=\"submit\" class=\"btn btn-sm btn-outline-secondary\" (click)=\"goBack()\">Back</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/editbus/editbus.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/editbus/editbus.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>editbus works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/editcity/editcity.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/editcity/editcity.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>editcity works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/main/main.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/main/main.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Main Admin page</h4>\n<div class=\"row\">\n    <div class=\"col-3 bg-dark\">\n        <div class=\"d-flex justify-content-center m-2 p-2\"><button class=\"btn btn-success\" (click)=\"showAddRoute()\">Add\n                Bus Route</button></div>\n    </div>\n    <div class=\"col-9\">\n        <div *ngIf=\"showAddRouteTogggle\" style=\"background-color: palegoldenrod\">\n            <form novalidate #form=\"ngForm\" (ngSubmit)=\"addNewBus(form)\">\n                <div class=\"row m-1 p-1\">\n                    <div class=\"col-3 m-1 p-1\"><label><strong>Select from city:</strong></label></div>\n                    <div class=\"col p-1\"><select class=\"dropdown\" [(ngModel)]=\"newBus.fromCity\" name=\"newBus.fromCity\"\n                            (click)=\"getSelectedFromCity(newBus.fromCity)\" required>\n                            <option value=\"\" selected=\"selected\">--Select from city--</option>\n                            <option *ngFor=\"let city of cities\" value={{city}}>{{city | uppercase}}</option>\n                        </select></div>\n                </div>\n                <div class=\"row m-1 p-1\">\n                    <div class=\"col-3 m-1 p-1\"> <label><strong>Select to city:</strong></label></div>\n                    <div class=\"col p-1\"><select class=\"from-control clearfix\" [(ngModel)]=\"newBus.toCity\"\n                            name=\"newBus.toCity\" (click)=\"getSelectedToCity(newBus.toCity)\" required>\n                            <option value=\"\" selected=\"selected\">--Select to city--</option>\n                            <option *ngFor=\"let toCity of toCities\" value={{toCity}}>{{toCity | uppercase}}</option>\n                        </select></div>\n                </div>\n                <div class=\"row m-1 p-1\">\n                        <div class=\"col-3 m-1 p-1\"> <label><strong>Bus Route No:</strong></label></div>\n                        <div class=\"col p-1\">\n                            <input type=\"text\" name=\"newBus.busRouteNo\" [(ngModel)]=\"newBus.busRouteNo\" maxlength=\"4\" required>\n                        </div>\n                    </div>\n                <div class=\"row m-1 p-1\">\n                    <div class=\"col-3 m-1 p-1\"> <label><strong>Bus description:</strong></label></div>\n                    <div class=\"col p-1\">\n                        <input type=\"text\" name=\"newBus.busDesc\" [(ngModel)]=\"newBus.busDesc\" maxlength=\"200\">\n                    </div>\n                </div>\n                <div class=\"row m-1 p-1\">\n                    <div class=\"col-3 m-1 p-1\"> <label><strong>Bus Fare:</strong></label></div>\n                    <div class=\"col p-1\">\n                        Rs.&nbsp;<input type=\"number\" name=\"newBus.busFare\" [(ngModel)]=\"newBus.busFare\" required>\n                    </div>\n                </div>\n                <div class=\"d-flex justify-content-center \"><button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">ADD</button>\n                </div>\n            </form>\n\n        </div>\n\n        <table class=\"table table-stripped\">\n            <thead>\n                <tr>\n                    <th>\n                        Bus No\n                    </th>\n                    <th>From city</th>\n                    <th>To city</th>\n                    <th>Bus Description</th>\n                    <th>Bus Fare</th>\n                    <th></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let bus of buses\">\n                    <td>{{bus.busRouteNo}}</td>\n                    <td>{{bus.fromCity}}</td>\n                    <td>{{bus.toCity}}</td>\n                    <td>{{bus.busDescription}}</td>\n                    <td>Rs.{{bus.busFare}}</td>\n                    <td><button class=\"btn btn-warning\" [routerLink]=\"['/edit',bus.busRouteNo]\">Edit</button></td>\n                    <td><button class=\"btn btn-danger\" (click)=\"deleteBus(bus._id,bus.fromCity,bus.toCity)\">Delete</button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/userdetails/userdetails.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/userdetails/userdetails.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>userdetails works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- App component:\n<form novalidate (ngSubmit)=\"showResults(product)\">\n  name : <input class=\"form-control\" type=\"text\" name=\"prdName\" [(ngModel)]=\"product.prdName\" minlength=\"5\" required/><br>\n  id : <input type=\"number\" name=\"prdId\"[(ngModel)]=\"product.prdId\"/>\n  <button type=\"submit\">Submit</button>\n</form>\n -->\n<!-- <app-login></app-login> -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col text-white bg-dark text-center\">\n      <a class=\"navbar-brand\">BookMyBus</a>\n      <div *ngIf=\"isUserLogged()\"><button class=\"flex float-right btn btn-danger text-white\" routerLink=\"\">Log\n          out</button><a class=\"flex float-right btn btn-outline-success\"\n          routerLink=\"\">{{user.firstName | uppercase}}</a></div>\n      <div *ngIf=\"!isUserLogged()\">\n        <button class=\"flex float-right btn btn-outline-success\" routerLink=\"login\">SignIn/Login</button>\n        <button class=\"flex float-right btn btn-outline-primary\" routerLink=\"admin\">Admin</button></div>\n    </div>\n  </div>\n  <div class=\"row bg-primary text-white\">\n    <a class=\"nav-link\" style=\"color:papayawhip\" routerLink=\"buses\">View All Bus</a>\n    <a class=\"nav-link\" style=\"color:papayawhip\">Booking History</a>\n    <a class=\"nav-link\" style=\"color:papayawhip\">Top Routes</a>\n    <!-- <button class=\"nav-link\" (click)=\"showSmartSearch()\">SS</button> -->\n  </div>\n</div>\n<!-- <app-admin></app-admin> -->\n<router-outlet></router-outlet>\n<!-- <app-bus></app-bus>  -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book/book.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book/book.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron\">\n  <div class=\"d-flex justify-content-center\">\n    <div>\n      <table class=\"table table-stripped\">\n        <tbody>\n          <tr>\n            <td>BUS NO : </td>\n            <td>\n              <h5>{{bookedBus?.busRouteNo | uppercase}}</h5>\n            </td>\n          </tr>\n          <tr>\n            <td>FROM : </td>\n            <td>\n              <h5>{{bookedBus?.fromCity | uppercase}}</h5>\n            </td>\n          </tr>\n          <tr>\n            <td>TO : </td>\n            <td>\n              <h5>{{bookedBus?.toCity | uppercase}}</h5>\n            </td>\n          </tr>\n          <tr>\n            <td>BUS TYPE : </td>\n            <td>\n              <h5>{{bookedBus?.busDescription | uppercase}}</h5>\n            </td>\n          </tr>\n          <tr>\n            <td>BUS FARE : </td>\n            <td>\n              <h5>Rs.{{bookedBus?.busFare}}</h5>\n            </td>\n          </tr>\n          <tr>\n            <td>TICKETS : </td>\n            <td>\n              <button class=\"btn btn-warning btn-small\" (click)=\"decrementTicCount()\">-</button>\n              <button class=\"btn btn-light btn-medium\">{{ticketCount}}</button>\n              <button class=\"btn btn-warning btn-small\" (click)=\"incrementTicCount()\">+</button>\n            </td>\n          </tr>\n          <tr>\n            <td>TOTAL AMOUNT TO BE PAID : </td>\n            <td>\n              <h5>Rs. {{getTotalAmt(bookedBus?.busFare)}}</h5>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"d-flex justify-content-center\">\n    <button class=\" btn btn-primary btn-large m-1 p-1\"  (click)=\"proceedToCheckout()\">PROCEED TO CHECKOUT</button>\n    <button class=\" btn btn-danger btn-large m-1 p-1\" (click)=\"goBack()\">BACK</button>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bus/bus.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bus/bus.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"toggleSmartSearch\" align=\"center\">\n  <input type=\"text\" [(ngModel)]=\"busSearchNo\" placeholder=\"Bus No\" />\n  <input type=\"text\" [(ngModel)]=\"busSearchfromCity\" placeholder=\"From city\" />\n  <input type=\"text\" [(ngModel)]=\"busSearchToCity\" placeholder=\"To city\" />\n</div>\n<div class=\"row\">\n  <div class=\"col-3 bg-dark text-white\">\n    <div class=\"row\">\n      <div class=\"col text-center\">\n        <button class=\"btn btn-md btn-bg-outline-primary\" (click)=\"showSmartSearch()\">Show Smart Search</button>\n      </div>\n    </div>\n    <div>\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <strong>Select From City:</strong>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <select class=\"dropdown\" [(ngModel)]=\"selectedFromCity\" (click)=\"getSelectedFromCity(selectedFromCity)\">\n            <option value=\"\" selected=\"selected\">--Select from city--</option>\n            <option *ngFor=\"let city of fromCities\" value={{city}}>{{city | uppercase}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <strong>Select To City:</strong>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <select class=\"from-control clearfix\" [(ngModel)]=\"selectedToCity\"\n            (click)=\"getSelectedToCity(selectedToCity)\">\n            <option value=\"\" selected=\"selected\">--Select to city--</option>\n            <option *ngFor=\"let toCity of toCities\">{{toCity | uppercase}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-9\">\n    <div *ngIf=\"!buses.length\" class=\"text-center\">\n      <h1>Sorry, No buses found :(</h1>\n    </div>\n    <div *ngFor=\"let bus of buses | busSearchFilter : busSearchNo: busSearchfromCity: busSearchToCity\"\n      class=\"card m-4 p-3 bg-light\">\n      <div *ngIf=\"!buses.length\">\n        <h1>Sorry, No buses found :(</h1>\n      </div>\n      <div *ngIf=\"buses\">\n        <h4>\n          <div class=\"row clearfix\">\n            <div class=\"col-12 p-1 m-1 badge badge-pill badge-primary d-block d-xs-none d-sm-none\">{{bus.busRouteNo}}\n            </div>\n\n            <div class=\"col-1 p-1 m-1 badge badge-pill badge-primary d-none d-md-block d-xl-block\">{{bus.busRouteNo}}\n            </div>\n\n            <div class=\"col p-1 m-1\">\n              {{bus.fromCity | uppercase}} to {{bus.toCity | uppercase}}\n            </div>\n            <div class=\"badge\">Rs.{{bus.busFare}}</div>\n          </div>\n          <div class=\"row visible-lg\">\n            <button class=\"col col-offset-2 btn btn-outline-success\" (click)=\"handleBook(bus._id)\">BOOK</button>\n          </div>\n        </h4>\n      </div>\n      <div class=\"d-flex justify-content-center\">{{bus.busDescription}}</div>\n      <!-- <div class=\"d-lg-none\">hide on screens wider than lg</div>\n          <div class=\"d-none d-lg-block\">hide on screens smaller than lg</div> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>checkout works!</p>\n<div id=\"paypal-button-container\">\n</div>\n\n<script>\n        paypal.Buttons().render('#paypal-button-container');\n      </script>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card bg-light text-center\">\n  <h4 class=\"bg-danger\" *ngIf=\"loginError != null\">Login Failed.Try again.</h4>\n\n  <h3>LOGIN</h3> -->\n<!-- <div>\n    <label>User Name:</label>\n    <input type=\"text\" name=\"userName\" [(ngModel)]=\"user.userName\" required/>\n  </div>\n  <div>\n    <label>Password:</label>\n    <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required/>\n  </div>\n  <div>\n    <button class=\"btn btn-success\"type=\"submit\" (click)=\"handleLogin()\">Login</button>\n  </div> -->\n<!-- LATEST -->\n\n<!-- <div>\n    <div class=\"form-group row\">\n      <label for=\"colFormLabel\" class=\"col-sm-2 col-form-label\">User Name</label>\n      <div class=\"col-sm-5\">\n        <input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"signin.userName\"\n          (keyup)=\"getUserName($event)\" id=\"colFormLabel\" placeholder=\"Enter user name\" minlength=\"3\" required>\n        <div *ngIf=\"signin.userName\" [class.text-success]=\"canProceed\" [class.text-danger]=\"!canProceed\">\n          {{userNameResp}}\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"colFormLabel\" class=\"col-sm-2 col-form-label\">Password</label>\n      <div class=\"col-sm-5\">\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"signin.password\" id=\"colFormLabel\"\n          placeholder=\"Enter password\">\n      </div>\n    </div>\n  </div>\n  <div>New User? <a class=\"bg-info text-white\" (click)=\"redirectToSignIn()\">Sign In</a></div>\n</div> -->\n\n<style>\n  input.ng-dirty.ng-invalid {\n    border: 2px solid #ff0000\n  }\n\n  input.ng-dirty.ng-valid {\n    border: 2px solid #6bc502\n  }\n</style>\n<h2 class=\"text-center\">LOGIN</h2>\n<h4 class=\"bg-danger\" *ngIf=\"loginError != null\">Login Failed.Try again.</h4>\n\n<div class=\"m-2\">\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"handleLogin(user)\">\n    <div class=\"form-group\">\n      <label>User Name</label>\n      <input class=\"form-control\" name=\"userName\" [(ngModel)]=\"user.userName\" #userName=\"ngModel\" required minlength=\"3\"\n        pattern=\"^[A-Za-z0-9 ]+$\" />\n      <ul class=\"text-danger list-unstyled\" *ngIf=\"userName.dirty && userName.invalid\">\n        <li *ngIf=\"userName.errors.required\">\n          You must enter a user name\n        </li>\n        <li *ngIf=\"userName.errors.pattern\">\n          User name can only contain letters and spaces\n        </li>\n        <li *ngIf=\"userName.errors.minlength\">\n          User name must be at least\n          {{userName.errors.minlength.requiredLength}} characters\n        </li>\n      </ul>\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\"\n        required/>\n      <ul class=\"text-danger list-unstyled\" *ngIf=\"password.dirty && password.invalid\">\n        <li *ngIf=\"password.errors.required\">\n          You must enter a user name\n        </li>\n      </ul>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"form.invalid\">\n        Login\n      </button>\n    </div><br>\n    <div class=\"d-flex justify-content-center\">\n      <h6>New User ? <button type=\"submit\" class=\"btn btn-sm btn-outline-secondary\" (click)=\"redirectToSignIn()\">Sigin In</button></h6>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  input.ng-dirty.ng-invalid {\n    border: red\n  }\n\n  input.ng-dirty.ng-valid {\n    border: green\n  }\n</style>\n<div class=\"jumbotron\">\n  <div class=\"d-flex justify-content-center\">\n    <h3>Register here!</h3>\n  </div>\n  <form novalidate #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\">First Name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"signin.firstName\"\n          placeholder=\"Enter first name\" minlength=\"3\" #firstName=\"ngModel\" required pattern=\"^[A-Za-z ]+$\">\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"firstName.dirty && firstName.invalid\">\n          <li *ngFor=\"let error of getValidationMessages(firstName)\">\n            {{error}}\n          </li>\n        </ul>\n      </div>\n\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\">Last Name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"signin.lastName\"\n          placeholder=\"Enter last name\" #lastName=\"ngModel\" required pattern=\"^[A-Za-z ]+$\">\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"lastName.dirty && lastName.invalid\">\n          <li *ngFor=\"let error of getValidationMessages(lastName)\">\n            {{error}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"colFormLabel\" class=\"col-sm-2 col-form-label\">Email</label>\n      <div class=\"col-sm-10\">\n        <input type=\"email\" class=\"form-control\" name=\"emailId\" [(ngModel)]=\"signin.emailId\"\n          placeholder=\"Enter email id\" required #emailId=\"ngModel\" pattern=\"^.+@.+$\">\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"emailId.dirty && emailId.invalid\">\n          <li *ngFor=\"let error of getValidationMessages(emailId)\">\n            {{error}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-md-2-offset col-md-10\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" name=\"userNameToggle\" (change)=\"setUserId()\">\n          <label class=\"form-check-label\">\n            Use email user name as user name here\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\">User Name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"signin.userName\"\n          (keyup)=\"getUserName($event)\" placeholder=\"Enter user name\" minlength=\"3\" required #userName=\"ngModel\">\n        <div *ngIf=\"signin.userName && !(userName.dirty && userName.invalid)\" [class.text-success]=\"canProceed\" [class.text-danger]=\"!canProceed\">\n          {{userNameResp}}</div>\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"userName.dirty && userName.invalid\">\n              <li *ngFor=\"let error of getValidationMessages(userName)\">\n                {{error}}\n              </li>\n            </ul>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\">Password</label>\n      <div class=\"col-sm-10\">\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"signin.password\" \n          placeholder=\"Enter password\" #password=\"ngModel\" required minlength=\"6\">\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"password.dirty && password.invalid\">\n          <li *ngFor=\"let error of getValidationMessages(password)\">\n            {{error}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 col-form-label\">Confirm Password</label>\n      <div class=\"col-sm-10\">\n        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"signin.confirmPassword\"\n          #confirmPassword=\"ngModel\" required placeholder=\"Re-enter password\" minlength=\"6\" (input)=\"confirmPasswordCheck(signin.confirmPassword)\">  \n        <div *ngIf=\"!confirmPasswordCheck(signin.confirmPassword)\" class=\"text-danger\">Password and confirm Password Mismatch</div>\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"lastName.dirty && lastName.invalid\">\n          <li *ngFor=\"let error of getValidationMessages(lastName)\">\n            {{error}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n      <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Register</button><button class=\"btn btn-danger\" (click)=\"goBack()\">Back</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tictoc/tictoc.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tictoc/tictoc.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>tictoc works!</p>\n<button [class.bg-info]=\"tiles['0:0']==='X'\" [class.bg-warning]=\"tiles['0:0']==='O'\" class=\"btn btn-primary\"\n    [disabled]=\"tiles['0:0']\" (click)=\"fillTile('0:0')\">{{tiles['0:0']}}</button>\n<button [class.bg-info]=\"tiles['0:1']==='X'\" [class.bg-warning]=\"tiles['0:1']==='O'\" class=\"btn btn-primary\"\n    (click)=\"fillTile('0:1')\">{{tiles['0:1']}}</button>\n<button [class.bg-info]=\"tiles['0:2']==='X'\" [class.bg-warning]=\"tiles['0:2']==='O'\" class=\"btn btn-primary\"\n    (click)=\"fillTile('0:2')\">{{tiles['0:2']}}</button>\n<br>\n<button [class.bg-info]=\"tiles['1:0']==='X'\" [class.bg-warning]=\"tiles['1:0']==='O'\" class=\"btn btn-primary\"\n    (click)=\"fillTile('1:0')\">{{tiles['1:0']}}</button>\n<button [class.bg-info]=\"tiles['1:1']==='X'\" [class.bg-warning]=\"tiles['1:1']==='O'\" class=\"btn btn-primary\"\n    (click)=\"fillTile('1:1')\">{{tiles['1:1']}}</button>\n<button [class.bg-info]=\"tiles['1:2']==='X'\" [class.bg-warning]=\"tiles['1:2']==='O'\" class=\"btn btn-primary\"\n    (click)=\"fillTile('1:2')\">{{tiles['1:2']}}</button>\n<br>\n<button [class.bg-info]=\"tiles['2:0']==='X'\" [class.bg-warning]=\"tiles['2:0']==='O'\" class=\"btn btn-primary\"\n    (click)=\"fillTile('2:0')\">{{tiles['2:0']}}</button>\n<button [class.bg-info]=\"tiles['2:1']==='X'\" [class.bg-warning]=\"tiles['2:1']==='O'\" class=\"btn btn-primary\"\n    (click)=\"fillTile('2:1')\">{{tiles['2:1']}}</button>\n<button [class.bg-info]=\"tiles['2:2']==='X'\" [class.bg-warning]=\"tiles['2:2']==='O'\" class=\"btn btn-primary\"\n    (click)=\"fillTile('2:2')\">{{tiles['2:2']}}</button>\n\n<!-- <div id=\"mydiv\">hello</div><br>\n<div id=\"mydiv\" (click)=\"call()\">world</div> -->\n\n{{result}}"

/***/ }),

/***/ "./src/app/admin/addcity/addcity.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/addcity/addcity.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZGNpdHkvYWRkY2l0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/addcity/addcity.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/addcity/addcity.component.ts ***!
  \****************************************************/
/*! exports provided: AddcityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcityComponent", function() { return AddcityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddcityComponent = /** @class */ (function () {
    function AddcityComponent() {
    }
    AddcityComponent.prototype.ngOnInit = function () {
    };
    AddcityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcity',
            template: __webpack_require__(/*! raw-loader!./addcity.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/addcity/addcity.component.html"),
            styles: [__webpack_require__(/*! ./addcity.component.css */ "./src/app/admin/addcity/addcity.component.css")]
        })
    ], AddcityComponent);
    return AddcityComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/admin/main/main.component.ts");
/* harmony import */ var _editbus_editbus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editbus/editbus.component */ "./src/app/admin/editbus/editbus.component.ts");
/* harmony import */ var _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addcity/addcity.component */ "./src/app/admin/addcity/addcity.component.ts");
/* harmony import */ var _editcity_editcity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editcity/editcity.component */ "./src/app/admin/editcity/editcity.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/admin/userdetails/userdetails.component.ts");











var routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
    { path: "auth", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: "main", component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: "edit/:bus", component: _editbus_editbus_component__WEBPACK_IMPORTED_MODULE_7__["EditbusComponent"] },
    { path: "**", redirectTo: "auth" }
]);
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _editbus_editbus_component__WEBPACK_IMPORTED_MODULE_7__["EditbusComponent"], _addcity_addcity_component__WEBPACK_IMPORTED_MODULE_8__["AddcityComponent"], _editcity_editcity_component__WEBPACK_IMPORTED_MODULE_9__["EditcityComponent"], _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_10__["UserdetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], routing
            ],
            exports: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/admin/admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, route) {
        this.router = router;
        this.route = route;
        this.admin = {
            adminId: "",
            password: ""
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.goBack = function () {
        this.router.navigateByUrl("buses");
    };
    AdminComponent.prototype.handleAdminLogin = function () {
        if (this.admin.adminId === "admin" && this.admin.password == "admin") {
            console.log("valid admin id");
            this.router.navigateByUrl("/admin/main");
        }
        else
            console.log("In valid admin id");
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin/admin.component.css")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/editbus/editbus.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/editbus/editbus.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXRidXMvZWRpdGJ1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/editbus/editbus.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/editbus/editbus.component.ts ***!
  \****************************************************/
/*! exports provided: EditbusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditbusComponent", function() { return EditbusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EditbusComponent = /** @class */ (function () {
    function EditbusComponent(router, route) {
        this.router = router;
        this.route = route;
        console.log('found bus for redit : ' + JSON.stringify(this.route.snapshot.paramMap.get("bus")));
    }
    EditbusComponent.prototype.ngOnInit = function () {
    };
    EditbusComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    EditbusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editbus',
            template: __webpack_require__(/*! raw-loader!./editbus.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/editbus/editbus.component.html"),
            styles: [__webpack_require__(/*! ./editbus.component.css */ "./src/app/admin/editbus/editbus.component.css")]
        })
    ], EditbusComponent);
    return EditbusComponent;
}());



/***/ }),

/***/ "./src/app/admin/editcity/editcity.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/editcity/editcity.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXRjaXR5L2VkaXRjaXR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/editcity/editcity.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/editcity/editcity.component.ts ***!
  \******************************************************/
/*! exports provided: EditcityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcityComponent", function() { return EditcityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditcityComponent = /** @class */ (function () {
    function EditcityComponent() {
    }
    EditcityComponent.prototype.ngOnInit = function () {
    };
    EditcityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editcity',
            template: __webpack_require__(/*! raw-loader!./editcity.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/editcity/editcity.component.html"),
            styles: [__webpack_require__(/*! ./editcity.component.css */ "./src/app/admin/editcity/editcity.component.css")]
        })
    ], EditcityComponent);
    return EditcityComponent;
}());



/***/ }),

/***/ "./src/app/admin/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/main/main.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_bus_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bus/bus.service */ "./src/app/bus/bus.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainComponent = /** @class */ (function () {
    function MainComponent(busSvc, router, route) {
        var _this = this;
        this.busSvc = busSvc;
        this.router = router;
        this.route = route;
        this.newBus = {
            busRouteNo: "",
            fromCity: "",
            toCity: "",
            busDesc: "",
            busFare: 0
        };
        this.buses = [];
        this.cities = [];
        this.toCities = [];
        this.fromCities = [];
        this.showAddRouteTogggle = false;
        busSvc.getAllBuses().subscribe(function (BUSES) {
            _this.buses = BUSES;
            console.log("found buses length: " + _this.buses.length);
        });
        busSvc.getAllCities().subscribe(function (CITIES) {
            _this.cities = CITIES.map(function (c) { return c.name.toLocaleLowerCase(); }).sort();
            console.log('found cities length: ' + _this.cities.length);
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busSvc.getAllBuses().subscribe(function (BUSES) {
            _this.buses = BUSES;
            console.log("found buses length: " + _this.buses.length);
        });
        this.busSvc.getAllCities().subscribe(function (CITIES) {
            _this.cities = CITIES.map(function (c) { return c.name.toLocaleLowerCase(); }).sort();
            console.log('found cities length: ' + _this.cities.length);
        });
    };
    MainComponent.prototype.ngOnChanges = function (changes) {
        if (changes.showAddRouteTogggle) {
            console.log('here');
        }
        console.log("ng onchange");
    };
    MainComponent.prototype.showAddRoute = function () {
        this.showAddRouteTogggle = !this.showAddRouteTogggle;
    };
    MainComponent.prototype.getSelectedFromCity = function (fromCity) {
        this.toCities = this.cities.filter(function (c) { return c !== fromCity; });
    };
    MainComponent.prototype.getSelectedToCity = function (toCity) {
        this.fromCities = this.cities.filter(function (c) { return c !== toCity; });
    };
    MainComponent.prototype.addNewBus = function (form) {
        var _this = this;
        if (form.valid) {
            //this.newBus.busRouteNo = busRouteNo;
            console.log(this.newBus);
            this.busSvc.addBus(this.newBus).subscribe(function (res) {
                if (res) {
                    alert("Bus added successfully!");
                    form.reset();
                }
                else {
                    alert("Unable to add bus!");
                }
                _this.ngOnInit();
            });
        }
        else {
            console.log("invalid");
        }
    };
    MainComponent.prototype.deleteBus = function (busId, fromCity, toCity) {
        var _this = this;
        if (confirm("Are you sure you want to remove the bus from " + fromCity + " to " + toCity + " ?")) {
            this.busSvc.deleteBus(busId).subscribe(function (res) {
                alert((res) ? "Bus removed successfully!" : "Unable to remove bus!");
                _this.ngOnInit();
            });
        }
    };
    MainComponent.ctorParameters = function () { return [
        { type: src_app_bus_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/admin/main/main.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/admin/userdetails/userdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/userdetails/userdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJkZXRhaWxzL3VzZXJkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/userdetails/userdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/userdetails/userdetails.component.ts ***!
  \************************************************************/
/*! exports provided: UserdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function() { return UserdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserdetailsComponent = /** @class */ (function () {
    function UserdetailsComponent() {
    }
    UserdetailsComponent.prototype.ngOnInit = function () {
    };
    UserdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userdetails',
            template: __webpack_require__(/*! raw-loader!./userdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/userdetails/userdetails.component.html"),
            styles: [__webpack_require__(/*! ./userdetails.component.css */ "./src/app/admin/userdetails/userdetails.component.css")]
        })
    ], UserdetailsComponent);
    return UserdetailsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bus_bus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bus/bus.component */ "./src/app/bus/bus.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _book_BookGuard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book/BookGuard */ "./src/app/book/BookGuard.ts");
/* harmony import */ var _tictoc_tictoc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tictoc/tictoc.component */ "./src/app/tictoc/tictoc.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");











var routes = [
    { path: "", component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "buses", component: _bus_bus_component__WEBPACK_IMPORTED_MODULE_5__["BusComponent"] },
    { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },
    { path: "book", component: _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"], canActivate: [_book_BookGuard__WEBPACK_IMPORTED_MODULE_8__["BookGuard"]] },
    { path: "signin", component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"] },
    { path: "tictoc", component: _tictoc_tictoc_component__WEBPACK_IMPORTED_MODULE_9__["TictocComponent"] },
    { path: "checkout", component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Product, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_bus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bus/bus.component */ "./src/app/bus/bus.component.ts");
/* harmony import */ var _book_bookbus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book/bookbus.service */ "./src/app/book/bookbus.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");





//import { BusService } from './bus/bus.service';
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

var AppComponent = /** @class */ (function () {
    // isUserLogged : boolean = 
    function AppComponent(busComp, bookSvc, loginSvc) {
        this.busComp = busComp;
        this.bookSvc = bookSvc;
        this.loginSvc = loginSvc;
        this.title = 'BookMyBus';
        this.user = {};
        this.product = new Product();
    }
    AppComponent.prototype.showResults = function (formData) {
        console.log('form data : ' + JSON.stringify(formData.prdId));
        this.product.prdId = formData.prdId;
        this.product.prdName = formData.prdName;
        console.log('new pd', this.product);
    };
    AppComponent.prototype.showSmartSearch = function () {
        console.log('here');
        this.busComp.showSmartSearch();
    };
    AppComponent.prototype.isUserLogged = function () {
        if (this.bookSvc.getUserLoggedStatus()) {
            this.user = this.loginSvc.getLoggedUser();
            // console.log("assinged user: "+this.user+" "+this.user.firstName);
        }
        return this.bookSvc.getUserLoggedStatus();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _bus_bus_component__WEBPACK_IMPORTED_MODULE_2__["BusComponent"] },
        { type: _book_bookbus_service__WEBPACK_IMPORTED_MODULE_3__["BookBusService"] },
        { type: _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bus_bus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bus/bus.component */ "./src/app/bus/bus.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _bus_bus_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bus/bus.filter */ "./src/app/bus/bus.filter.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _tictoc_tictoc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tictoc/tictoc.component */ "./src/app/tictoc/tictoc.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _bus_bus_component__WEBPACK_IMPORTED_MODULE_7__["BusComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_11__["BookComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"],
                _bus_bus_filter__WEBPACK_IMPORTED_MODULE_13__["BusSearchFilter"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutComponent"],
                _tictoc_tictoc_component__WEBPACK_IMPORTED_MODULE_15__["TictocComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_10__["AdminModule"]
            ],
            providers: [_bus_bus_component__WEBPACK_IMPORTED_MODULE_7__["BusComponent"], _book_book_component__WEBPACK_IMPORTED_MODULE_11__["BookComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/BookGuard.ts":
/*!***********************************!*\
  !*** ./src/app/book/BookGuard.ts ***!
  \***********************************/
/*! exports provided: BookGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookGuard", function() { return BookGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookbus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookbus.service */ "./src/app/book/bookbus.service.ts");




var BookGuard = /** @class */ (function () {
    function BookGuard(router, bookBusSvc) {
        this.router = router;
        this.bookBusSvc = bookBusSvc;
        console.log('in book auth guard : ' + bookBusSvc.isUserLogged);
    }
    BookGuard.prototype.canActivate = function (route, state) {
        if (!this.bookBusSvc.isUserLogged) {
            console.log('is not logged');
            this.router.navigateByUrl('login');
            return false;
        }
        else {
            console.log('is logged');
        }
        return true;
    };
    BookGuard.ctorParameters = function () { return [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _bookbus_service__WEBPACK_IMPORTED_MODULE_3__["BookBusService"] }
    ]; };
    BookGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
    ], BookGuard);
    return BookGuard;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bus_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bus/bus.service */ "./src/app/bus/bus.service.ts");
/* harmony import */ var _bookbus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookbus.service */ "./src/app/book/bookbus.service.ts");





var BookComponent = /** @class */ (function () {
    function BookComponent(bus, bookBusSvc, router, route) {
        this.bus = bus;
        this.bookBusSvc = bookBusSvc;
        this.router = router;
        this.route = route;
        this.bookedBus = {};
        this.ticketCount = 1;
        this.bookedBus = bookBusSvc.getBookedBus();
        //console.log('booked bus : ' + JSON.stringify(bookBusSvc.getBookedBus()))
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent.prototype.decrementTicCount = function () {
        if (this.ticketCount > 1) {
            this.ticketCount--;
        }
    };
    BookComponent.prototype.incrementTicCount = function () {
        this.ticketCount++;
    };
    BookComponent.prototype.getTotalAmt = function (fare) {
        return this.ticketCount * fare;
    };
    BookComponent.prototype.goBack = function () {
        this.router.navigateByUrl("buses");
    };
    BookComponent.prototype.proceedToCheckout = function () {
        this.router.navigateByUrl("checkout");
    };
    BookComponent.ctorParameters = function () { return [
        { type: _bus_bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"] },
        { type: _bookbus_service__WEBPACK_IMPORTED_MODULE_4__["BookBusService"] },
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/index.js!./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        })
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/book/bookbus.service.ts":
/*!*****************************************!*\
  !*** ./src/app/book/bookbus.service.ts ***!
  \*****************************************/
/*! exports provided: BookBusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookBusService", function() { return BookBusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookBusService = /** @class */ (function () {
    function BookBusService() {
        this.isUserLogged = false;
    }
    BookBusService.prototype.setBookedBus = function (bus) {
        //   console.log('before setting : ' + this.bookedBus)
        this.bookedBus = bus;
        //   console.log('after setting : ' + JSON.stringify(this.bookedBus))
    };
    BookBusService.prototype.getBookedBus = function () {
        //  console.log('before getting : ' + JSON.stringify(this.bookedBus))
        return this.bookedBus;
    };
    BookBusService.prototype.setUserLoggedStatus = function (status) {
        //  console.log('before user logged : ' + this.isUserLogged)
        this.isUserLogged = status;
        //  console.log('after setting : ' + this.isUserLogged)
    };
    BookBusService.prototype.getUserLoggedStatus = function () {
        // console.log('getting user logged status : ' + this.isUserLogged)
        return this.isUserLogged;
    };
    BookBusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], BookBusService);
    return BookBusService;
}());



/***/ }),

/***/ "./src/app/bus/bus.component.css":
/*!***************************************!*\
  !*** ./src/app/bus/bus.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1cy9idXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bus/bus.component.ts":
/*!**************************************!*\
  !*** ./src/app/bus/bus.component.ts ***!
  \**************************************/
/*! exports provided: BusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusComponent", function() { return BusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bus.service */ "./src/app/bus/bus.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_bookbus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book/bookbus.service */ "./src/app/book/bookbus.service.ts");




//import { BookComponent } from '../book/book.component';

var BusComponent = /** @class */ (function () {
    function BusComponent(busService, route, router, bookBusSvc) {
        var _this = this;
        this.busService = busService;
        this.route = route;
        this.router = router;
        this.bookBusSvc = bookBusSvc;
        this.isUserLoggedIn = false;
        this.selectedFromCity = "";
        this.selectedToCity = "";
        this.cities = [];
        this.fromCities = [];
        this.toCities = [];
        this.BUSES = [];
        this.buses = [];
        this.toggleSmartSearch = false;
        busService.getAllBuses().subscribe(function (BUSES) {
            _this.BUSES = BUSES;
            _this.buses = _this.BUSES;
            console.log('Buses found : ' + _this.buses.length);
        });
        busService.getAllCities().subscribe(function (CITIES) {
            _this.cities = CITIES.map(function (c) { return c.name.toLocaleLowerCase(); }).sort();
            _this.fromCities = _this.cities;
            _this.toCities = _this.cities;
            console.log('total cities found length:' + _this.cities.length);
        });
    }
    BusComponent.prototype.getAllBuses = function () {
        return this.buses = this.BUSES;
    };
    BusComponent.prototype.getSelectedFromCity = function (city) {
        var _this = this;
        console.log('selected from city : ' + city);
        this.selectedFromCity = city.toLocaleLowerCase();
        if (this.selectedToCity !== "" && this.selectedToCity != null && this.selectedToCity != undefined) {
            this.BUSES.filter(function (bus) { return console.log(bus.toCity.toLocaleLowerCase() + "*" + _this.selectedToCity.toLocaleLowerCase() + "*" + bus.fromCity.toLocaleLowerCase() + "**" + _this.selectedFromCity.toLocaleLowerCase()); });
            console.log(this.buses.length);
            this.buses = this.BUSES.filter(function (bus) { return bus.toCity.toLocaleLowerCase() === _this.selectedToCity.toLocaleLowerCase() && bus.fromCity.toLocaleLowerCase() === _this.selectedFromCity.toLocaleLowerCase(); });
            console.log(this.buses.length);
        }
        else if (this.selectedFromCity !== "" && this.selectedFromCity != null && this.selectedFromCity != undefined) {
            //check whether it's coming here when we didn't select to city
            console.log(this.BUSES.forEach(function (bus) { return console.log(bus.fromCity.toLocaleLowerCase() + "*" + city.toLocaleLowerCase()); }));
            this.buses = this.BUSES.filter(function (bus) { return bus.fromCity.toLocaleLowerCase() === city.toLocaleLowerCase(); });
            console.log(this.buses.length);
        }
        //else this.buses = this.BUSES;
        //update to city list
        this.toCities = this.cities.filter(function (city) { return city != _this.selectedFromCity.toLocaleLowerCase(); });
    };
    BusComponent.prototype.getSelectedToCity = function (city) {
        var _this = this;
        // let tempBusList  = this.buses;
        //console.log(tempBusList.length)
        //console.log('seleted to city : ' + city)
        this.getSelectedFromCity(this.selectedFromCity.toLocaleLowerCase());
        if (this.selectedToCity !== "" && this.selectedToCity != null && this.selectedToCity != undefined) {
            console.log("before entering to filter: " + this.buses.length);
            this.buses = this.buses.filter(function (bus) { return bus.toCity.toLocaleLowerCase() == city.toLocaleLowerCase(); });
            console.log("after entering to filter: " + this.buses.length);
        }
        else
            this.buses = this.buses;
        this.fromCities = this.cities.filter(function (city) { return city.toLocaleLowerCase() != _this.selectedToCity.toLocaleLowerCase(); });
    };
    BusComponent.prototype.handleBook = function (busId) {
        //   if (this.isUserLoggedIn)
        this.bookBusSvc.setBookedBus(this.buses.find(function (bus) { return bus._id === busId; }));
        this.router.navigate(['book']);
        //   else
        //   this.router.navigateByUrl('login')
        console.log("user not signed in");
        //this.bookBusSvc.getBookedBus();
        console.log('route ' + busId);
    };
    BusComponent.prototype.showSmartSearch = function () {
        this.toggleSmartSearch = !this.toggleSmartSearch;
    };
    BusComponent.prototype.ngOnInit = function () {
    };
    BusComponent.ctorParameters = function () { return [
        { type: _bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _book_bookbus_service__WEBPACK_IMPORTED_MODULE_4__["BookBusService"] }
    ]; };
    BusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bus',
            template: __webpack_require__(/*! raw-loader!./bus.component.html */ "./node_modules/raw-loader/index.js!./src/app/bus/bus.component.html"),
            styles: [__webpack_require__(/*! ./bus.component.css */ "./src/app/bus/bus.component.css")]
        })
    ], BusComponent);
    return BusComponent;
}());



/***/ }),

/***/ "./src/app/bus/bus.filter.ts":
/*!***********************************!*\
  !*** ./src/app/bus/bus.filter.ts ***!
  \***********************************/
/*! exports provided: BusSearchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusSearchFilter", function() { return BusSearchFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BusSearchFilter = /** @class */ (function () {
    function BusSearchFilter() {
    }
    BusSearchFilter.prototype.transform = function (buses, busNo, fromCity, toCity) {
        if (busNo) {
            console.log('found search : ' + busNo);
            buses = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](buses.filter(function (bus) { return bus.busRouteNo.toLocaleLowerCase().startsWith(busNo.toLocaleLowerCase()); }));
            console.log(buses);
        }
        if (fromCity) {
            console.log('from city : ' + fromCity);
            buses = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](buses.filter(function (bus) { return bus.fromCity.toLocaleLowerCase().startsWith(fromCity.toLocaleLowerCase()); }));
        }
        if (toCity) {
            console.log('to city : ' + toCity);
            buses = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](buses.filter(function (bus) { return bus.toCity.toLocaleLowerCase().startsWith(toCity.toLocaleLowerCase()); }));
        }
        return buses;
    };
    BusSearchFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "busSearchFilter"
        })
    ], BusSearchFilter);
    return BusSearchFilter;
}());



/***/ }),

/***/ "./src/app/bus/bus.service.ts":
/*!************************************!*\
  !*** ./src/app/bus/bus.service.ts ***!
  \************************************/
/*! exports provided: BusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusService", function() { return BusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PROTOCOL = "";
var PORT = "";
var SERVER = "/api/";
var BusService = /** @class */ (function () {
    function BusService(http) {
        this.http = http;
    }
    BusService.prototype.getAllBuses = function () {
        console.log("trying to call express server...");
        return this.http.get("" + PROTOCOL + PORT + SERVER + "buses");
    };
    BusService.prototype.getAllCities = function () {
        return this.http.get("" + PROTOCOL + PORT + SERVER + "cities");
    };
    BusService.prototype.addBus = function (bus) {
        return this.http.post("" + PROTOCOL + PORT + SERVER + "addBus", bus);
    };
    BusService.prototype.deleteBus = function (busId) {
        console.log("busid : " + busId);
        return this.http.post("" + PROTOCOL + PORT + SERVER + "deleteBus", busId);
    };
    BusService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], BusService);
    return BusService;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(router, route) {
        this.router = router;
        this.route = route;
        console.log("check out called");
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        paypal.Buttons({
            // Set up the transaction
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                            amount: {
                                value: '0.01',
                                currency_code: 'USD'
                            }
                        }]
                });
            },
            // Finalize the transaction
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    // Show a success message to the buyer
                    alert('Transaction completed by ' + details.payer.name.given_name + '!');
                });
            }
        }).render('#paypal-button-container');
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-dirty.ng-invalid{border: 2px solid red}\r\ninput.ng-dirty.ng-valid{border:green}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEIscUJBQXFCO0FBQy9DLHdCQUF3QixZQUFZIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWR7Ym9yZGVyOiAycHggc29saWQgcmVkfVxyXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZHtib3JkZXI6Z3JlZW59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_bookbus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book/bookbus.service */ "./src/app/book/bookbus.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, route, bookBusSvc) {
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.bookBusSvc = bookBusSvc;
        this.user = {
            userName: "",
            password: ""
        };
        this.loginError = null;
        this.isLogged = false;
    }
    LoginComponent.prototype.handleLogin = function () {
        var _this = this;
        //console.log(this.user.userName + "fe " + this.user.password)
        this.loginService.login(this.user).subscribe(function (res) {
            if (res == null || res == undefined) {
                _this.loginError = "In valid user details. Try again";
                _this.user.userName = "";
                _this.user.password = "";
                _this.router.navigateByUrl("login");
            }
            else {
                console.log("Hurray! Successfully logged in!!");
                _this.loginError = null;
                _this.isLogged = true;
                _this.bookBusSvc.setUserLoggedStatus(true);
                _this.loginService.setLoggedUser(res.data);
                _this.loginService.setLoggedUserToken(res.token);
                console.log("user's token: " + _this.loginService.getLoggedUserToken());
                console.log("logged in user dtls :" + _this.loginService.getLoggedUser());
                if (_this.bookBusSvc.getBookedBus() != null || _this.bookBusSvc.getBookedBus() != undefined)
                    _this.router.navigateByUrl("book");
                else
                    _this.router.navigateByUrl("buses");
            }
        });
    };
    LoginComponent.prototype.redirectToSignIn = function () {
        this.router.navigateByUrl("signin");
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _book_bookbus_service__WEBPACK_IMPORTED_MODULE_4__["BookBusService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());

//AY2rQU4wQ68lagYPSWYkLk1QD2dp6hUdmPetb1AzCmUjaetyZ-cqwFDuxTMa0oFyiCoZ4ZVe6mZBzwK3
//logesh.jeppiaar-facilitator@gmail.com


/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PROTOCOL = "";
var PORT = "";
var SERVER = "api/";
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.isUserLoggedIn = false;
        this.loggedUserToken = null;
    }
    LoginService.prototype.login = function (user) {
        //console.log('here'+user.userName+" "+user.password+" - "+`${PROTOCOL}${PORT}login`)
        return this.http.post("" + PROTOCOL + PORT + SERVER + "login", user);
    };
    LoginService.prototype.setLoggedUser = function (user) {
        this.loggedUser = user;
    };
    LoginService.prototype.getLoggedUser = function () {
        return this.loggedUser;
    };
    LoginService.prototype.setLoggedUserToken = function (token) {
        this.loggedUserToken = token;
    };
    LoginService.prototype.getLoggedUserToken = function () {
        return this.loggedUserToken;
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-dirty.ng-invalid{border: red}\r\ninput.ng-dirty.ng-valid{border:green}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQixXQUFXO0FBQ3JDLHdCQUF3QixZQUFZIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctZGlydHkubmctaW52YWxpZHtib3JkZXI6IHJlZH1cclxuaW5wdXQubmctZGlydHkubmctdmFsaWR7Ym9yZGVyOmdyZWVufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.service */ "./src/app/signin/signin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SigninComponent = /** @class */ (function () {
    function SigninComponent(signInService, router, route) {
        this.signInService = signInService;
        this.router = router;
        this.route = route;
        this.signin = {
            firstName: "",
            lastName: "",
            emailId: "",
            userName: null,
            password: "",
            confirmPassword: ""
        };
        this.userNameToggle = false;
        this.userNameResp = null;
        this.canProceed = true;
        this.visited = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.setUserId = function () {
        var _this = this;
        console.log('called' + this.userNameToggle);
        this.userNameToggle = !this.userNameToggle;
        if (this.userNameToggle) {
            this.signin.userName = this.signin.emailId.toString().substring(0, this.signin.emailId.indexOf('@')).toLowerCase();
            this.signInService.checkUserNameAvailability(this.signin.userName).subscribe(function (res) {
                console.log('found resp.');
                if (res) { //UserNameAvailable
                    _this.userNameResp = "User name Available";
                    _this.canProceed = true;
                }
                else { // need to highlight the field
                    _this.userNameResp = "User name already taken. Please enter new User name";
                    _this.canProceed = false;
                }
            });
        }
        else {
            this.signin.userName = null;
            this.canProceed = false;
        }
    };
    SigninComponent.prototype.getUserName = function (event) {
        var _this = this;
        var user = this.signin.userName.toLowerCase();
        console.log("user:" + user + " " + user.length);
        if (user.length >= 3) {
            this.visited = true;
            this.signInService.checkUserNameAvailability(this.signin.userName.toLowerCase()).subscribe(function (res) {
                if (res) { //UserNameAvailable
                    _this.userNameResp = "User name Available";
                    _this.canProceed = true;
                }
                else { // need to highlight the field
                    _this.userNameResp = "User name already taken. Please enter new User name";
                    _this.canProceed = false;
                }
            });
            // } else {
            //   if (this.visited) {
            //     this.signin.userName = null;
            //     this.canProceed = false;
            //   }else this.visited = false;
        }
    };
    SigninComponent.prototype.getValidationMessages = function (state, name) {
        var field = state.path;
        var errors = [];
        if (state.errors) {
            for (var error in state.errors) {
                switch (error) {
                    case "required":
                        errors.push("You must enter " + field);
                        break;
                    case "minlength":
                        errors.push(field + " must contain " + state.errors['minlength'].requiredLength + " characters");
                        break;
                    case "pattern":
                        if (field.toString().includes("email"))
                            errors.push(field + " contains illegal characters. for example ...try entering foo@bar.com");
                        else
                            errors.push(field + " contains illegal characters");
                        break;
                }
            }
        }
        return errors;
    };
    SigninComponent.prototype.register = function (form) {
        var _this = this;
        console.log('reg mtds');
        if (!this.confirmPasswordCheck(this.signin.confirmPassword))
            alert("Password mismatch!...password and confirm password are not equal..Try entering agian!");
        else {
            if (form.valid) {
                console.log('printing whole singin comp: ' + JSON.stringify(this.signin));
                this.signInService.addUser(this.signin).subscribe(function (res) {
                    if (res != null || res != undefined) {
                        alert("Sucessfully registered!");
                        _this.router.navigateByUrl("login");
                    }
                    else {
                        alert("An error occured while registering..Try again later");
                        _this.router.navigateByUrl("buses");
                    }
                });
            }
            else {
                console.log('sorry invalid form');
            }
        }
    };
    SigninComponent.prototype.confirmPasswordCheck = function (confirmPassword) {
        return this.signin.confirmPassword === "" || this.signin.password == confirmPassword;
    };
    SigninComponent.prototype.goBack = function () {
        this.router.navigateByUrl("buses");
    };
    SigninComponent.ctorParameters = function () { return [
        { type: _signin_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        })
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.service.ts":
/*!******************************************!*\
  !*** ./src/app/signin/signin.service.ts ***!
  \******************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PROTOCOL = "";
var PORT = "";
var SERVER = "api/";
var SignInService = /** @class */ (function () {
    function SignInService(http) {
        this.http = http;
        this.isUserLoggedIn = false;
    }
    SignInService.prototype.signIn = function (user) {
        // console.log('here'+user.userName+" "+user.password+" - "+`${PROTOCOL}${PORT}login`)
        return this.http.post("" + PROTOCOL + PORT + SERVER + "login", user);
    };
    SignInService.prototype.checkUserNameAvailability = function (userName) {
        //console.log('sending userName to server for availability check, passing  username:' + userName.toLowerCase());
        return this.http.post("" + PROTOCOL + PORT + SERVER + "userName", { "userName": userName });
    };
    SignInService.prototype.addUser = function (user) {
        console.log('user :' + user + ' sent for adding to db');
        return this.http.post("" + PROTOCOL + PORT + SERVER + "addUser", user);
    };
    SignInService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], SignInService);
    return SignInService;
}());



/***/ }),

/***/ "./src/app/tictoc/tictoc.component.css":
/*!*********************************************!*\
  !*** ./src/app/tictoc/tictoc.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mydiv{\r\n    background: aqua;\r\n    width: 60px;\r\n    margin-left: 20px;\r\n    padding-top: 2px;\r\n    border: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGljdG9jL3RpY3RvYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3RpY3RvYy90aWN0b2MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteWRpdntcclxuICAgIGJhY2tncm91bmQ6IGFxdWE7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIGJvcmRlcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tictoc/tictoc.component.ts":
/*!********************************************!*\
  !*** ./src/app/tictoc/tictoc.component.ts ***!
  \********************************************/
/*! exports provided: TictocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TictocComponent", function() { return TictocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tictoc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tictoc.service */ "./src/app/tictoc/tictoc.service.ts");



var TictocComponent = /** @class */ (function () {
    function TictocComponent(svc) {
        this.svc = svc;
        this.oneone = false;
        this.tiles = [];
        this.counter = 0;
    }
    TictocComponent.prototype.ngOnInit = function () {
    };
    TictocComponent.prototype.fillTile = function (tile) {
        var _this = this;
        console.log("tile found : " + tile);
        this.oneone = true;
        if (this.counter % 2 == 0)
            this.player = 'X';
        else
            this.player = 'O';
        this.tiles[tile] = this.player;
        console.log(this.tiles);
        this.counter++;
        this.tile = tile;
        this.svc.addEntry(this.tile, this.player).subscribe(function (res) {
            _this.result = res.response;
            console.log("res : " + _this.result);
        });
    };
    TictocComponent.prototype.call = function () {
        console.log("call");
    };
    TictocComponent.ctorParameters = function () { return [
        { type: _tictoc_service__WEBPACK_IMPORTED_MODULE_2__["TicTocService"] }
    ]; };
    TictocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tictoc',
            template: __webpack_require__(/*! raw-loader!./tictoc.component.html */ "./node_modules/raw-loader/index.js!./src/app/tictoc/tictoc.component.html"),
            styles: [__webpack_require__(/*! ./tictoc.component.css */ "./src/app/tictoc/tictoc.component.css")]
        })
    ], TictocComponent);
    return TictocComponent;
}());



/***/ }),

/***/ "./src/app/tictoc/tictoc.service.ts":
/*!******************************************!*\
  !*** ./src/app/tictoc/tictoc.service.ts ***!
  \******************************************/
/*! exports provided: TicTocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTocService", function() { return TicTocService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PROTOCOL = "http://localhost:";
var PORT = "8080/";
var TicTocService = /** @class */ (function () {
    function TicTocService(http) {
        this.http = http;
    }
    TicTocService.prototype.addEntry = function (move, player) {
        // console.log('here'+user.userName+" "+user.password+" - "+`${PROTOCOL}${PORT}login`)
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('move', move).set('player', player);
        return this.http.post("" + PROTOCOL + PORT + "tictoc", params);
    };
    TicTocService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TicTocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], TicTocService);
    return TicTocService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\My works\HerokuDplymt\BooyMyBusApp\BookMyBus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map