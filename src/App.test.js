import React from "react";
import { fireEvent, render, act } from "@testing-library/react";
import App from "./App";


jest.mock('./components/Graph/Graph', () => {
  return () => <div role="graph"> GRAPH </div>
})

describe("Renders acquisition selection type page", () => {
  test("renders local file card", () => {
    const { getByText } = render(<App />);
    const localFileCardElement = getByText(/Local File/);

    expect(localFileCardElement).toBeInTheDocument();
  });

  test("renders local file card", () => {
    const { getByText } = render(<App />);
    const remoteCardElement = getByText(/Remote/);

    expect(remoteCardElement).toBeInTheDocument();
  });
});

describe("Renders the Graph", () => {
  test("when remote option is selected ", async () => {
    const { getByText, findByRole } = render(<App />);

    const remoteCardElement = getByText(/Remote/);

    fireEvent.click(remoteCardElement)

    const graph = await findByRole("graph")

    expect(graph).toBeInTheDocument();
  });

  test("when local option is selected ", async () => {
    const { getByText, findByRole } = render(<App />);

    const remoteCardElement = getByText(/Local File/);

    fireEvent.click(remoteCardElement)

    const graph = await findByRole("graph")

    expect(graph).toBeInTheDocument();
  });
});
