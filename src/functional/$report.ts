import { IValidation } from "../IValidation";

export const $report = (output: IValidation) => {
    const array: IValidation.IError[] = output.errors;
    const reportable = (path: string): boolean => {
        if (array.length === 0) return true;
        const last: string = array[array.length - 1]!.path;
        return (
            path.length > last.length || last.substring(0, path.length) !== path
        );
    };
    return (exceptable: boolean, error: IValidation.IError): false => {
        if (exceptable && reportable(error.path)) array.push(error);
        return false;
    };
};
