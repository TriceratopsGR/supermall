import axios from "axios";
//4
export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6",
    timeout: 5000,
  });
  //2. axios的拦截器
  //这样就是全局的
  //axios.interceptors
  //拦截实例的 拦截请求
  // 2.1请求拦截的作用
  instance.interceptors.request.use(
    (config) => {
      //打印的是一些配置
      return config;
    },
    (err) => {
      //失败
      console.log(err);
    }
  );
  //2.2响应拦截
  instance.interceptors.response.use(
    (res) => {
      //结构
      // 不返回的话
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  // 3.发生真正的网络请求
  // 本身返回值就是 一个 Promise
  return instance(config);
}
