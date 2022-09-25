import { useState, useEffect, useCallback } from 'react';
import Searchbar from './Searchbar/Searchbar';
import * as API from '../services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    try {
      const data = await API.getPictures(query, page);

      if (!data.hits.length) {
        setError({ message: 'Response is empty', status: 'warning' });

        throw error;
      }

      setResponse(prevResponse =>
        !prevResponse ? data.hits : [...prevResponse, ...data.hits]
      );
    } catch (error) {
      // console.log(error);
      setResponse([]);
    }
    setIsLoading(false);
  };

  const getQuery = value => {
    setQuery(value);
  };
  const resetError = useCallback(() => setError(null), []);

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

  useEffect(() => {
    if (!query) return;
    setPage(1);
    setResponse([]);
    if (page === 1) getData();
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    if (!query) return;
    getData();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    error &&
      toast[error.notify?.status || error.status](
        error.notify?.message || error.message
      );
    error && resetError(null);
  }, [error, resetError]);

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
      <ToastContainer />
    </>
  );
};

export default App;
