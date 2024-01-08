import React from "react";
import { render, screen } from "@testing-library/react";
import { TestSocket } from "../TestSocket";

it("renders TestSocket Component", () => {
  render(<TestSocket />);
  const text = screen.getByText("TestSocket");
  expect(text).toBeInTheDocument();
});
