// import axios from 'axios';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import * as API from '../services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    response: [],
    query: '',
    isLoading: false,
    error: null,
    page: 1,
    isModalOpen: false,
    modalData: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ isLoading: true, response: [], page: 1 });
      const { query } = this.state;
      const response = await API.getPictures(query, 1);
      this.setState({ response: response.hits, isLoading: false });
    }
    if (
      this.state.page !== prevState.page &&
      this.state.query === prevState.query &&
      this.state.page !== 1
    ) {
      this.setState({ isLoading: true });
      const { query, page } = this.state;
      const response = await API.getPictures(query, page);
      this.setState(prevState => ({
        response: [...prevState.response, ...response.hits],
        isLoading: false,
      }));
    }
  }
  setQuery = value => {
    this.setState({ query: value });
  };
  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  toggleModal = (modalData = null) => {
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
      modalData,
    }));
  };
  render() {
    const { response, modalData, isModalOpen } = this.state;
    return (
      <>
        <Searchbar setQuery={this.setQuery} />
        <Container>
          {this.state.isLoading && <Loader />}
          <ImageGallery data={response} toggleModal={this.toggleModal} />
          {response.length > 0 && <Button changePage={this.changePage} />}
        </Container>
        {isModalOpen && <Modal {...modalData} toggleModal={this.toggleModal} />}
      </>
    );
  }
}
