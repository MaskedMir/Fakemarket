import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const registerUser = (userData: any) => api.post('/users', userData);
export const loginUser = (credentials: any) => api.post('/auth/login', credentials);
export const fetchProducts = () => api.get('/products');
export const fetchProduct = (id: number) => api.get(`/products/${id}`);

export default api;
