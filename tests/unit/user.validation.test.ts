import { userSchema } from "../../src/validation/user.validation.js";

describe("userSchema validation", () => {
  it("should validate a valid user object", () => {
    const validUser = {
      name: "John Doe",
      email: "john@example.com",
      password: "securepassword123",
    };

    const result = userSchema.safeParse(validUser);
    expect(result.success).toBe(true);
  });

  it("should reject invalid email", () => {
    const invalidUser = {
      name: "John Doe",
      email: "invalid-email",
      password: "securepassword123",
    };

    const result = userSchema.safeParse(invalidUser);
    expect(result.success).toBe(false);
  });

  it("should reject password shorter than 10 characters", () => {
    const invalidUser = {
      name: "John Doe",
      email: "john@example.com",
      password: "short",
    };

    const result = userSchema.safeParse(invalidUser);
    expect(result.success).toBe(false);
  });
});