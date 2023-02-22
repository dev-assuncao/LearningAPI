(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _produtos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtos/cadastro/cadastro.component */ "./src/app/produtos/cadastro/cadastro.component.ts");
/* harmony import */ var _produtos_lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtos/lista/lista.component */ "./src/app/produtos/lista/lista.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");






var routes = [
    { path: '', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'cadastro-produtos', component: _produtos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"] },
    { path: 'lista-produtos', component: _produtos_lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ListaComponent"] },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Novo Produto - DevIO.App</title>\n\n\n  <link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" rel=\"stylesheet\"\n    integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\"\n    integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\">\n\n</head>\n\n<body>\n  <app-menu></app-menu>\n  \n  <div class=\"container\" style=\"min-height: 800px\">\n    <main role=\"main\" class=\"pb-3\">\n\n      <router-outlet></router-outlet>\n\n    </main>\n  </div>\n\n  <footer class=\"border-top footer text-muted\">\n    <div class=\"container\">\n      © 2019 - Minha App MVC - <a href=\"mailto:contato@meudomain.com\">contato@meudomain.com</a> - <a\n        href=\"mailto:suporte@desenvolvedor.io\">suporte@desenvolvedor.io</a>\n    </div>\n  </footer>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _produtos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./produtos/cadastro/cadastro.component */ "./src/app/produtos/cadastro/cadastro.component.ts");
/* harmony import */ var _produtos_services_produtoService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./produtos/services/produtoService */ "./src/app/produtos/services/produtoService.ts");
/* harmony import */ var _produtos_lista_lista_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./produtos/lista/lista.component */ "./src/app/produtos/lista/lista.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_userService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/userService */ "./src/app/user/userService.ts");
/* harmony import */ var _user_menu_menu_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/menu/menu.user.component */ "./src/app/user/menu/menu.user.component.ts");
/* harmony import */ var _base_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./base/menu/menu.component */ "./src/app/base/menu/menu.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _produtos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_7__["CadastroComponent"],
                _produtos_lista_lista_component__WEBPACK_IMPORTED_MODULE_9__["ListaComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _user_menu_menu_user_component__WEBPACK_IMPORTED_MODULE_12__["MenuUserComponent"],
                _base_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _produtos_services_produtoService__WEBPACK_IMPORTED_MODULE_8__["ProdutoService"],
                _user_userService__WEBPACK_IMPORTED_MODULE_11__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base/baseService.ts":
/*!*************************************!*\
  !*** ./src/app/base/baseService.ts ***!
  \*************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var BaseService = /** @class */ (function () {
    function BaseService() {
        this.UrlServiceV1 = "https://localhost:44320/api/";
    }
    //protected UrlServiceV1: string = "https://devioapi.azurewebsites.net/api/v1/";
    BaseService.prototype.ObterHeaderFormData = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Disposition': 'form-data; name="produto"',
                'Authorization': "Bearer " + this.obterTokenUsuario()
            })
        };
    };
    BaseService.prototype.ObterHeaderJson = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    };
    BaseService.prototype.ObterAuthHeaderJson = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.obterTokenUsuario()
            })
        };
    };
    BaseService.prototype.extractData = function (response) {
        return response.data || {};
    };
    BaseService.prototype.obterUsuario = function () {
        return JSON.parse(localStorage.getItem('app.user'));
    };
    BaseService.prototype.obterTokenUsuario = function () {
        return localStorage.getItem('app.token');
    };
    BaseService.prototype.serviceError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            errMsg = error.status + " - " + (error.statusText || '');
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/base/menu/menu.component.html":
/*!***********************************************!*\
  !*** ./src/app/base/menu/menu.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\n      <div class=\"container\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/lista-produtos']\">DevIO.App</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\">\n          <app-menu-user></app-menu-user>\n          <ul class=\"navbar-nav flex-grow-1\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link text-dark\" [routerLink]=\"['/cadastro-produtos']\">Cadastro Produtos</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link text-dark\" [routerLink]=\"['/lista-produtos']\">Lista Produtos</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </header>"

/***/ }),

/***/ "./src/app/base/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/base/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/base/menu/menu.component.html")
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/produtos/cadastro/cadastro.component.html":
/*!***********************************************************!*\
  !*** ./src/app/produtos/cadastro/cadastro.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 style=\"padding-top: 50px\">Novo Produto </h3>\n\n<hr>\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <form enctype=\"multipart/form-data\" (ngSubmit)=\"cadastrarProduto()\" [formGroup]=\"produtoForm\">\n\n\n      <div class=\"alert alert-danger\" *ngIf=\"errors.length > 0\">\n        <h3 id=\"msgRetorno\">Opa! Alguma coisa não deu certo:</h3>\n        <ul>\n          <li *ngFor=\"let error of errors\">{{ error }}</li>\n        </ul>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"FornecedorId\">Fornecedor</label>\n        <select class=\"form-control\" data-val=\"true\" formControlName=\"fornecedorId\"\n          data-val-required=\"O campo Fornecedor é obrigatório\" id=\"FornecedorId\" name=\"FornecedorId\">\n          <option></option>\n          <option *ngFor='let fornecedor of fornecedores' value=\"{{ fornecedor.id }}\">{{ fornecedor.nome }}</option>\n        </select>\n\n        <span class=\"text-danger field-validation-valid\" data-valmsg-for=\"FornecedorId\"\n          data-valmsg-replace=\"true\"></span>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"Nome\">Nome</label>\n        <input formControlName=\"nome\" class=\"form-control\" type=\"text\" data-val=\"true\"\n          data-val-length=\"O campo Nome precisa ter entre 2 e 200 caracteres\" data-val-length-max=\"200\"\n          data-val-length-min=\"2\" data-val-required=\"O campo Nome é obrigatório\" id=\"Nome\" maxlength=\"200\" name=\"Nome\"\n          value=\"\">\n        <span class=\"text-danger field-validation-valid\" data-valmsg-for=\"Nome\" data-valmsg-replace=\"true\"></span>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"Descricao\">Descrição</label>\n        <textarea formControlName=\"descricao\" cols=\"40\" rows=\"5\" class=\"form-control\" data-val=\"true\"\n          data-val-length=\"O campo Descrição precisa ter entre 2 e 1000 caracteres\" data-val-length-max=\"1000\"\n          data-val-length-min=\"2\" data-val-required=\"O campo Descrição é obrigatório\" id=\"Descricao\" maxlength=\"1000\"\n          name=\"Descricao\"></textarea>\n        <span class=\"text-danger field-validation-valid\" data-valmsg-for=\"Descricao\" data-valmsg-replace=\"true\"></span>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"ImagemUpload\">Imagem do Produto</label>\n\n        <div class=\"custom-file\">\n          <input accept=\"image/jpeg\" #fileInput (change)=\"upload(fileInput.files)\" formControlName=\"imagemUpload\"\n            type=\"file\" class=\"custom-file-input\" id=\"ImagemUpload\" name=\"ImagemUpload\" data-val=\"true\"\n            data-val-required=\"Preencha o campo Imagem\">\n          <label data-browse=\"Procurar\" style=\"width: 400px\" class=\"custom-file-label\" for=\"ImagemUpload\"></label>\n          <label *ngIf=\"imagemNome\" id=\"img_nome\">{{imagemNome}}</label>\n        </div>\n\n        <span class=\"text-danger field-validation-valid\" data-valmsg-for=\"ImagemUpload\"\n          data-valmsg-replace=\"true\"></span>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"Valor\">Valor</label>\n        <input formControlName=\"valor\" class=\"form-control\" type=\"text\" data-val=\"true\"\n          data-val-moeda=\"Moeda em formato inválido\" data-val-number=\"Moeda em formato inválido\"\n          data-val-required=\"O campo Valor é obrigatório\" id=\"Valor\" name=\"Valor\" value=\"0,00\">\n        <span class=\"text-danger field-validation-valid\" data-valmsg-for=\"Valor\" data-valmsg-replace=\"true\"></span>\n      </div>\n      <div class=\"form-group form-check\">\n        <label class=\"form-check-label\">\n          <input formControlName=\"ativo\" class=\"form-check-input\" type=\"checkbox\" data-val=\"true\"\n            data-val-required=\"The Ativo? field is required.\" id=\"Ativo\" name=\"Ativo\" value=\"true\"> Ativo?\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" value=\"Cadastrar\" class=\"btn btn-primary\">\n        <a class=\"btn btn-info\" [routerLink]=\"['/lista-produtos']\">Voltar</a>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/produtos/cadastro/cadastro.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/produtos/cadastro/cadastro.component.ts ***!
  \*********************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_produtoService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/produtoService */ "./src/app/produtos/services/produtoService.ts");





var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(fb, router, produtoService) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.produtoService = produtoService;
        this.errors = [];
        this.produtoService.obterFornecedores()
            .subscribe(function (fornecedores) { return _this.fornecedores = fornecedores; }, function (fail) { return _this.errors = fail.error.errors; });
        this.imagemForm = new FormData();
    }
    CadastroComponent.prototype.ngOnInit = function () {
        this.produtoForm = this.fb.group({
            fornecedorId: '',
            nome: '',
            descricao: '',
            imagemUpload: '',
            imagem: '',
            valor: '0',
            ativo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            nomeFornecedor: ''
        });
    };
    CadastroComponent.prototype.cadastrarProduto = function () {
        var _this = this;
        if (this.produtoForm.valid && this.produtoForm.dirty) {
            var produtoForm = Object.assign({}, this.produto, this.produtoForm.value);
            produtoForm.ativo = this.produtoForm.get('ativo').value;
            this.produtoHandle(produtoForm)
                .subscribe(function (result) { _this.onSaveComplete(result); }, function (fail) { _this.onError(fail); });
        }
    };
    CadastroComponent.prototype.onSaveComplete = function (response) {
        this.router.navigate(['/lista-produtos']);
    };
    CadastroComponent.prototype.onError = function (fail) {
        this.errors = fail.error.errors;
    };
    CadastroComponent.prototype.produtoHandleAlternativo = function (produto) {
        var formdata = new FormData();
        produto.imagem = this.imagemNome;
        produto.imagemUpload = null;
        formdata.append('produto', JSON.stringify(produto));
        formdata.append('ImagemUpload', this.imagemForm, this.imagemNome);
        return this.produtoService.registrarProdutoAlternativo(formdata);
    };
    CadastroComponent.prototype.produtoHandle = function (produto) {
        produto.imagemUpload = this.imageBase64;
        produto.imagem = this.imagemNome;
        return this.produtoService.registrarProduto(produto);
    };
    CadastroComponent.prototype.upload = function (file) {
        // necessario para upload via IformFile
        this.imagemForm = file[0];
        this.imagemNome = file[0].name;
        // necessario para upload via base64
        var reader = new FileReader();
        reader.onload = this.manipularReader.bind(this);
        reader.readAsBinaryString(file[0]);
    };
    CadastroComponent.prototype.manipularReader = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.imageBase64 = btoa(binaryString);
    };
    CadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/produtos/cadastro/cadastro.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_produtoService__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/produtos/lista/lista.component.html":
/*!*****************************************************!*\
  !*** ./src/app/produtos/lista/lista.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"pb-3\">\n\n\n  <h1>Lista de Produtos</h1>\n  <hr>\n\n  <p>\n    <a class=\"btn btn-info\" [routerLink]=\"['/cadastro-produtos']\">Novo Produto</a>\n  </p>\n\n  <table class=\"table table-hover\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th></th>\n        <th>Nome</th>\n        <th>Fornecedor</th>\n        <th>Valor</th>\n        <th>Ativo?</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let produto of produtos'>\n        <td>\n          <img src=\"assets/{{ produto.imagem }}\" title=\"{{ produto.nome }}\" alt=\"{{ produto.imagem }}\" style=\"width: 70px; height: 100px\">\n        </td>\n        <td>\n          {{ produto.nome }}\n        </td>\n        <td>\n          {{ produto.nomeFornecedor }}\n        </td>\n        <td>\n          {{ produto.valor | currency:'BRL':symbol:'1.2-2' }}\n        </td>\n        <td>\n          <input class=\"check-box\" [checked]=\"produto.ativo === true\" type=\"checkbox\">\n        </td>\n        <td class=\"text-right\">\n          <a class=\"btn btn-warning\" href=\"#\">\n            <span class=\"fa fa-search\"></span>\n          </a>\n          <a class=\"btn btn-info\" href=\"#\">\n            <span class=\"fa fa-pencil-alt\"></span>\n          </a>\n          <a class=\"btn btn-danger\" href=\"#\">\n            <span class=\"fa fa-trash\"></span>\n          </a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n\n</main>"

/***/ }),

/***/ "./src/app/produtos/lista/lista.component.ts":
/*!***************************************************!*\
  !*** ./src/app/produtos/lista/lista.component.ts ***!
  \***************************************************/
/*! exports provided: ListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComponent", function() { return ListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_produtoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/produtoService */ "./src/app/produtos/services/produtoService.ts");



var ListaComponent = /** @class */ (function () {
    function ListaComponent(produtoService) {
        this.produtoService = produtoService;
    }
    ListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.produtoService.obterTodos()
            .subscribe(function (produtos) { return _this.produtos = produtos; }, function (error) { return _this.errorMessage = error; });
    };
    ListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista',
            template: __webpack_require__(/*! ./lista.component.html */ "./src/app/produtos/lista/lista.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_produtoService__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]])
    ], ListaComponent);
    return ListaComponent;
}());



/***/ }),

/***/ "./src/app/produtos/services/produtoService.ts":
/*!*****************************************************!*\
  !*** ./src/app/produtos/services/produtoService.ts ***!
  \*****************************************************/
/*! exports provided: ProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_base_baseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base/baseService */ "./src/app/base/baseService.ts");





var ProdutoService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProdutoService, _super);
    function ProdutoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    ProdutoService.prototype.obterTodos = function () {
        return this.http
            .get(this.UrlServiceV1 + "produtos", _super.prototype.ObterAuthHeaderJson.call(this))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.serviceError));
    };
    ProdutoService.prototype.registrarProdutoAlternativo = function (produto) {
        return this.http
            .post(this.UrlServiceV1 + 'produtos/adicionar', produto, _super.prototype.ObterHeaderFormData.call(this))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_super.prototype.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_super.prototype.serviceError));
    };
    ProdutoService.prototype.registrarProduto = function (produto) {
        return this.http
            .post(this.UrlServiceV1 + 'produtos', produto, _super.prototype.ObterAuthHeaderJson.call(this))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_super.prototype.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_super.prototype.serviceError));
    };
    ProdutoService.prototype.obterFornecedores = function () {
        return this.http
            .get(this.UrlServiceV1 + 'fornecedores', _super.prototype.ObterAuthHeaderJson.call(this))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_super.prototype.serviceError));
    };
    ProdutoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProdutoService);
    return ProdutoService;
}(src_app_base_baseService__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 style=\"padding-top: 50px\">Login </h3>\n\n<hr>\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <form (ngSubmit)=\"login()\" [formGroup]=\"userForm\">\n\n\n      <div class=\"alert alert-danger\" *ngIf=\"errors.length > 0\">\n        <h3 id=\"msgRetorno\">Opa! Alguma coisa não deu certo:</h3>\n        <ul>\n          <li *ngFor=\"let error of errors\">{{ error }}</li>\n        </ul>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"Nome\">Email</label>\n        <input formControlName=\"email\" class=\"form-control\" type=\"text\" name=\"email\">\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"Nome\">Senha</label>\n        <input formControlName=\"password\" class=\"form-control\" type=\"password\" name=\"password\">\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\">\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userService */ "./src/app/user/userService.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, userService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userForm = this.fb.group({
            email: '',
            password: ''
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.userForm.valid && this.userForm.dirty) {
            var _user = Object.assign({}, this.user, this.userForm.value);
            this.userService.login(_user)
                .subscribe(function (result) { _this.onSaveComplete(result); }, function (fail) { _this.onError(fail); });
        }
    };
    LoginComponent.prototype.onSaveComplete = function (response) {
        this.userService.persistirUserApp(response);
        this.router.navigateByUrl('/lista-produtos');
    };
    LoginComponent.prototype.onError = function (fail) {
        this.errors = fail.error.errors;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _userService__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/menu/menu.user.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/menu/menu.user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul [ngSwitch]=\"userLogado()\" class=\"nav navbar-nav navbar-right\">\n        <li *ngSwitchCase=\"false\"><a  class=\"nav-link text-dark\" [routerLink]=\"['/entrar']\">Entrar</a></li>\n        <li *ngSwitchCase=\"true\"><a  class=\"nav-link text-dark\">{{ saudacao }}</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/user/menu/menu.user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/menu/menu.user.component.ts ***!
  \**************************************************/
/*! exports provided: MenuUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuUserComponent", function() { return MenuUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userService */ "./src/app/user/userService.ts");



var MenuUserComponent = /** @class */ (function () {
    function MenuUserComponent(userService) {
        this.userService = userService;
    }
    MenuUserComponent.prototype.userLogado = function () {
        var user = this.userService.obterUsuario();
        if (user) {
            this.saudacao = "Olá " + user.email;
            return true;
        }
        return false;
    };
    MenuUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-user',
            template: __webpack_require__(/*! ./menu.user.component.html */ "./src/app/user/menu/menu.user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_userService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], MenuUserComponent);
    return MenuUserComponent;
}());



/***/ }),

/***/ "./src/app/user/userService.ts":
/*!*************************************!*\
  !*** ./src/app/user/userService.ts ***!
  \*************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_baseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/baseService */ "./src/app/base/baseService.ts");





var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    UserService.prototype.login = function (user) {
        return this.http
            .post(this.UrlServiceV1 + 'login', user, _super.prototype.ObterHeaderJson.call(this))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_super.prototype.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_super.prototype.serviceError));
    };
    UserService.prototype.persistirUserApp = function (response) {
        localStorage.setItem('app.token', response.accessToken);
        localStorage.setItem('app.user', JSON.stringify(response.userToken));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}(_base_baseService__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



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

module.exports = __webpack_require__(/*! D:\Davisson\FORMACAO REST com ASP.NET Core WebAPI\MinhaAPICompleta\MinhaAPICompleta\src\Dev.Assuncao.API\wwwroot\demo-webapi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map