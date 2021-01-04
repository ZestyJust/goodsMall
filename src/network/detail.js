import { request } from "./request";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {

        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.discountDesc = itemInfo.discountDesc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.lowNowPrice = itemInfo.lowNowPrice
        this.columns = columns
        this.services = services
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}

export class Params {
    constructor(info, rule) {
        this.sets = info.set;
        this.tasizes = rule.tables
    }
}
