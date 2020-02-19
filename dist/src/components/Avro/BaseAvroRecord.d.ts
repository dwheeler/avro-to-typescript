import { Type } from "avsc";
import { AvroRecord } from "./AvroRecord";
export declare abstract class BaseAvroRecord implements AvroRecord {
    static readonly subject: string;
    static readonly schema: {};
    static getTypeForSchema(schema: any): Type;
    static createTypeResolver(baseType: Type, newType: Type): Type;
    abstract schema(): any;
    abstract subject(): string;
}
