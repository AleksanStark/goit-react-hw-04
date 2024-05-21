import { ImageCard } from "..";
import css from "./ImageGallery.module.css";
export const ImageGallery = ({ listPhoto }) => {
  return (
    <ul className={css.list}>
      {listPhoto.map((photo) => (
        <li className={css.item} key={photo.id}>
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
};
