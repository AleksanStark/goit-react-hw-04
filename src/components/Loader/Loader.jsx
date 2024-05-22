import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.container}>
      <Oval />
    </div>
  );
};
export default Loader;
