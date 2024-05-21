import css from "./LoadMoreBtn.module.css";
export const LoadMoreBtn = ({ onLoad }) => {
  return (
    <button className={css.button} onClick={onLoad}>
      Load More
    </button>
  );
};
