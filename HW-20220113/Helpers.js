function $gg(selector) {
    //一個node -> 回傳Element object
    //複數個node -> 回傳NodeList
    //如果沒有符合的，則會是一個empty NodeList -> 回傳null

    let nodelist = document.querySelectorAll(selector)

    if (nodelist.length == 0){
        return null
    }

    return nodelist.length == 1 ? nodelist[0] : nodelist
}

function $g(selector) {
    //判斷是否為id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        //回傳Element
        return document.querySelector(selector);
    }

    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

export { $gg, $g }