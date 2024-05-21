import css from "./ImageCard.module.css";
export const ImageCard = ({ photo: { urls, description } }) => {
  return (
    <div className={css.container}>
      <img className={css.image_card} src={urls.small} alt={description} />
    </div>
  );
};
