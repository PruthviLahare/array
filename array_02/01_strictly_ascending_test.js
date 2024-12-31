import { assert, assertFalse } from "jsr:@std/assert";
import { isStrictlyAscending } from "./01_strictly_ascending.js";

Deno.test("should be true when Array is in ascending order", () => {
  assert(isStrictlyAscending([0, 1, 2, 3]));
});

Deno.test("should be false when Array is not in ascending order", () => {
  assertFalse(isStrictlyAscending([2, 1, 2, 3]));
});

Deno.test("should be true when Array is empty", () => {
  assert(isStrictlyAscending([]));
});

Deno.test("should be true when Array is in ascending order", () => {
  assert(isStrictlyAscending([10, 20, 30, 40]));
});
