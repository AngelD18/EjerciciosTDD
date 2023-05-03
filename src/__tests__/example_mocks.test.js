jest.mock("")
it("first example", () => {
  const myMock = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce("hello world")
    .mockReturnValueOnce(5);
  const result1 = myMock();
  const result2 = myMock();
  const result3 = myMock();
  expect(myMock).toHaveBeenCalled();
  expect(result1).toBe(true);
  expect(result2).toBe("hello world");
  expect(result3).toBe(5);
});

it('second example', () => {
  
});