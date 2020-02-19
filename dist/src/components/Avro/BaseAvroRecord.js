"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const avro = require("avsc");
const typescript_memoize_1 = require("typescript-memoize");
class BaseAvroRecord {
    static getTypeForSchema(schema) {
        return avro.Type.forSchema(schema);
    }
    static createTypeResolver(baseType, newType) {
        return baseType.createResolver(newType);
    }
}
BaseAvroRecord.subject = "";
BaseAvroRecord.schema = {};
__decorate([
    typescript_memoize_1.Memoize((schema) => {
        return schema.namespace + schema.name;
    })
], BaseAvroRecord, "getTypeForSchema", null);
__decorate([
    typescript_memoize_1.Memoize((schema) => {
        return schema.namespace + schema.name;
    })
], BaseAvroRecord, "createTypeResolver", null);
exports.BaseAvroRecord = BaseAvroRecord;
//# sourceMappingURL=BaseAvroRecord.js.map