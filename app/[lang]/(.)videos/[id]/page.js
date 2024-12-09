import Modal from "@/components/Modal";
import VideoDetails from "@/components/VideoDetails";

const PhotoModal = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <VideoDetails id={id} lang={lang} />
    </Modal>
  );
};

export default PhotoModal;
