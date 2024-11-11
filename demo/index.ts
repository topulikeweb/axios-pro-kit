import { API } from "./request/main";

const [e, r] = await API.getShopList(2)
console.log(e, r)
