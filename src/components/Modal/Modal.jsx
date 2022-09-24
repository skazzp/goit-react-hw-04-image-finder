import { ModalPic, Overlay } from './Modal.styled';
import { useState, useEffect } from 'react';

const Modal = ({ toggleModal, largeImageURL }) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    console.log('add');
    return () => {
      window.removeEventListener('keydown', handleClose);
      console.log('rem');
    };
  }, [isOpen]);

  const handleClose = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      toggleModal();
      setIsOpen(false);
    }
  };

  return (
    <Overlay onClick={handleClose}>
      <ModalPic>
        <img src={largeImageURL} alt="" />
      </ModalPic>
    </Overlay>
  );
};

export default Modal;

// class Modal extends Component {
//   state = {
//     isLoading: true,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleClose);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleClose);
//   }

//   handleClose = e => {
//     if (e.target === e.currentTarget || e.code === 'Escape') {
//       this.props.toggleModal();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props;
//     return (
//       <Overlay onClick={this.handleClose}>
//         <ModalPic>
//           <img src={largeImageURL} alt="" />
//         </ModalPic>
//       </Overlay>
//     );
//   }
// }

// export default Modal;
