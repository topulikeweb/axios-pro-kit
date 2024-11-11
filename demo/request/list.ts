import { Get } from "../../src/request";
import { IData } from "../type";

export function getShopList(id) {
    return Get<IData>('https:8080', { id })
}

