import { LoadMoreBtn } from './Button.styled';

const Button = ({ changePage }) => {
  return (
    <LoadMoreBtn type="button" onClick={changePage}>
      Load more
    </LoadMoreBtn>
  );
};

export default Button;
