"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
class TypeHelper {
    static isRecordType(schema) {
        if (typeof schema === "string" || schema instanceof Array) {
            return false;
        }
        return schema.type === "record";
    }
    static isArrayType(schema) {
        if (typeof schema === "string" || schema instanceof Array) {
            return false;
        }
        return schema.type === "array";
    }
    static isMapType(schema) {
        if (typeof schema === "string" || schema instanceof Array) {
            return false;
        }
        return schema.type === "map";
    }
    static isEnumType(schema) {
        if (typeof schema === "string" || schema instanceof Array) {
            return false;
        }
        return schema.type === "enum";
    }
    static isUnion(schema) {
        return schema instanceof Array;
    }
    static isLogicalType(schema) {
        if (typeof schema === "string" || schema instanceof Array) {
            return false;
        }
        return "logicalType" in schema;
    }
    static isOptional(schema) {
        if (TypeHelper.isUnion(schema)) {
            const t1 = schema[0];
            if (typeof t1 === "string") {
                return t1 === "null";
            }
        }
        return false;
    }
    static hasDefault(field) {
        if (field.default === undefined) {
            return false;
        }
        return true;
    }
    static getDefault(field) {
        if (field.default === undefined) {
            return false;
        }
        if (field.default === "") {
            return `""`;
        }
        if (field.type === "string") {
            return `"${field.default}"`;
        }
        if (Array.isArray(field.default) && field.default.length === 0) {
            return `[]`;
        }
        if (util_1.isObject(field.default)) {
            return JSON.stringify(field.default);
        }
        if (util_1.isObject(field.type) && field.type.type === "enum") {
            return `${field.type.name}.${field.default}`;
        }
        return field.default;
    }
}
exports.TypeHelper = TypeHelper;
//# sourceMappingURL=TypeHelper.js.map