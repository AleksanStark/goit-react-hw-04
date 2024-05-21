import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={css.container}>
      <Oval />
    </div>
  );
};
