import css from "./ImageCard.module.css";
const ImageCard = ({ photo: { urls, description } }) => {
  return (
    <div className={css.container}>
      <img className={css.image_card} src={urls.small} alt={description} />
    </div>
  );
};
export default ImageCard;
