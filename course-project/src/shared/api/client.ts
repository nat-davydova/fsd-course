import * as axios from 'axios'

import { config } from '../config'

export const http = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`
    }

    return request
  },
  (err) => {
    console.log(err)
    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
    return Promise.reject(err)
  },
)
