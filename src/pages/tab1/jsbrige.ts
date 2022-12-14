declare global {
  interface Window {
    webkit: any;
    common: any;
  }
}

export const globalProps = {
  isIos: false
};

const handleJson = (name, param, success, error) => {
  const successCB = () => {
    console.log("res===successCB");
    success();
  };
  const errorCB = () => {
    error();
  };
  let json = {
    ...{ name: name, param: param },
    ...{ success: `${name}Success`, error: `${name}Error` }
  };
  window[`${json["success"]}`] = successCB;
  window[`${json["error"]}`] = errorCB;
  return json;
};

/**
 * h5è°çšćç
 */
export const nativeApi = {
  common: (name: string, param: any) => {
    return new Promise((resolve, reject) => {
      const json = handleJson(name, param, resolve, reject);
      if (globalProps.isIos) {
        if (!window.webkit) {
          return;
        }
        window.webkit.messageHandlers.common.postMessage(json);
      } else {
        window.common.handlerAction(json);
      }
    });
  },
  getToken: json => {
    window.webkit &&
      window.webkit.messageHandlers.getToken.postMessage(JSON.stringify(json));
  },
  getName: json => {
    window.webkit &&
      window.webkit.messageHandlers.getName.postMessage(JSON.stringify(json));
  }
};
export const unNativeApi = name => {
  delete window[`${name}Success`];
  delete window[`${name}Error`];
};

export const webApi = (name, fn1) => {
  window[name] = fn1;
};
export const unWebApi = name => {
  delete window[name];
};
