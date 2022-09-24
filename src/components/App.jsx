// import axios from 'axios';
import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import * as API from '../services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { Container } from './App.styled';

const App = () => {
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const getData = async () => {
    setIsLoading(() => true);

    const data = await API.getPictures(query, page);
    console.log(data);
    if (data)
      setResponse(prevResponse =>
        !prevResponse ? data.hits : [...prevResponse, ...data.hits]
      );
    // else {
    //   setError(() => data);
    // }
    setIsLoading(false);
  };
  useEffect(() => {
    if (!query) return;
    setPage(1);
    setResponse([]);
    if (page === 1) getData();
  }, [query]);
  useEffect(() => {
    if (!query) return;
    getData();
  }, [page]);

  const getQuery = value => {
    setQuery(value);
  };
  const changePage = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };
  const toggleModal = (modalData = null) => {
    setIsModalOpen(prevIsModalOpen => {
      return !prevIsModalOpen;
    });
    setModalData(modalData);
  };
  return (
    <>
      <Searchbar getQuery={getQuery} />
      <Container>
        <ImageGallery data={response} toggleModal={toggleModal} />
        {isLoading && <Loader />}

        {response.length > 0 && !isLoading && (
          <Button changePage={changePage} />
        )}
      </Container>
      {isModalOpen && <Modal {...modalData} toggleModal={toggleModal} />}
    </>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     response: [],
//     query: '',
//     isLoading: false,
//     error: null,
//     page: 1,
//     isModalOpen: false,
//     modalData: null,
//   };
// async componentDidUpdate(prevProps, prevState) {
//   if (this.state.query !== prevState.query) {
//     this.setState({ isLoading: true, response: [], page: 1 });
//     const { query } = this.state;
//     const response = await API.getPictures(query, 1);
//     this.setState({ response: response.hits, isLoading: false });
//   }
//   if (
//     this.state.page !== prevState.page &&
//     this.state.query === prevState.query &&
//     this.state.page !== 1
//   ) {
//     this.setState({ isLoading: true });
//     const { query, page } = this.state;
//     const response = await API.getPictures(query, page);
//     this.setState(prevState => ({
//       response: [...prevState.response, ...response.hits],
//       isLoading: false,
//     }));
//   }
// }
//   setQuery = value => {
//     this.setState({ query: value });
//   };
//   changePage = () => {
//     this.setState(prev => ({ page: prev.page + 1 }));
//   };
//   toggleModal = (modalData = null) => {
//     this.setState(prev => ({
//       isModalOpen: !prev.isModalOpen,
//       modalData,
//     }));
//   };
//   render() {
//     const { response, modalData, isModalOpen } = this.state;
//     return (
//       <>
//         <Searchbar setQuery={this.setQuery} />
//         <Container>
//           {this.state.isLoading && <Loader />}
//           <ImageGallery data={response} toggleModal={this.toggleModal} />
//           {response.length > 0 && <Button changePage={this.changePage} />}
//         </Container>
//         {isModalOpen && <Modal {...modalData} toggleModal={this.toggleModal} />}
//       </>
//     );
//   }
// }
