import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ listPhoto, onOpen }) => {
  return (
    <ul className={css.list}>
      {listPhoto.map((photo) => (
        <li className={css.item} key={photo.id}>
          <ImageCard photo={photo} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
