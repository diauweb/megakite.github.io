hexo.extend.tag.register('fsmall', function(_,content) {
    return `<p class="sml">${content}</p>`
}, {ends: true})