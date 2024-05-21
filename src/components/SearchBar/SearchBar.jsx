import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    values.search !== ""
      ? onSearch(values.search)
      : toast.error("Please fill search field", { position: "top-right" });
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.header_form}>
          <Field
            className={css.header_form_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button className={css.header_form_button} type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
};
