import { healthCheck, validateEmail } from "../../src/utils/health.util.js";

describe("healthCheck", () => {
  it("should return status ok with timestamp and uptime", () => {
    const result = healthCheck();

    expect(result.status).toBe("ok");
    expect(result.timestamp).toBeDefined();
    expect(result.uptime).toBeGreaterThanOrEqual(0);
    expect(new Date(result.timestamp)).toBeInstanceOf(Date);
  });
});

describe("validateEmail", () => {
  it("should return true for valid emails", () => {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("user.name@domain.co")).toBe(true);
    expect(validateEmail("user+tag@example.org")).toBe(true);
  });

  it("should return false for invalid emails", () => {
    expect(validateEmail("invalid")).toBe(false);
    expect(validateEmail("invalid@")).toBe(false);
    expect(validateEmail("@example.com")).toBe(false);
    expect(validateEmail("")).toBe(false);
  });
});