import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ element, toggleModal }) => {
  const { webformatURL, tags } = element;
  return (
    <GalleryItem onClick={() => toggleModal(element)}>
      <Image src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

GalleryItem.propTypes = {
  element: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }),
  toggleModal: PropTypes.func,
};
