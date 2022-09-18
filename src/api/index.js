import axios from 'axios'

const instance = axios.create({
  baseURL: '/',
  timeout: 10000 * 3 * 10,
})

export const fetchGet = (url, params) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, params)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
export const fetchPost = (url, params) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export default {
  fetchGet
}