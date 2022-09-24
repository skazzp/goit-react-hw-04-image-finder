import axios from 'axios';

export const getPictures = async (query, page) => {
  const config = {
    url: 'https://pixabay.com/api/',
    params: {
      key: '29419460-174de553ef6eeb556d53fec27',
      q: '',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: 1,
    },
  };
  try {
    if (query === undefined) query = config.params.q;
    else config.params.q = query;
    if (page !== 1) config.params.page = page;
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log('ERROR', error);
  }
};
