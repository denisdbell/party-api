"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContoller = void 0;
const common_1 = require("@nestjs/common");
let UserContoller = class UserContoller {
    constructor() {
        this.users = [{
                userId: 0,
                firstName: "firstName",
                lastName: "lastName",
                username: "username",
                email: "email",
                password: "password",
                age: 12,
                address: "address",
                dob: null,
                verified: false
            },
            {
                userId: 1,
                firstName: "firstName",
                lastName: "lastName",
                username: "username",
                email: "email",
                password: "password",
                age: 12,
                address: "address",
                dob: null,
                verified: false
            }
        ];
    }
    findAll() {
        return this.users;
    }
    findById(id) {
        return this.users[id];
    }
    createUser(newUser) {
        return newUser;
    }
    updateUser(id, updatedUser) {
        return this.users[id];
        ;
    }
    removeUser(id) {
        return this.users[id];
        ;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserContoller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserContoller.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserContoller.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserContoller.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserContoller.prototype, "removeUser", null);
UserContoller = __decorate([
    (0, common_1.Controller)('users')
], UserContoller);
exports.UserContoller = UserContoller;
//# sourceMappingURL=user.controller.js.map