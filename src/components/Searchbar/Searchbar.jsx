import { useState } from 'react';

import sprite from '../../services/icons/sprite.svg';
import { HeaderBar, Form, FormBtn, Input, Icon } from './Searchbar.styled';

const Searchbar = ({ getQuery }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(() => event.target.value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    getQuery(query);
  };

  return (
    <HeaderBar>
      <Form onSubmit={handleFormSubmit}>
        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          value={query}
          onChange={handleChange}
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
};
export default Searchbar;
