import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_dynamic_undefined =
    _test_assert_stringify(
        "dynamic tree",
        DynamicUndefined.generate,
        TSON.createAssertStringify<DynamicUndefined>(),
        DynamicUndefined.SPOILERS,
    );
