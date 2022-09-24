import { ModalPic, Overlay } from './Modal.styled';
import { Component } from 'react';

class Modal extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <Overlay onClick={this.handleClose}>
        <ModalPic>
          <img src={largeImageURL} alt="" />
        </ModalPic>
      </Overlay>
    );
  }
}

export default Modal;
