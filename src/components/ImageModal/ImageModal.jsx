import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "none",
        },
      }}
    >
      <img className={css.img} src={image.urls.regular} />
    </ReactModal>
  );
};
export default ImageModal;
