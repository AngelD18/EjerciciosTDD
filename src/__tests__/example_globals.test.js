describe("matchers", () => {
  test("toBe", () => {
    expect(true).toBe(true);
  });
  test("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });

    const arr=['one','two'];
    expect(arr).toEqual(['one','two'])
  });
  test('not', () => {
    expect(true).not.toBe(false)
  });
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  test('thrown', () => {
    // expect(() => compileAndroidCode()).toThrow();
    // expect(() => compileAndroidCode()).toThrow(Error);
  
    // // You can also use a string that must be contained in the error message or a regexp
    // expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    // expect(() => compileAndroidCode()).toThrow(/JDK/);
  
    // // Or you can match an exact error message using a regexp like below
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });
});
