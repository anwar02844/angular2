var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var KeyUpComponent = (function () {
    function KeyUpComponent() {
        this.values = '';
    }
    KeyUpComponent.prototype.showAlert = function (e) {
        console.log(e);
    };
    KeyUpComponent = __decorate([
        angular2_1.Component({
            selector: 'keyup-form',
            template: "\n    <h4>Type away! Press [enter] or mouse away when done.</h4>\n    <div>\n      <input #box name=\"anwarkeyup\"\n        (keyup.enter)=\"values=box.value\"\n        (blur)=\"values=box.value\"\n        (click)=\"showAlert($event)\">\n    <div>\n    <div>{{values}}</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], KeyUpComponent);
    return KeyUpComponent;
})();
exports.KeyUpComponent = KeyUpComponent;
//# sourceMappingURL=keyup.js.map