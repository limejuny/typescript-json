import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_type = _test_is_clone(
    "type tag",
    TagType.generate,
    (input) => TSON.isClone(input),
    TagType.SPOILERS,
);
