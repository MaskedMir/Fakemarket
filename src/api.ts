import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const registerUser = (userData: string) => api.post('/users', userData);
export const loginUser = (credentials: string) => api.post('/auth/login', credentials);
export const fetchProducts = () => api.get('/products');
export const fetchProduct = (id: number) => api.get(`/products/${id}`);

export default api;
