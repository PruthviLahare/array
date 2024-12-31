import { assert, assertFalse } from "jsr:@std/assert";
import { isStrictlyDescending } from "./02_strictly_descending.js";

Deno.test("array with no elements", () => {
  assert(isStrictlyDescending([]));
});

Deno.test("when the array has only has one element", () => {
  assert(isStrictlyDescending([2]));
});

Deno.test("when the array has two element and is strictly descending", () => {
  assert(isStrictlyDescending([2, 0]));
});

Deno.test(
  "when the array has two element and is not strictly descending",
  () => {
    assertFalse(isStrictlyDescending([1, 10]));
  }
);

Deno.test("when the array has three element and is strictly descending", () => {
  assert(isStrictlyDescending([11, 10, 9]));
});

Deno.test(
  "when the array has three element and is not strictly descending",
  () => {
    assertFalse(isStrictlyDescending([1, 10, 9]));
  }
);
