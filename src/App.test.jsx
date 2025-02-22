import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage, { updateTimes, initializeTimes } from "./pages/BookingPage";

test("Date input is correct", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>,
  );
  const resDateInput = screen.getByTestId("resDate");
  fireEvent.change(resDateInput, { target: { value: "2025-02-16" } });

  expect(resDateInput.value).toBe("2025-02-16");
});

test("Time input is correct", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>,
  );
  const resTimeInput = screen.getByTestId("resTime");

  fireEvent.change(resTimeInput, { target: { value: "18:00" } });
  expect(resTimeInput.value).toBe("18:00");
});

describe("Reducer-functions", () => {
  it("initializeTimes returns the same state ", () => {
    const availableTimes = initializeTimes();
    expect(Array.isArray(availableTimes)).toBe(true);
    expect(availableTimes.length).toBeGreaterThan(0);
  });

  it("updateTimes returns the same state", () => {
    const mockState = ["12:00", "14:00", "16:00"];
    const newState = updateTimes(mockState, { type: "MOCK_ACTION" });
    expect(newState).toEqual(mockState);
  });
});
