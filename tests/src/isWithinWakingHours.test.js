const isWithinWakingHours = require("../../src/isWithinWakingHours");

const EARLIEST_HOUR = 9;
const LATEST_HOUR = 22;

describe("isWithinWakingHours", () => {
  it("returns false before waking hours", () => {
    const date = new Date();
    date.setHours(EARLIEST_HOUR - 1);
    expect(isWithinWakingHours(date)).toBe(false);
  });

  it("returns true during waking hours", () => {
    const date = new Date();
    date.setHours(LATEST_HOUR - 1);
    expect(isWithinWakingHours(date)).toBe(true);
  });

  it("returns false after waking hours", () => {
    const date = new Date();
    date.setHours(LATEST_HOUR + 1);
    expect(isWithinWakingHours(date)).toBe(false);
  });
});
