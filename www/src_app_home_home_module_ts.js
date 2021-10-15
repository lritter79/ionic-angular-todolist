(self["webpackChunkionic_take_2"] = self["webpackChunkionic_take_2"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3804:
/*!****************************************************************!*\
  !*** ./src/app/home/components/add-todo/add-todo.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTodoComponent": () => (/* binding */ AddTodoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_add_todo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-todo.component.html */ 2002);
/* harmony import */ var _add_todo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo.component.scss */ 1676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3324);





let AddTodoComponent = class AddTodoComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.todoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            //Validators.compose takes multiple vaidators with differetnt rules sets and bundles them
            todoText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(4)])),
            todoNotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        });
    }
    //call this method on submit for the form
    addTodo() {
        if (this.todoForm.valid) {
            const color = `rgb(${this.randomNumber(0, 255)}, ${this.randomNumber(0, 255)}, ${this.randomNumber(0, 255)})`;
            //get() takes in the comntrol's name
            const newTodo = { color,
                text: this.todoForm.get('todoText').value,
                id: this.todos.length,
                notes: this.todoForm.get('todoNotes').value };
            this.todos.push(newTodo);
            console.log(this.todos);
            this.todoForm.reset();
        }
        //this.todoText = '';
        //this.todoNotes = '';
    }
    randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id).map((oldTodo, i) => (this.mapTodo(oldTodo, i)));
    }
    mapTodo(oldTodo, i) {
        return Object.assign(Object.assign({}, oldTodo), { id: i });
    }
    ngOnInit() {
    }
};
AddTodoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
AddTodoComponent.propDecorators = {
    todos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AddTodoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-add-todo',
        template: _raw_loader_add_todo_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_todo_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddTodoComponent);



/***/ }),

/***/ 9007:
/*!*************************************************************!*\
  !*** ./src/app/home/components/add-todo/add-todo.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTodoComponentModule": () => (/* binding */ AddTodoComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _add_todo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo.component */ 3804);
/* harmony import */ var _todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo-list/todo-list.module */ 1416);







let AddTodoComponentModule = class AddTodoComponentModule {
};
AddTodoComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_1__.TodoListModule
        ],
        declarations: [_add_todo_component__WEBPACK_IMPORTED_MODULE_0__.AddTodoComponent],
        exports: [_add_todo_component__WEBPACK_IMPORTED_MODULE_0__.AddTodoComponent]
    })
], AddTodoComponentModule);



/***/ }),

/***/ 2700:
/*!******************************************************************!*\
  !*** ./src/app/home/components/todo-list/todo-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoListComponent": () => (/* binding */ TodoListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_todo_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./todo-list.component.html */ 7441);
/* harmony import */ var _todo_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.component.scss */ 4249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let TodoListComponent = class TodoListComponent {
    constructor() {
        this.todoIdToDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        var _a;
        console.log((_a = this.todos[0]) === null || _a === void 0 ? void 0 : _a.color);
    }
    deleteTodo(todoId) {
        //console.log(todoId);
        //console.log(this.todos);
        //this.todos = this.todos.filter(todo => todo.id !== todoId).map((oldTodo, i) => ({color: oldTodo.color, text: oldTodo.text, id: i}));
        //console.log(this.todos);
        this.todoIdToDelete.emit(todoId);
    }
};
TodoListComponent.ctorParameters = () => [];
TodoListComponent.propDecorators = {
    todos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    todoIdToDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TodoListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-todo-list',
        template: _raw_loader_todo_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_todo_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TodoListComponent);



/***/ }),

/***/ 1416:
/*!***************************************************************!*\
  !*** ./src/app/home/components/todo-list/todo-list.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoListModule": () => (/* binding */ TodoListModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list.component */ 2700);
/* harmony import */ var _todo_todo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo/todo.module */ 6000);






let TodoListModule = class TodoListModule {
};
TodoListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _todo_todo_module__WEBPACK_IMPORTED_MODULE_1__.TodoModule
        ],
        declarations: [_todo_list_component__WEBPACK_IMPORTED_MODULE_0__.TodoListComponent],
        exports: [_todo_list_component__WEBPACK_IMPORTED_MODULE_0__.TodoListComponent]
    })
], TodoListModule);



/***/ }),

/***/ 611:
/*!********************************************************!*\
  !*** ./src/app/home/components/todo/todo.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoComponent": () => (/* binding */ TodoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_todo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./todo.component.html */ 5526);
/* harmony import */ var _todo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.component.scss */ 4489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);




let TodoComponent = class TodoComponent {
    constructor() {
        this.todoIdToDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.showNotes = true;
    }
    ngOnInit() {
        console.log(this.todo.color);
        //const el = document.querySelector<HTMLElement>('.todo-text');
        //el.style.setProperty('color', );
    }
    toggleShowNotes(notes) {
        this.showNotes = !notes;
    }
    deleteTodo(todoId) {
        //emit passes todoId to the parent component, which eventually passes it to the grand parent where the todo array is stored
        this.todoIdToDelete.emit(todoId);
    }
};
TodoComponent.ctorParameters = () => [];
TodoComponent.propDecorators = {
    todo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    indexOfElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    todoIdToDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TodoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-todo',
        template: _raw_loader_todo_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_todo_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TodoComponent);



/***/ }),

/***/ 6000:
/*!*****************************************************!*\
  !*** ./src/app/home/components/todo/todo.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoModule": () => (/* binding */ TodoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _todo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.component */ 611);





let TodoModule = class TodoModule {
};
TodoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        ],
        declarations: [_todo_component__WEBPACK_IMPORTED_MODULE_0__.TodoComponent],
        exports: [_todo_component__WEBPACK_IMPORTED_MODULE_0__.TodoComponent]
    })
], TodoModule);



/***/ }),

/***/ 5089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 5089);
/* harmony import */ var _components_add_todo_add_todo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-todo/add-todo.module */ 9007);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _components_add_todo_add_todo_module__WEBPACK_IMPORTED_MODULE_2__.AddTodoComponentModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
        this.todos = [];
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 1676:
/*!******************************************************************!*\
  !*** ./src/app/home/components/add-todo/add-todo.component.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card-title {\n  font-weight: bold;\n  font-size: 25px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJhZGQtdG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 4249:
/*!********************************************************************!*\
  !*** ./src/app/home/components/todo-list/todo-list.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  transition: visibility 1.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0YiLCJmaWxlIjoidG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMS41cztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 4489:
/*!**********************************************************!*\
  !*** ./src/app/home/components/todo/todo.component.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: chartreuse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBjaGFydHJldXNlO1xufVxuIl19 */");

/***/ }),

/***/ 2002:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/add-todo/add-todo.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <div class=\"flex-center\">\n\n    <ion-card>\n      <ion-card-title class=\"flex-center\" color=\"success\">Add A Todo</ion-card-title>\n      <ion-card-subtitle class=\"flex-center\">Just enter the text and click the button</ion-card-subtitle>\n      <ion-card-content>\n        <form [formGroup]=\"todoForm\" (ngSubmit)=\"addTodo()\">\n          <ion-item>\n            <ion-label position=\"floating\">Enter Your Todo Item</ion-label>\n            <ion-input type=\"text\" formControlName=\"todoText\"></ion-input>\n          </ion-item>\n          <ion-item\n          *ngIf=\"!todoForm.controls.todoText.valid\"\n        >\n          <p>Please enter a Todo Item with at least 4 characters.</p>\n        </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Enter Any Notes About Your Item</ion-label>\n            <ion-input type=\"text\" formControlName=\"todoNotes\"></ion-input>\n          </ion-item>\n          <ion-button color=\"success\" [disabled]=\"!todoForm.valid\" type=\"submit\" size=\"full\">Submit</ion-button>\n        </form>\n        <!-- the $event is the id being emitted by the child component -->\n        <app-todo-list [todos]=todos (todoIdToDelete)=\"removeTodo($event)\"></app-todo-list>\n      </ion-card-content>\n    </ion-card>\n\n\n\n  </div>\n\n");

/***/ }),

/***/ 7441:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/todo-list/todo-list.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <ion-list *ngFor=\"let todo of todos;let indexOfelement=index;\">\n\n      <app-todo [indexOfElement]=indexOfelement [todo]=todo (todoIdToDelete)=\"deleteTodo($event)\"></app-todo>\n\n  </ion-list>\n\n</div>\n\n");

/***/ }),

/***/ 5526:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/todo/todo.component.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-item lines=\"full\">\n  <ion-button (click)=\"showNotes = !showNotes\" slot=\"start\" color=\"primary\">{{showNotes ?'Hide' : 'Show'}} Notes</ion-button>\n  <ion-button (click)=\"deleteTodo(todo.id)\" slot=\"end\" color=\"danger\">X</ion-button>\n  <ion-label>\n    <ion-text>\n      <h1 [style.color]=\"todo.color\" class=\"todo-text\">{{ (+indexOfElement+1) + '. ' + todo.text}}</h1>\n    </ion-text>\n    <ion-note *ngIf=showNotes>\n      {{todo.notes}}\n    </ion-note>\n  </ion-label>\n</ion-item>\n\n\n");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      To Do List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<app-add-todo [todos]=todos></app-add-todo>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map