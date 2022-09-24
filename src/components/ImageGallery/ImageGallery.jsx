import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

const ImageGallery = ({ data, toggleModal }) => {
  return (
    <ImageList>
      {data.map(elem => {
        return (
          <ImageGalleryItem
            key={elem.id}
            element={elem}
            toggleModal={toggleModal}
          />
        );
      })}
    </ImageList>
  );
};

export default ImageGallery;
