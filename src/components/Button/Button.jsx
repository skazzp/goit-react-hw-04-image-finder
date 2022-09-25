import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ changePage }) => {
  return (
    <LoadMoreBtn type="button" onClick={changePage}>
      Load more
    </LoadMoreBtn>
  );
};

export default Button;

LoadMoreBtn.propTypes = {
  changePage: PropTypes.func,
};
