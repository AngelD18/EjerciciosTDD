import { render } from "@testing-library/react";
import { App } from "../App";


describe("Login", () => {
  it("Shoud render title screen", () => {
    const sut = render(<App/>);
    const titleElement = sut.getByText("React jest clean code");
    expect(titleElement).toBeInTheDocument();
  });
});
