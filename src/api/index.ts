import http from './http';

export const getHelloWord = (params) => {
  return http.get('/api', params);
};

