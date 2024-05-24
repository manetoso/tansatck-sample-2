import axios from 'axios';

export const githubAPI = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer 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',
  },
});
