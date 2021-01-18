import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TopHeader from "./TopHeader";

const setSearchTextMock = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

beforeAll(() => {
  jest.resetAllMocks();
});

it("render search page if did search", async () => {
  const headerComponent = render(
    <TopHeader setSearchText={setSearchTextMock} />
  );
  const searchTextField = (await headerComponent.findByPlaceholderText(
    "Search articles"
  )) as HTMLInputElement;

  fireEvent.change(searchTextField, { target: { value: "sports" } });
  fireEvent.keyDown(searchTextField, { keyCode: 13 });
  expect(setSearchTextMock).toBeCalledTimes(1);
  expect(setSearchTextMock).toBeCalledWith("sports");
});
