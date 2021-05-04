// 04/14 - helpers

// 選到 selector
function $g(selector) {
    // 判斷是否為 id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        // 回傳 Element
        return document.querySelector(selector);
    }

    // 回傳 NodeList 集合
    var nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;

}

function genUl(liArray) {
    let ul = document.createElement("ul");

    liArray.forEach(function (item, index) {
        let li = document.createElement("li");
        li.innerText = item;

        ul.appendChild(li);
    });

    return ul;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}

// 04/19 - Template_iPadTable 使用
// 創建
function $c(element, text) {
    let el = document.createElement(element);

    // 防呆
    if (text != null && text !== undefined && text.length > 0) {
        el.innerText = text;
    }

    return el;
}

// 匯出模組
export { $g, genUl, getRandom, $c };