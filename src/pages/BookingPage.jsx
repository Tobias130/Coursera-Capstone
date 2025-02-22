import { useReducer } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      const selectedDate = new Date(action.date);
      const dayOfWeek = selectedDate.getDay();

      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        return initializeTimes().filter((time) => time < "21:00");
      }

      return initializeTimes();
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default BookingPage;
