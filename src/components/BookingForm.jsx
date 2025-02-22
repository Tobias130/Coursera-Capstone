import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, dispatch }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto flex flex-col items-center justify-between space-y-8 lg:w-3/4 lg:flex-row lg:space-y-0">
        <Formik
          initialValues={{
            resDate: new Date().toISOString().split("T")[0],
            resTime: "",
            guests: 2,
            occasion: "",
          }}
          validationSchema={Yup.object({
            resDate: Yup.date()
              .min(
                new Date(new Date().setHours(0, 0, 0, 0)),
                "The date must be in the future",
              )
              .required("Required"),
            resTime: Yup.string().required("Required"),
            guests: Yup.number()
              .required("Required")
              .min(1, "Minimum 1 guest")
              .max(10, "Maximum 10 guests"),
            occasion: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            alert("Your reservation has been submitted!");
          }}
        >
          {({ handleChange, handleBlur, errors, touched, values }) => (
            <Form className="w-full py-10">
              <label
                htmlFor="resDate"
                className="text-xs mb-2 block font-bold uppercase"
              >
                Choose date
              </label>
              <Field
                data-testid="resDate"
                type="date"
                id="resDate"
                name="resDate"
                onChange={(e) => {
                  handleChange(e);
                  dispatch({ type: "UPDATE", date: e.target.value });
                }}
                onBlur={handleBlur}
                value={values.resDate}
                className={`text-sm my-4 w-full rounded border bg-white px-3 py-3 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring ${
                  errors.resDate && touched.resDate
                    ? "border-red"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="resDate"
                component="div"
                className="text-xs text-red"
              />

              <label
                htmlFor="resTime"
                className="text-xs mb-2 block font-bold uppercase"
              >
                Choose time
              </label>
              <Field
                data-testid="resTime"
                as="select"
                name="resTime"
                className="text-sm my-4 w-full rounded border-0 bg-white px-3 py-3 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
              >
                <option value="" disabled>
                  Select time
                </option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="resTime"
                component="div"
                className="text-xs text-red"
              />

              <label
                htmlFor="guests"
                className="text-xs my-4 mb-2 block font-bold uppercase"
              >
                Number of guests
              </label>
              <Field
                type="number"
                name="guests"
                min="1"
                max="10"
                className="text-sm my-4 w-full rounded border-0 bg-white px-3 py-3 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
              />
              <ErrorMessage
                name="guests"
                component="div"
                className="text-xs text-red"
              />

              <label
                htmlFor="occasion"
                className="text-xs mb-2 block font-bold uppercase"
              >
                Occasion
              </label>
              <Field
                as="select"
                name="occasion"
                className="text-sm my-4 w-full rounded border-0 bg-white px-3 py-3 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
              >
                <option value="" disabled>
                  Select occasion
                </option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
              <ErrorMessage
                name="occasion"
                component="div"
                className="text-xs text-red"
              />

              <button
                data-testid="submit"
                type="submit"
                className="hover:bg-yellow-600 mt-6 rounded-2xl bg-yellow px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-1"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BookingForm;
