"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    constructor() {
        this._id = 0;
    }
    findOne(id) {
        return new Promise((resolve) => {
            console.log(`SELECT * FROM ${this.nome_tabela} WHERE _id = ${id}`);
            resolve();
        });
    }
}
exports.Base = Base;
