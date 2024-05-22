import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.message}>
      Oops something went wrong please reload the page
    </p>
  );
};
export default ErrorMessage;
