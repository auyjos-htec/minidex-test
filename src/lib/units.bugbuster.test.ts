import { describe, expect, it } from "vitest";
import { hectogramsToKg } from "./units";

describe("hectogramsToKg regression", () => {
  it("converts hectograms to kilograms by dividing by 10", () => {
    expect(hectogramsToKg(60)).toBe(6);
    expect(hectogramsToKg(130)).toBe(13);
  });
});
