import { BaseConverter } from "./base/BaseConverter";

export class PrimitiveConverter extends BaseConverter {

    public convert(type: string): string {
        if (this.primitiveTypesMap[type]) {
            return this.primitiveTypesMap[type];
        }
        switch (type) {
            case "long":
            case "int":
            case "double":
            case "float":
                return "number";
            case "string":
                return "string";
            case "bytes":
                return "Buffer";
            case "null":
                return "null";
            case "boolean":
                return "boolean";
            default:
                return "any";
        }
    }
}
