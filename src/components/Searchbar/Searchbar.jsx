import { Component } from 'react';
import sprite from '../../services/icons/sprite.svg';
import { HeaderBar, Form, FormBtn, Input, Icon } from './Searchbar.styled';
class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    this.setState({ query: event.target.value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    this.props.setQuery(query);
  };
  render() {
    return (
      <HeaderBar>

        <Form onSubmit={this.handleFormSubmit}>
          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
          <FormBtn type="submit">
            <Icon>
              <use href={sprite + '#icon-search'}></use>
            </Icon>
          </FormBtn>
        </Form>
      </HeaderBar>
    );
  }
}
export default Searchbar;
