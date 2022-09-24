import { GalleryItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ element, toggleModal }) => {
  const { webformatURL, tags } = element;
  return (
    <GalleryItem onClick={() => toggleModal(element)}>
      <Image src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
