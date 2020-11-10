import { fetch } from 'dva';
import hash from 'hash.js';
import { getDvaApp } from 'umi';

export function get(url, parm) {
  const newOptions = { expirys: false, method: 'GET', ...parm };
  return request(url, newOptions);
}

const checkStatus = response => {
  return response;
  //   if (response.status >= 200 && response.status < 300) {
  //     return response;
  //   } else if (response.status >= 500) {
  //     throw notifyErrorMessage(response, response.status);
  //   } else {
  //     return response
  //       .clone()
  //       .json()
  //       .then(content => {
  //         const { errorCode: httpCode, errorMessage, data } = content;
  //         let message = errorMessage;
  //         if (httpCode && httpCode >= 400) {
  //           if (httpCode === '403') {
  //             // data为权限名称
  //             message = `${message}:${data}`;
  //           }
  //           if (httpCode === '401') {
  //             router.push('/user');
  //             return;
  //           }
  //           throw notifyErrorMessage(response, httpCode, message);
  //         }
  //         return response;
  //       });
  //   }
};
const cachedSave = (response, hashcode) => {
  /**
   * Clone a response data and store it in sessionStorage
   * Does not support data other than json, Cache only json
   */
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.match(/application\/json/i)) {
    // All data is saved as text
    response
      .clone()
      .text()
      .then(content => {
        sessionStorage.setItem(hashcode, content);
        sessionStorage.setItem(`${hashcode}:timestamp`, Date.now());
      });
  }
  return response;
};

export function request(url, option) {
  const options = {
    ...option,
  };
  const fingerprint = url + (options.body ? JSON.stringify(options.body) : '');
  const hashcode = hash
    .sha256()
    .update(fingerprint)
    .digest('hex');

  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => cachedSave(response, hashcode))
    .then(response => {
      // DELETE and 204 do not return data by default
      // using .json will report an error.
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch(e => {
      const { code, name, message, response: { status } = {} } = e;
      if (code === 20) {
        console.info(e);
      }
      if (status === 401) {
        // @HACK
        /* eslint-disable no-underscore-dangle */
        getDvaApp.dispatch({
          type: 'login/logout',
        });
        return;
      }
      // // environment should not be used
      // if (status === 401) {
      //   notification.error({
      //     message: `登陆失败`,
      //   });
      //   // router.push('/exception/403');
      //   return;
      // }
      // if (status === 402) {
      //   notification.error({
      //     message: `未登录`,
      //   });
      //   // router.push('/exception/403');
      //   return;
      // }
      // if (status === 403) {
      //   notification.error({
      //     message: `没有权限`,
      //   });
      //   // router.push('/exception/403');
      //   return;
      // }
      // if (status === 404) {
      //   notification.error({
      //     message: `请求不存在`,
      //   });
      //   // router.push('/exception/403');
      //   return;
      // }
      // if (status === 409) {
      //   notification.error({
      //     message: `请求失败`,
      //   });
      //   // router.push('/exception/403');
      //   return;
      // }
      // if (status === 500) {
      //   notification.error({
      //     message: `请求异常`,
      //   });
      //   return;
      // }
      if (status >= 404 && status < 422) {
        // router.push('/exception/404');
      }
    });
}
