import HttpClientModule from './HttpClientModule'

const API_DEF ={
    'KEY1': 'api/get_data',
    'KEY2': 'api/get_info',
}

class HttpApi {
  constructor() {
    this.Service = new HttpClientModule()
  }
  Call(key, data, finish, error, config) {
    key = key.toUpperCase()

    let m_config = {}
    if (config !== undefined && config !== null) {
      m_config = config
    }

    this.Service.post(API_DEF[key], data, m_config)
      .then(res => {
        finish(res)
      })
      .catch(err => {
        error(err)
      })
  }

  MCall(arrkey, arrdata, finish, error) {
    const arr = []
    for (let i = 0; i < arrkey.length; i++) {
      const url = {
        k: arrkey[i],
        d: arrdata[i]
      }
      const key = url.k.toUpperCase()
      
      url.k = API_DEF[key]
      const obj = {
        http: HTTPAPI.Service.post(url.k, url.d)
      }
      arr.push(obj.http)
    }
    this.Service.all(arr)
      .then((...res) => {
        finish(res)
      })
      .catch((...res) => {
        error(res)
      })
  }
}

const HTTPAPI = new HttpApi()

export default HTTPAPI
