import axios from 'axios'
class HttpClientModule {
  constructor() {
    this.instance = axios.create({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      baseURL: 'input your url',
    })
  }
  get(url, config = {}) {
    return this.instance.get(url, config)
  }
  post(url, data = undefined, config = {}) {
    return this.instance.post(url, data, config)
  }
  put(url, data = undefined, config = {}) {
    return this.instance.put(url, data, config)
  }
  delete(url, config = {}) {
    return this.instance.delete(url, config)
  }
  all(arr) {
    return axios.all(arr);
  }
}

export default HttpClientModule;
