const Engineer = require("../utils/Engineer");

test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Johnny", 1, "test@test.com", testValue, "Engineer");
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Johnny", 1, "test@test.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Johnny", 1, "test@test.com", testValue, "Engineer");
    expect(e.getGithub()).toBe(testValue);
});