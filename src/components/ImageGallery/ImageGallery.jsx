import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ data, toggleModal }) => {
  console.log(data);
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

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  toggleModal: PropTypes.func,
};
