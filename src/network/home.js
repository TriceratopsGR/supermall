//首页请求
import { request } from "./request";
//请求
export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
  });
}
export function grtHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}
