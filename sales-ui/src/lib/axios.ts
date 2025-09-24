import Axios from 'axios'

export const api = Axios.create({
  baseURL: 'https://example.com/api',
  timeout: 10000,
})

api.interceptors.request.use((config) => {
  return config
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err)
  }
)


