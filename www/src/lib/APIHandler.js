import _ from 'lodash';
import axios from 'axios';

const APIHandler = axios.create({
  baseURL: process.env.REACT_APP_API_ORIGIN,
  withCredentials: true,
})

APIHandler.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export async function call(_method, _url, _body) {
  let method = _.lowerCase(_method);
  let url = _url;
  let data = _.cloneDeep(_body);

  let rs = await APIHandler({
    method,
    url,
    data
  });

  return rs?.data;
}
