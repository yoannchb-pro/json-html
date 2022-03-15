const selfClosingTag = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
    'command',
    'keygen',
    'menuitem'
];

function renderJson(obj = {}) {
    const attr = Object.keys(obj.attr || {}).map(key => ` ${key}="${obj.attr[key]}"`).join('');

    const isSelfClosing = selfClosingTag.includes(obj.name);

    const b = {
        start: `<${obj.name}${attr}${isSelfClosing ? '/' : ''}>`,
        end: isSelfClosing ? '' : `</${obj.name}>`
    };

    return b;
}

function Json2Html(obj = {}) {
    const isArray = obj instanceof Array;
    const contentIsString = typeof obj.content == "string";

    const render = renderJson(obj);

    let html = '';

    const iterator = (isArray ? obj : (contentIsString ? false : obj.content)) || [];

    if (!isArray && contentIsString) html += obj.content;

    for (const child of iterator) {
        html += Json2Html(child);
    }

    return isArray ? html : render.start + html + render.end;
}

module.exports = { renderJson, Json2Html, selfClosingTag };