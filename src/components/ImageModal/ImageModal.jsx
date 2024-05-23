import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <img className={css.img} src={image.urls.regular} />
    </ReactModal>
  );
};
export default ImageModal;
