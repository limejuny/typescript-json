import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_is } from "./_test_is";

export const test_is_array_recursive_union_implicit = _test_is(
    "implicit recursive union array",
    ArrayRecursiveUnionImplicit.generate,
    (input) => TSON.is(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
