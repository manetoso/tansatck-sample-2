import axios from 'axios';

export const githubAPI = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.REACT_APP_GITHUB_API_KEY}`,
  },
});
